// components/TaskList.tsx
import { useRecoilState } from "recoil";
import { taskState } from "../../atoms/taskAtom";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul className="w-full max-w-lg mx-auto bg-white p-4 rounded shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="border border-indigo-600 mb-10">
          <div className="flex">
            <div className="w-1/5">{task.completed ? "完了" : "未完了"}</div>
            <div className="w-4/5">
              <p>タイトル: {task.title}</p>
            </div>
          </div>
          <div className="mt-3">
            <p>DIscription: {task.description}</p>
          </div>
          <div className="flex justify-end mt-2">
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className="p-2 bg-green-custom text-white rounded update-button"
            >
              更新
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 bg-gray-500 text-white rounded update-button"
            >
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
