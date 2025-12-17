import React, { useState } from 'react'
import LogoutBtn from './LogoutBtn'
import LoginBtn from './LoginBtn'

const Task05 = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div>
        <h1>Welcome Channayya</h1>
        {
            isLoggedIn ?<LogoutBtn />:<LoginBtn/>
        }
    </div>
  )
}

export default Task05