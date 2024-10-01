"use client"
import React, { useContext } from 'react'
import style from "./maintask.module.css"
import TodoCard from '../Cards/TodoCard'
import InProgressCard from '../Cards/InProgressCard'
import Completed from '../Cards/Completed'
import { TaskContext } from '@/app/ContextAPIs/Taskcontext'
const MainTask = () => {
  const {tasks} = useContext(TaskContext)
  console.log(tasks);
  const downloadCSV = () => {
    // Create an array of CSV rows
    const rows = [
      ["Task Name", "Description", "Assigned To", "Priority"], // Header row
      ...tasks.todo.map(task => [
        task.taskName,
        task.description,
        task.assignedTo,
        task.priority,
      ]),
      ...tasks.inProgress.map(task => [
        task.taskName,
        task.description,
        task.assignedTo,
        task.priority,
      ]),
      ...tasks.completed.map(task => [
        task.taskName,
        task.description,
        task.assignedTo,
        task.priority,
      ]),
    ];

    // Convert to CSV format
    const csvContent = "data:text/csv;charset=utf-8," + 
      rows.map(e => e.join(",")).join("\n");

    // Create a downloadable link and trigger the download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tasks.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Clean up
  };
  return (
    <>
      <p style={{cursor:"pointer"}} onClick={downloadCSV}>Download⬇️</p>
    <div className={style.maintask}>
    
      <div className={style.todolist}>
      {tasks?.todo?.map((item)=>{
        return (
          <TodoCard 
            key={item._id}
            itemid={item._id}
            taskName = {item.taskName}
            desc = {item.description}
            priority ={item.priority}
            assigneduser ={item.assignedTo}
          />
        )
      })}
        
      </div>
      <div className={style.progresslist}>
       
        {tasks?.inProgress?.map((item)=>{
        return (
          <InProgressCard
            key={item._id}
            itemid={item._id}
            taskName = {item.taskName}
            desc = {item.description}
            priority ={item.priority}
            assigneduser ={item.assignedTo}
          />
        )
      })}
        
        
      </div>
      <div className={style.completed}>
        
        {tasks?.completed?.map((item)=>{
        return (
          <Completed
            key={item._id}
            itemid={item._id}
            taskName = {item.taskName}
            desc = {item.description}
            priority ={item.priority}
            assigneduser ={item.assignedTo}
          />
        )
      })}
        
      </div>
    </div>
    </>
    
  )
}

export default MainTask
