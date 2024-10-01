"use client";
import React, { useContext } from "react";
import style from "./cards.module.css";
import { High, Low, Medium } from "../PriorityBadges/prioritybadges";
import { useState } from "react";
import dialogbox from "./Dialogbox";
import Dialogbox from "./Dialogbox";
import { TaskContext } from "@/app/ContextAPIs/Taskcontext";
const InProgressCard = ({ taskName,itemid ,  desc, priority, assigneduser, status }) => {
  const [check, setCheck] = useState(false);
  const {completeTask, deleteTask} = useContext(TaskContext)
  const handleCheck = () => {
    setCheck(!check);
    completeTask(itemid)
  };
  const [dilogbox, setdilogbox] = useState(false);
  const handledialogbox = () => {
    setdilogbox(!dilogbox);
  };
  const handleDelete = ()=>{
    deleteTask(itemid)
  }
  return (
    <>
    {dilogbox&&<Dialogbox task_id={itemid} taskname ={taskName} close={handledialogbox} desc={desc} assigneduser={assigneduser} priority={priority} status={status}/>}
      <div className={style.inprogress} >
        <div className={style.titleandcheck}>
          <svg
            onClick={handleCheck}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            viewBox="0 0 24 23"
            style={{ cursor: "pointer" }}
          >
            <path
              d="M23 11.5C23 17.2593 18.1157 22 12 22C5.88433 22 1 17.2593 1 11.5C1 5.74069 5.88433 1 12 1C18.1157 1 23 5.74069 23 11.5Z"
              fill={check ? "#5F7BD6" : "white"}
              stroke="#5F7BD6"
              stroke-width="2"
            />
          </svg>
          <h4 onClick={handledialogbox}>{taskName}</h4>
          <p onClick={handleDelete}>Delete</p>
        </div>

        {priority == "Medium" && <Medium />}
        {priority == "High" && <High />}
        {priority == "Low" && <Low />}
      </div>
    </>
  );
};

export default InProgressCard;
