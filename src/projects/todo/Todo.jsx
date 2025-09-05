import React, { useState } from "react";
import { FaCheckSquare, FaSquare, FaTimes } from "react-icons/fa";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false, date: new Date() },
      ]);
      setInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo List</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Add Todo
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map(({ id, date, completed, text }) => (
          <li
            key={id}
            className="flex justify-between items-center px-4 py-2 bg-white rounded-lg shadow mb-2"
          >
            <span
              className={`text-gray-800 ${completed ? "line-through" : ""}`}
            >
              {text}
            </span>
            <span className="text-gray-500 text-sm">
              {date.toLocaleString()}
            </span>
            <button
              onClick={() =>
                setTodos(
                  todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !completed } : todo
                  )
                )
              }
              className={`px-2 py-1 rounded-lg transition-all ${
                completed ? " text-white" : " text-white"
              }`}
            >
              {completed ? (
                <FaCheckSquare className="text-blue-500 w-5 h-5" />
              ) : (
                <FaSquare className="text-gray-300 w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => removeTodo(id)}
              className="w-5 h-5 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600 transition-all"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
