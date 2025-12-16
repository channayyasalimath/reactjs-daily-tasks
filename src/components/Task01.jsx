import React, { useState } from 'react'

const Demo = () => {
    const[counter,setCounter]=useState(0)

    const incrementFn=()=>{
        setCounter(counter+1)
    }

    const decrementFn=()=>{
        setCounter(counter-1)
    }

    const resetFn=()=>{
        setCounter(0)
    }

    
  return (
    <div>
        <button onClick={incrementFn}>Increment</button>
        <br/>
        {counter}
        <br/>
        <button onClick={decrementFn}>Decrement</button>
        <button onClick={resetFn}>Rest</button>
    </div>
  )
}

export default Demo