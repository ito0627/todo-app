import React from "react";
import TaskForm from "../src/recoil/components/TaskForm";
import TaskList from "../src/recoil/components/TaskList";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col items-center p-4 w-11/12 h-screen mx-auto content-color rounded shadow-md">
        <h1 className="text-5xl mb-3 tracking-widest font-mono">My Tasks</h1>
        <TaskForm />
        <h2 className="text-4xl text-green-custom mt-20 mb-3 tracking-widest">
          LIST
        </h2>
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
