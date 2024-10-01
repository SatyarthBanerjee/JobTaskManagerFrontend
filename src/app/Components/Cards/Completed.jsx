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
      <p onClick={handleDelete}>Delete</p>
    </div>
    </>
  )
}

export default Completed
