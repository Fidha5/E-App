import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../context/UserContext"

const Signup =() =>{
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [error,setError] = useState("")


    const HandleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return
        }

        try {
            const existingUser = await axios.get("http://localhost:5000/users", {
                params: { username }
            })

            if (existingUser.data.length > 0) {
                setError("Username already exists. Please choose another.")
            } 
            else {
                await axios.post("http://localhost:5000/users",{ username, password } )
                localStorage.setItem("username", username);
                setUser(username);
                navigate('/Login')
            }
        } catch (err) {
            setError("Error occurred. Please try again.");
        }
    }
    
        
        
    
    return(
        <div className="signup flex flex-col items-center justify-center h-screen bg-blue-400">
            <div className="user flex flex-col items-center p-6 bg-slate-100 border shadow-lg rounded-xl w-[300px]  ">
                <h1 className="text-4xl text-center font-medium p-5 text-blue-400">SIGNUP</h1>
                
                <div className="pass flex flex-col justify-center items-center pt-6" >
                    <input type="text" placeholder="Username" className="bg-slate-200 rounded-2xl w-[250px] pl-2 mt-2 py-2 outline-none border-blue-400 border-b-2" value={username} onChange ={(e) =>setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" className="bg-slate-200 rounded-2xl pl-2 mt-2 w-[250px] py-2 outline-none border-blue-400 border-b-2" value={password} onChange ={(e) =>setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirm Password" className="bg-slate-200 rounded-2xl pl-2 mt-2 w-[250px] py-2 outline-none border-blue-400 border-b-2" value={confirmPassword} onChange ={(e) =>setConfirmPassword(e.target.value)} />
                    <button className='bg-gray-300 mt-5 rounded-2xl p-2 px-5 hover:bg-blue-300 border-blue-400 border-b-2 text-blue-500 font-bold' onClick={HandleSignup} >SIGNUP</button>
                    {error && <p className='text-red-500'>{error}</p>}
                    <h1 className='mt-5 text-cente r font-extralight p-5 '>Already have an account?<NavLink to='/Login' className='text-blue-500 hover:text-black'>
                    Login</NavLink></h1>
                </div>
            </div>
        </div>
    )

}
export default Signup; 