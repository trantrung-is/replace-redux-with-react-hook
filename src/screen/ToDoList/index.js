import React from "react";

// components
// import AddItem from "../../components/AddItem";
import List from "../../components/List";
import Navigation from "../../components/layout/Navigation";

const ToDoList = () => {
  return (
    <>
      <div className="px-8 pt-10">
        <div className="pb-12">
          <p className="pt-6 text-3xl font-black">Today's Schedule</p>
          <p className="text-2xl font-black text-purple-600">Monday 19</p>
        </div>
        <div className="flex">{/* <AddItem /> */}</div>
        <div className="">
          <List />
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default ToDoList;
