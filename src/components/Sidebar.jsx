import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingCart, Users, FileText, CheckSquare } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      to: "/",
      label: "Home",
      icon: <Home size={20} /> 
    },
    { 
      to: "/products",
      label: "Products",
      icon: <ShoppingCart size={20} /> 
      },
    { to: "/users", label: "Users", icon: <Users size={20} /> },
    { to: "/posts", label: "Posts", icon: <FileText size={20} /> },
    { to: "/todos", label: "Todos", icon: <CheckSquare size={20} /> },
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center">Dashboard</h1>
      <nav className="flex flex-col space-y-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 p-3 rounded-lg transition duration-300 
              
              ${
              location.pathname === link.to
                ? "bg-gray-700 shadow-md"
                : "hover:bg-gray-500"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
