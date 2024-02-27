import React, { useContext, useState } from 'react'
import { Kk, kk } from './Components/Test1';


const Child = () => {
  const [count,setCount]=useState(0)
  console.log("parant ....");
  return (
    <div>
      <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
    <h1>{count}</h1>
    <Kk/>
    </div>
  )
}

export default Child