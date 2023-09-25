import React from "react";
import { Task } from "../task/Task";
import "./home.css";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {

  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setDescription("");
    setTitle("");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val,i) => {
      return i !== index;
    })

    setTasks(filteredArr); 
  };

  useEffect(() => {
  localStorage.setItem("tasks",JSON.stringify(tasks))
  
  }, [tasks])
  


  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button type="submit">Add</button>
        </form>

        <div className="task_container">
          {tasks.map((item, index) => (
            <Task
              key={index}
              title={item.title}
              description={item.description}
              deleteTask={deleteTask}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};
