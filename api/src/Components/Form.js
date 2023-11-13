import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Form({btnText,handleSubmitData,selectedUser}) {
    const [user,setUser]=useState({
        username: "",
        email: "",
    })

    
    useEffect(() => {
        setUser({
            ...selectedUser
        })
        
      }, [selectedUser]);

    const handleChange=(e)=>{
        const selectedField =e.target.name;
        const selectedValue =e.target.value;
        setUser((preState)=>{
            return {...preState,[selectedField]:selectedValue}
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleSubmitData(user);
        setUser({
            username: "",
            email: "",
        })
    }

   

    // const { username, email } = user;
  return (
    <form onSubmit={handleSubmit}>
        <div className='feildGroup'>
            <label htmlFor='username' >User Name</label>
            <input type="text" id='username' name='username' value={user.username} onChange={handleChange} required />
        </div>
        <div className='feildGroup'>
            <label htmlFor='email'>User Name</label>
            <input type="email" id='email' name='email' value={user.email} onChange={handleChange} required />
        </div>
        <button className='btn' type="submit">{btnText}</button>
    </form>
  )
}

Form.propTypes = {

}

export default Form

