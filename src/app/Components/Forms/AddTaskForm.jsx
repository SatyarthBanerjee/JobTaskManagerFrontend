"use client";
import React, { useContext, useEffect } from "react";
import style from "./addtaskform.module.css";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { High, Low, Medium } from "../PriorityBadges/prioritybadges";
import { useState } from "react";
import { AuthContext } from "@/app/ContextAPIs/authcontext";
import { TaskContext } from "@/app/ContextAPIs/Taskcontext";

const AddTaskForm = () => {
  const { allusers, fetchAlluser } = useContext(AuthContext); // Make sure this contains all user data
  const {addTask} = useContext(TaskContext);
  console.log(allusers);
  useEffect(()=>{
    if(!allusers.length){
      fetchAlluser()
    }
  })
  
  const [Task, setTask] = useState({
    taskName: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    priority: "",
    status: "",
  });

  const handleChange = (name, value) => {
    setTask((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(Task);
  }, [Task]);
const handleAddTask = async()=>{
  await addTask(Task);
  setTask({taskName:"",description:"",assignedTo:"",dueDate:"",priority:"",status:""});
}
  const menu = (
    <Menu onClick={(e) => handleChange("priority", e.key)}>
      <Menu.Item key="Low" value="Low">
        <Low />
      </Menu.Item>
      <Menu.Item value="Medium" key="Medium">
        <Medium />
      </Menu.Item>
      <Menu.Item key="High" value="High">
        <High />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={style.addTaskForm}>
      <input
        placeholder="Task Name Here"
        onChange={(e) => handleChange("taskName", e.target.value)}
      />
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button style={{ width: "100px" }}>
          {Task.priority || "Priorities"} <DownOutlined />
        </Button>
      </Dropdown>
      <div>
        <div className={style.description}>
          <input
            placeholder="Write an update here..."
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className={style.styling}>
          <label style={{ fontSize: "12px" }}>Assign Tasks:</label>
          <select
            onChange={(e) => handleChange("assignedTo", e.target.value)}
            value={Task.assignedTo}
          >
            <option value="" disabled>
              Select a user
            </option>
            {allusers.map((item) => (
              <option key={item._id} value={item.usernameoremail}>
                {item.usernameoremail}
              </option>
            ))}
          </select>
          <input
            style={{ fontSize: "15px" }}
            className={style.duedate}
            type="date"
            onChange={(e) => handleChange("dueDate", e.target.value)}
          />
          <label>Status:</label>
          <select
            onChange={(e) => handleChange("status", e.target.value)}
            value={Task.status}
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className={style.submitbtn}>
        <button onClick={handleAddTask}>Update</button>
      </div>
    </div>
  );
};

export default AddTaskForm;
