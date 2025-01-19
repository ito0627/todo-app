import React from "react";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <li
      key={task.id}
      className="border border-black mb-5 p-2 text-black bg-white"
    >
      <div className="flex items-center">
        <div className="w-1/5">{task.completed ? "完了" : "未完了"}</div>
        <div className="w-4/5 ml-2">
          <p>タイトル: {task.title}</p>
        </div>
      </div>
      <div className="mt-3">
        <p>Description: {task.description}</p>
      </div>
      <div className="flex justify-end mt-2 space-x-2">
        <button
          onClick={() => toggleTaskCompletion(task.id)}
          className="p-1 bg-green-custom text-white rounded-full update-button"
        >
          <span className="text-xs">更新</span>
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="p-1 bg-gray-300 text-white rounded-full delete-button"
        >
          <span className="text-xs">削除</span>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
