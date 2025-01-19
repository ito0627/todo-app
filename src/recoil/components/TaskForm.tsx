import { useState, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { taskState, Task } from "../../atoms/taskAtom";
import { v4 as uuidv4 } from "uuid";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setTasks = useSetRecoilState(taskState);

  const addTask = useCallback(() => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setDescription("");
  }, [title, description, setTasks]);

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        className="p-2 mb-2 w-11/12"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="内容"
        className="w-11/12 p-2 mb-2 h-24"
      />
      <button
        onClick={addTask}
        className="w-9/12 p-2 bg-green-custom text-white rounded-xl"
      >
        <p className="font-bod">ADD</p>
      </button>
    </div>
  );
};

export default TaskForm;
