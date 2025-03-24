import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Sidebar from "../components/Sidebar";
import Login from "../pages/login/auth/Login";

const RouterConfig = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-5 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouterConfig;
