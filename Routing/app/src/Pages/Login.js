import React, { useEffect, useState } from 'react'

function Login(props) {
    const [isLoging,setIsloging]=useState(false);
    useEffect(()=>{
        props.handleLogin(isLoging);
    },[])
    const handleLogin=(e)=>{
        
        setIsloging(e);
        props.handleLogin(e);
    }
    
  return (
    <>
     { isLoging ? <button onClick={()=>handleLogin(false)} >Logout</button> : <button onClick={()=>handleLogin(true)}>Login</button> }
      
    </>
  )
}

export default Login
