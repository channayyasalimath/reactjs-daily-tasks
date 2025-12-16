import React, { useState } from 'react'

const Task03 = () => {
    const[show,setShow]=useState(true)
  return (
    <div>
        <button onClick={(e)=>setShow(true)}>SHOW</button>
        {
            show?<h1>Welcome Chanayya</h1>:null
        }
        <button onClick={(e)=>setShow(false)}>HIDE</button>
        <button onClick={(e)=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Task03