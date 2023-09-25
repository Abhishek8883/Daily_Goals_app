import React from "react";
import "./task.css";

export const Task = ({title,description,deleteTask,index}) => {
  return (
    <>
      <div className="task">
        <div className="desc">
          <p>{title}</p>
          <span>{description}</span>
        </div>
        <button onClick={() => {deleteTask(index)}}>-</button>
      </div>
    </>
  );
};
