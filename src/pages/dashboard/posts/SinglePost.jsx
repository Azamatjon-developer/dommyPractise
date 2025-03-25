import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams(); // URL dan ID ni olish
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`) // ✅ TO'G'RI URL
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik bor !");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-gray-600 mt-4 text-lg">{post.body}</p>
        <p className="text-gray-500 mt-2">💬 Comments: {post.reactions}</p>
        <p className="text-gray-500 mt-1">
          🏷️ Tags: {post.tags?.join(", ")}
        </p>

        <button
          className="mt-6 bg-gray-800 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 hover:bg-gray-900"
          onClick={() => navigate(-1)}
        >
          ⬅️ Back to Posts
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
