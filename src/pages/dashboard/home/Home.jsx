import React from "react";
import { FaBox, FaUsers, FaClipboardList, FaCheckSquare } from "react-icons/fa";

const Home = () => {
  const stats = [
    { title: "Products", count: 194, icon: <FaBox className="text-blue-500" /> },
    { title: "Users", count: 208, icon: <FaUsers className="text-green-500" /> },
    { title: "Posts", count: 251, icon: <FaClipboardList className="text-purple-500" /> },
    { title: "Todos", count: 254, icon: <FaCheckSquare className="text-yellow-500" /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4">
            <div className="text-4xl">{stat.icon}</div>
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
