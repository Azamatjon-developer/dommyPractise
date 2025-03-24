import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/dashboard/home/Home";
import Users from "../../pages/dashboard/users/Users";
import Products from "../../pages/dashboard/products/Products";
import Posts from "../../pages/dashboard/posts/Posts";
import Todos from "../../pages/dashboard/todos/Todos";
import Sidebar from "../../components/Sidebar";

const DashboardRouter = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - Har doim chap tomonda turadi */}
      <Sidebar />

      {/* Main Content - Har bir sahifa shu yerda chiqadi */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto ml-64">
        <div className="bg-white shadow-md rounded-lg p-5 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardRouter;
