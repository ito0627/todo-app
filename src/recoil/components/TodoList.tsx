import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="bg-white border border-gray-300 p-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
