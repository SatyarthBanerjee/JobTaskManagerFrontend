import React from "react";
import style from "./task.module.css";
import MainTask from "./MainTask";
const Task = () => {
  return (
    <div className={style.taskdash}>
      <h1>Main dashboard</h1>
      <div className={style.headings}>
        <div>
          <p>To-Do</p>
          <svg
            width="124"
            height="3"
            viewBox="0 0 124 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.5H122"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div>
          <p>In Progress</p>
          <svg
            width="124"
            height="3"
            viewBox="0 0 124 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.5H122"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div>
          <p>Completed</p>
          <svg
            width="124"
            height="3"
            viewBox="0 0 124 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.5H122"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <MainTask />
    </div>
  );
};

export default Task;
