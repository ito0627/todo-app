import React from "react";
import TaskForm from "../src/recoil/components/TaskForm";
import TaskList from "../src/recoil/components/TaskList";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen h-screen">
      <div className="flex flex-col items-center justify-start w-11/12 h-full mx-auto content-color">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
