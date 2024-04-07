"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser, updateUser } from "../redux/slice";
import { useState } from "react";

const DisplayUsers = () => {
    const [update, setUpdate] = useState(null);
    const [updatedName,setUpdatedName]=useState("");
    const userData= useSelector((data)=>data.users);
    const dispatch= useDispatch();
    console.log(userData);

    const handleUpdate = () => {
        dispatch(updateUser({update, updatedName}));
        setUpdatedName("");
        setUpdate(null);
        
    }
  return (
    <div className="displayUserContainer">
        <p>User List</p>
        <div className="userList">
           {
                (userData.length !== 0) ? userData.map((item)=>(
                    <div  key={item.id}  className="user-item">
                        <span>{item.name}</span>
                        <div className="item-options">
                            <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
                            <button onClick={() => setUpdate(item.id)}>Update</button>
                        </div>
                        
                    </div>
                )) : <h3>No User Data, Please Add a User.</h3>
            } 
        </div>
        
        {(update !== null) && <div className="update-container">
            <p>Change User name</p>
            <input type="text" value={updatedName} placeholder="Update the User name" onChange={(e)=>setUpdatedName(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </div>}
    </div>
  )
}

export default DisplayUsers