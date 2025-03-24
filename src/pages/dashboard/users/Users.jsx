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
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
            <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-600">Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
