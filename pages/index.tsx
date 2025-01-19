import React from "react";
import TaskForm from "../src/recoil/components/TaskForm";
import TaskList from "../src/recoil/components/TaskList";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl mb-3 tracking-widest font-mono">My Tasks</h1>
      <TaskForm />
      <h2 className="text-4xl text-green-custom mt-20 mb-3 tracking-widest">
        LIST
      </h2>
      <TaskList />
    </div>
  );
};

export default Home;
