"use client"
import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [authState, setAuthState] = useState({
        token:null,
        user:null,
        isAutheticated:false,
    });
    const route = useRouter();
    const [allusers, setAllusers] = useState([])
    const [loggedinuser, setloggedinuser] = useState({});
    const [jwttoken, setjwttoken] = useState(null)
    const fetchAlluser = async()=>{
      const res2 = await axios.get("http://localhost:4000/api/getalluser");
            // console.log(res2.data);
            setAllusers(res2.data)
    }
    const login = async(credentials)=>{
        try{
            const response = await axios.post('http://localhost:4000/api/loginUser', credentials);
            setloggedinuser(response.data.user);
            
            fetchAlluser();
            const {token} = response.data;
            setjwttoken(token);
            // console.log(response.data);
            
            setAuthState({token, user:response.data.usernameoremail, isAutheticated:true});
            localStorage.setItem('token', token);
            if(response.status===200){
                alert("Login success")
                route.push("/dashboard")
            }
            if(response.status===401){
                alert("User not found")
                // route.push("/dashboard")
            }
        }catch(error){
            console.log("Login failed", error);
            
        }
    }
    const signup = async (credentials) => {
        try {
          const response = await axios.post('http://localhost:4000/api/createUser', credentials);
          const { token } = response.data;
          setjwttoken(token);
    
          setAuthState({
            token,
            user: response.data.usernameoremail,
            isAuthenticated: true,
          });
          if(response.status===201){
            alert("Account created and Login success")
            route.push("/dashboard")
        }
        if(response.status===401){
            alert("Invalid credentials")
            // route.push("/dashboard")
        }
    
          localStorage.setItem('token', token);
        } catch (error) {
          console.error('Signup failed:', error);
        }
      };
      const logout = () => {
        setAuthState({
          token: null,
          user: null,
          isAuthenticated: false,
        });
    
        localStorage.removeItem('token');
        route.push("/")
      };
      return(
        <AuthContext.Provider value={{authState, login, signup, logout, allusers, fetchAlluser, loggedinuser, jwttoken}}>{children}</AuthContext.Provider>
      )
}
