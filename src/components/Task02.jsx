import React, { useState } from 'react'

const Task02 = () => {
    const users={
        email:'',
        password:""

    }
    const [user,setUser]=useState(users);
    const inputHandler=(e)=>{
        const{name, value}=e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Welcome ${user.email}`)
        console.log(user);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' value={user.email} onChange={inputHandler}/>
        <input type="password" placeholder='Enter Password' value={user.password}/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Task02