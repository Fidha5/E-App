import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import { UserContext } from "../context/UserContext";
import { useContext } from "react"

const Login =() =>{

  const { setUser } = useContext(UserContext)
    const [username,setUsername]=useState("") 
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate()
    const HandleLogin = async () => {
        if(!username || !password){
            setError("All fields are required")
            return
        }
        try {
            const response =await axios.get("http://localhost:5000/users",{params: { username,password }})
            if (response.data.length>0){
                localStorage.setItem("username",username)
                setUser(username)
                navigate('/')
            }
            else{
                setError("Invalid Username and Password")
            }
        }catch(err) {
            setError("An error occured.Please try again later")
        }
        
    
    }
    
    return(
        <div className="login flex flex-col items-center justify-center h-screen bg-slate-50">
            <div className="user flex flex-col items-center p-6 bg-gray-200 border shadow-lg rounded-xl w-[300px] ">
                <h1 className="text-4xl text-center font-medium p-5 text-black">LOGIN</h1>
                {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
                <div className="pass flex flex-col items-center pt-6" >
                    <input type="text" placeholder="Username" className=" rounded-2xl  w-[250px] pl-2  outline-none border-black mt-5 py-2 border-b-2" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" className=" rounded-2xl pl-2 w-[250px] outline-none border-black border-b-2 py-2 mt-2"value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button className=' mt- rounded-2xl p-2 px-5  mt-5 hover:bg-gray-300 outline-none border-black border-b-2 text--500 font-bold' onClick={HandleLogin}>LOGIN</button>
                    <h1 className='mt-10 p-6 text-center font-extralight'>Don't have an account?<NavLink to='/SignUp' className='text-blue-500 hover:text-black'>
                    SignUp</NavLink></h1>
                </div>
            </div>
        </div>
    )

}
export default Login;