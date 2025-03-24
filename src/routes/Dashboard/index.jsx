import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../pages/dashboard/home/Home";
import Users from "../../pages/dashboard/users/Users";
import Sidebar from "../../components/Sidebar";
import Posts from "../../pages/dashboard/posts/Posts";
import Products from '../../pages/dashboard/products'

const DashboardRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/posts", element: <Posts /> },
    { path: "/users", element: <Users /> },
    {
      path:'/products', element:<Products/>
    }
  ]);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="bg-white shadow-md rounded-lg p-5 h-full">
          {routes}
        </div>
      </div>
    </div>
  );
};

export default DashboardRouter;
