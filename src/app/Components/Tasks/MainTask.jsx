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
  
  return (
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
  )
}

export default MainTask
