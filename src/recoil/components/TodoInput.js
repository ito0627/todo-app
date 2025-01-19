import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white p-4 rounded shadow-md"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="タイトルを追加"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded h-24"
        placeholder="内容を追加"
      />
      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoInput;
