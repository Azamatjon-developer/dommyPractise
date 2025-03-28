import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/dashboard/home/Home";
import Users from "../../pages/dashboard/users/Users";
import Products from "../../pages/dashboard/products/Products";
import Posts from "../../pages/dashboard/posts/Posts";
import Todos from "../../pages/dashboard/todos/Todos";
import Sidebar from "../../components/Sidebar";
import SinglePost from "../../pages/dashboard/posts/SinglePost";

const DashboardRouter = () => {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-2  ml-64">
        <div className="bg-white shadow-md rounded-lg p-5 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost/>} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardRouter;
