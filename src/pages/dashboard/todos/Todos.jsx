import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash, FiSave } from "react-icons/fi";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // ✅ localStorage dan todos ni olish
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
      setLoading(false);
    } else {
      axios.get("https://dummyjson.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
        localStorage.setItem("todos", JSON.stringify(res.data.todos));
      });
    }
  }, []);

  // ✅ Har safar todos o'zgarsa, localStorage'ga saqlash
  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // ✅ Add todo
  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newTask = {
      id: Date.now(),
      todo: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  // ❌ Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✅ Edit todo
  const editTodo = (id, newText, completed) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: newText, completed: completed } : todo
      )
    );
    setEditId(null);
  };

  // 🎯 Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTodo();
  };

  if (loading) return <p className="text-center mt-10 text-white text-xl">⏳ Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-10">
      <div className="bg-gray-800 text-white shadow-2xl rounded-xl p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">📝 My Todos</h1>

        {/* Add Todo Input */}
        <div className="flex mb-6 border-b pb-4 border-gray-600">
          <input
            type="text"
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={addTodo}
            className="ml-3 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-3 border rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => editTodo(todo.id, todo.todo, !todo.completed)}
                  className="w-5 h-5"
                />

                {editId === todo.id ? (
                  <input
                    type="text"
                    className="bg-gray-600 text-white px-2 py-1 rounded"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") editTodo(todo.id, editText, todo.completed);
                    }}
                  />
                ) : (
                  <span
                    className={`text-lg transition ${todo.completed ? "line-through text-gray-400" : ""}`}
                  >
                    {todo.todo}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {editId === todo.id ? (
                  <button
                    onClick={() => editTodo(todo.id, editText, todo.completed)}
                    className="text-green-400 hover:text-green-500"
                  >
                    <FiSave size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.todo);
                    }}
                    className="text-yellow-400 hover:text-yellow-500"
                  >
                    <FiEdit size={20} />
                  </button>
                )}
                <button onClick={() => deleteTodo(todo.id)} className="text-red-400 hover:text-red-500">
                  <FiTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
