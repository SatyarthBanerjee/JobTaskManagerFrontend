"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './authcontext';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { jwttoken } = useContext(AuthContext);
  const [tasks, setTasks] = useState({});

  const addTask = async (taskdata) => {
    console.log(jwttoken);

    try {
      const res = await axios.post("http://localhost:4000/api/addTask", taskdata, {
        headers: {
          Authorization: `Bearer ${jwttoken}`, // Include the token in the headers
        },
      });
      console.log(res.data);
      if (res.status === 201) {
        alert("Data added");
      }
      fetchTasks()
    } catch (err) {
      console.log(err);
    }
    
  };
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/getTasks", {
        headers: {
          Authorization: `Bearer ${jwttoken}`, // Include the token in the headers
        },
      });
      
      setTasks(res.data);  // Await the response and set tasks
      if (res.status === 200) {
        console.log("Fetched successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateTask = async (taskData) => {
    try {
      const res = await axios.put("http://localhost:4000/api/updateTask", taskData, {
        headers: {
          Authorization: `Bearer ${jwttoken}`, // Include the token in the headers
        },
      });
  
      if (res.status === 200) {
        alert("Task updated successfully");
        await fetchTasks(); // Refetch tasks after update
      }
    } catch (err) {
      console.error(err);
    }
  };
  const completeTask = async (task_id) => {
    try {
        const response = await axios.post('http://localhost:4000/api/completeTask', { task_id },{
            headers: {
              Authorization: `Bearer ${jwttoken}`, // Include the token in the headers
            },
          }); // Adjust the URL based on your backend setup
        console.log(response.data.msg); // Log success message
        fetchTasks(); // Re-fetch tasks after completing one
    } catch (error) {
        console.error('Error completing task:', error);
    }
};
const deleteTask = async (task_id) => {
    try {
        const response = await axios.post('http://localhost:4000/api/deleteTask', {  task_id  },
            {
                headers: {
                  Authorization: `Bearer ${jwttoken}`, // Include the token in the headers
                },
              }
        );
        console.log(response.data.msg); // Handle success message
        fetchTasks(); // Fetch updated tasks after deletion
    } catch (error) {
        console.error(error.response.data.msg); // Handle error
    }
};
  


  useEffect(() => {
    
    if (jwttoken) { // Ensure the token exists before fetching tasks
      fetchTasks();
    }
  }, [jwttoken]);  // Dependency on jwttoken to refetch when the token changes

  return (
    <TaskContext.Provider value={{ addTask, tasks, fetchTasks, updateTask, completeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
