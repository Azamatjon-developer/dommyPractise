import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik yuz berdi !");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  if (loading) return <p className="text-center mt-10">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        ✅ ToDo Ro'yxati
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`bg-white shadow-lg rounded-xl p-6 transition duration-300 hover:scale-105 hover:shadow-2xl ${
              todo.completed ? "border-l-8 border-green-500" : "border-l-8 border-red-500"
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {todo.todo}
            </h2>
            <p className="text-gray-600 mt-2">
              {todo.completed ? "✅ " : "⏳ "}
            </p>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg transition duration-300 hover:bg-blue-700"
                onClick={() => handleUpdate(todo.id)}
              >
                ✏️ Update
              </button>
              <button
                className="bg-red-600 text-white font-semibold py-1 px-3 rounded-lg transition duration-300 hover:bg-red-700"
                onClick={() => handleDelete(todo.id)}
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
