import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`) 
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik bor !");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-white text-xl">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500 text-xl">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-10">
      <div className="bg-gray-800 text-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full transform transition duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-5">{post.title}</h1>
        <p className="text-gray-300 text-lg leading-relaxed">{post.body}</p>
        
        <div className="mt-4 flex flex-wrap gap-4 text-gray-400 text-sm">
          <p>👍 Likes: <span className="text-blue-400">{post.reactions?.likes}</span></p>
          <p>👎 Dislikes: <span className="text-red-400">{post.reactions?.dislikes}</span></p>
          <p>🏷️ Tags: {post.tags?.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded-lg text-xs ml-1">
              {tag}
            </span>
          ))}</p>
        </div>

        <button
          className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 hover:from-blue-600 hover:to-indigo-700"
          onClick={() => navigate(-1)}
        >
          ⬅️ Back to Posts
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
