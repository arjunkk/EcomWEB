import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState("arjun");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const collectdata =()=>{
        console.warn(name,password,email);
        
    }

    return (
        <div className="register">
            <fieldset>
                <legend>Register:</legend>
                <input className="inputbox" type="text" 
                value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>

                <input className="inputbox" type="text" 
                value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"></input>

                <input className="inputbox" type="email" 
                value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email-id"></input>

                <button onClick={collectdata} className="appButton" type="button" >Sign up</button>
            </fieldset>
        </div>
    )
}

export default Signup;