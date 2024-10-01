"use client"
import React, { useContext, useState } from 'react'
import style from "./page.module.css"
import { AuthContext } from './ContextAPIs/authcontext'
const page = () => {
  const [logindet, setlogindet] = useState({
    usernameoremail: "",
    password: "",
  })
  const {login, signup} = useContext(AuthContext)
  const handleChange = (value, name)=>{
    setlogindet((prevValue)=>{
      return {...prevValue, [name]: value}
    })
  }
  const handleLogin = ()=>{
    if(logindet){
      login(logindet)
    }
  }
  const handleSignup = ()=>{
    if(logindet){
      signup(logindet)
    }
  }
  return (
    <div className={style.loginmain}>
      <div className={style.loginBox}>
        <h4>Welcome to Task Management</h4>
        <p>Login or Sign up</p>
        <div className={style.loginForm}>
          <input type="email" value={logindet.usernameoremail} onChange={(e)=>handleChange(e.target.value, "usernameoremail")} placeholder="Email or username" ></input>
          <input type="password" value={logindet.password} onChange={(e)=>handleChange(e.target.value, "password")} placeholder='Password'></input>
          <button onClick={handleLogin}>Login</button>
        </div>
        <p>or</p>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  )
}

export default page
