import React from "react";

interface TodoItemProps {
  todo: string; // todo の型を string に指定
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <li>{todo}</li>;
};

export default TodoItem;
