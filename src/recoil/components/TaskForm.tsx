import { useState, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { taskState, Task } from "../../atoms/taskAtom";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const setTasks = useSetRecoilState(taskState);

  const sanitizeInput = (input: string) => {
    return DOMPurify.sanitize(input);
  };

  const addTask = useCallback(() => {
    if (title.length > 50) {
      // エラー内容をポップアップして表示
      setError("タイトルは50文字以内です。");
      return;
    }
    if (description.length > 256) {
      setError("説明は256文字以内です。");
      return;
    }

    const sanitizedTitle = sanitizeInput(title);
    const sanitizedDescription = sanitizeInput(description);

    const newTask: Task = {
      id: uuidv4(),
      title: sanitizedTitle,
      description: sanitizedDescription,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setDescription("");
    setError("");
  }, [title, description, setTasks]);

  return (
    <div className="flex flex-col items-center w-11/12 mx-auto">
      <h1 className="text-4xl mt-10 mb-5 tracking-widest font-mono">
        My Tasks
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        className="w-10/12 p-2 mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="内容"
        className="w-10/12 p-2 mb-2 h-24"
      />
      <button
        onClick={addTask}
        className="w-8/12 p-2 bg-green-custom text-white rounded-xl"
      >
        <p className="font-bod">ADD</p>
      </button>
    </div>
  );
};

export default TaskForm;
