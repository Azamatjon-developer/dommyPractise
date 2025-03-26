import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik bor !");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-white text-xl">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500 text-xl">{error}</p>;

  return (
    <div className=" bg-gradient-to-rflex flex-col items-center p-10">
      <h1 className="text-5xl font-extrabold text-white mb-10">📝 Blog Postlar</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-200 shadow-lg rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-gray-400 mt-2 text-sm">
              {post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
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
