import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { taskState } from "../../atoms/taskAtom";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(taskState);

  // タスク完了状態切り替え関数
  const toggleTaskCompletion = useCallback(
    (id: string) => {
      try {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      } catch (error) {
        console.error(
          "タスクの完了状態を切り替える際にエラーが発生しました:",
          error
        );
      }
    },
    [tasks, setTasks]
  );

  // タスク削除用関数
  const deleteTask = useCallback(
    (id: string) => {
      try {
        setTasks(tasks.filter((task) => task.id !== id));
      } catch (error) {
        console.error("タスクの削除中にエラーが発生しました:", error);
      }
    },
    [tasks, setTasks]
  );

  return (
    <div className="task-list-container w-full h-auto mx-auto p-4 mt-10">
      <div>
        <h2 className="text-4xl text-green-custom mb-3 tracking-widest">
          LIST
        </h2>
        <div className="w-full max-w-lg p-4">
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TaskList);
