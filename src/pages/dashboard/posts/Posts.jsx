import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Navigatsiya uchun hook

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Xatolik bor !");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        📝 Blog Postlar
      </h1>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">
              {post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}
            </p>
            <button
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              📖 Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
