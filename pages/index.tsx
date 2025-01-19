import React from "react";
import TaskForm from "../src/recoil/components/TaskForm";
import TaskList from "../src/recoil/components/TaskList";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-4 w-11/12 h-5/6 mx-auto content-color rounded shadow-md">
        <h1 className="text-4xl mb-1 tracking-widest font-mono">My Tasks</h1>
        <TaskForm />
        <div className="task-list-container w-full max-w-lg mx-auto p-4">
          <h2 className="text-4xl text-green-custom mt-20 mb-3 tracking-widest">
            LIST
          </h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
