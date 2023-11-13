import React, { useState } from 'react';

import Style from './Form.module.css';

export default function Form() {

    const [user,setUser]=useState({
      name:"",
      email:"",
      password:""
    });

    const {name,email,password}=user;

  
    const handleChanged=(e)=>{
      
      setUser({...user,[e.target.name]:e.target.value});
      
    }


    const Submitted =(e)=>{
        e.preventDefault();
       
        console.log(user);
    }
    
  return (
    <div>
        <h1>Register Page</h1>
      <form action="" onSubmit={Submitted}>
      <div className={Style.formStyle}>
        <label>Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChanged} required />
      </div>
      <div className={Style.formStyle}>
        <label>Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChanged} required />
      </div>
      <div className={Style.formStyle}>
        <label>Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={handleChanged} required />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      </form>
    </div>
  )
}
