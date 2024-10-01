"use client"
import React, { useContext } from 'react'
import style from "./cards.module.css"
import Dialogbox from './dialogbox';
import { useState } from 'react';
import { TaskContext } from '@/app/ContextAPIs/Taskcontext';
const Completed = ({ taskName,itemid,  desc, priority, assigneduser, status }) => {
  const [dilogbox, setdilogbox] = useState(false);
  const {completeTask, deleteTask} = useContext(TaskContext)
  const handledialogbox = () => {
    setdilogbox(!dilogbox);
  };
  const handleDelete = ()=>{
    deleteTask(itemid)
  }
  return (
    <>
    {dilogbox&&<Dialogbox task_id={itemid} taskname ={taskName} close={handledialogbox} desc={desc} assigneduser={assigneduser} priority={priority} status={status}/>}
    <div className={style.completed}  >
      <h4 onClick={handledialogbox}>{taskName}</h4>
      <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg"  fill="#6F7F70"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>
    </div>
    </>
  )
}

export default Completed
