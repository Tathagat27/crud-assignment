"use client"
import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUsers = () => {
    const [name,setName]=useState("");
    const dispatch= useDispatch();
    const userDispatch=()=>{
        dispatch(addUser(name));
        setName("");
    }
  return (
    <div className="addUserContainer">
        
        <div className="addUserBox">
            <p>Add a User</p>
            <input type="text" value={name} placeholder="Add the User" onChange={(e)=>setName(e.target.value)} />
            <button onClick={userDispatch} >Add User</button>
        </div>
        
    </div>
  )
}

export default AddUsers