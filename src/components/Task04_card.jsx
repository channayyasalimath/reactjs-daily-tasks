import React from 'react'

const Task04_card = ({name,email,phone,website}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
    </div>
  )
}

export default Task04_card