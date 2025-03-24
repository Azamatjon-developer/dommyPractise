import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Users
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-600 mt-2">Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
