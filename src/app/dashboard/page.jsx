"use client"
import React, { useContext, useState } from 'react'
// import { AuthContext } from '../ContextAPIs/authcontext'
import style from "./dashboard.module.css"
import Navbar from '../Components/Navbar/Navbar'
import Task from '../Components/Tasks/task'
import AddTaskForm from '../Components/Forms/AddTaskForm'
const page = () => {
    // const {logout} = useContext(AuthContext)
    // const [tabs, setTabs] = useState(["TaskTab"])
    const [addTask, setaddTask] = useState(false)
    const handleTask = ()=>{
      setaddTask(!addTask)
    }
  return (
    <div className={style.dashboardmain}>
  {/* The blurred overlay, shown conditionally when addTask is true */}
  {addTask && <div className={style.blurOverlay} onClick={handleTask}></div>}

  <Navbar />
  <Task />

  <button onClick={handleTask} className={style.addtaskbtn}>+</button>

  {/* The form section */}
  {addTask && <AddTaskForm />}
</div>

  )
}

export default page
