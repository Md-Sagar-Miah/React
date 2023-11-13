import React, { useState } from 'react'

export default function HooksUseState() {
    
    const [count,setCount]=useState(0)

    const handleIncrement=()=> {
        setCount(count+1);
    }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>Increament</button>
    </div>
  )
}
