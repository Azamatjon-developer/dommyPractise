import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash } from "react-icons/fi";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ✅ Yangi todo qo'shish
  const addTodo = () => {
    if (!newTodo.trim()) return;

    axios
      .post("https://dummyjson.com/todos/add", {
        todo: newTodo,
        completed: false,
        userId: 5,
      })
      .then((res) => {
        setTodos([...todos, res.data]);
        setNewTodo("");
      });
  };

  // ❌ Todo o'chirish
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✏️ Todo tahrirlash
  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  if (loading) return <p className="text-center mt-10">⏳ Yuklanmoqda...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
        📝 My Todos
      </h1>

      {/* Yangi todo qo'shish */}
      <div className="flex mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          Add
        </button>
      </div>

      {/* ToDo Ro'yxati */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => editTodo(todo.id)}
                className="w-5 h-5"
              />
              <span className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
                {todo.todo}
              </span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => editTodo(todo.id)} className="text-blue-500 hover:text-blue-700">
                <FiEdit size={20} />
              </button>
              <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
                <FiTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
