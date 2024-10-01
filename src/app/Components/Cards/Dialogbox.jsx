"use client";
import React, { useContext, useEffect, useState } from 'react';
import style from "./cards.module.css";
import { AuthContext } from '@/app/ContextAPIs/authcontext';
import { TaskContext } from '@/app/ContextAPIs/Taskcontext';

const Dialogbox = ({ task_id, taskname, close, desc, assigneduser, priority }) => {
  const { allusers, fetchAlluser } = useContext(AuthContext);
  const { updateTask } = useContext(TaskContext);

  useEffect(() => {
    if (!allusers) {
      fetchAlluser();
    }
  }, []);
  console.log(task_id);
  
  const [Task, setTask] = useState({
    task_id: task_id, // Initialize task_id here
    taskName: taskname || "",
    description: desc || "",
    assignedTo: assigneduser || "",
    dueDate: "", // Initialize or fetch due date
    priority: priority || "",
    status: "",
  });

  const handleChange = (name, value) => {
    setTask((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    await updateTask(Task); // Pass Task object with task_id
  };

  return (
    <div className={style.dialogbox}>
      <div className={style.dialogboxheading}>
        <h1>Task Details</h1>
        <p style={{ cursor: "pointer" }} onClick={close}>x</p>
      </div>
      <div className={style.dialogboxcontent}>
        <p>Task name: </p>
        <input value={Task.taskName} onChange={(e) => handleChange("taskName", e.target.value)} placeholder={taskname}></input>
        <p>Description: </p>
        <textarea value={Task.description} onChange={(e) => handleChange("description", e.target.value)} placeholder={desc}></textarea>
        <p>Assigned user:</p>
        <select value={Task.assignedTo} onChange={(e) => handleChange("assignedTo", e.target.value)} defaultValue={assigneduser}>
          {allusers.map((item) => (
            <option key={item.usernameoremail} value={item.usernameoremail}>{item.usernameoremail}</option>
          ))}
        </select>
        
        <p>Priority:</p>
        <select value={Task.priority} onClick={(e) => handleChange("priority", e.target.value)} defaultValue={priority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p>Status:</p>
        <select value={Task.status} onChange={(e) => handleChange("status", e.target.value)}>
          <option value="todo">To-do</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button className={style.updatebtn} onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Dialogbox;
