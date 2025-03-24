import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed p-5">
      <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="p-3 bg-gray-800 rounded hover:bg-gray-700">
          Home 🏠
        </Link>
        <Link to="/products" className="p-3 bg-gray-800 rounded hover:bg-gray-700">
          Products 🛒
        </Link>
        <Link to="/login" className="p-3 bg-gray-800 rounded hover:bg-gray-700">
          Login 🔑
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
