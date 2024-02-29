import React, { useContext, useState } from 'react'
import { Kk, kk } from './Components/Test1';


const Child = () => {
  const [count,setCount]=useState(0)
const incri = ()=>{
  setCount(count+9)
}
  return (
    <div>
      <button onClick={incri}>+</button>
    <h1>{count}</h1>
    <Kk/>
    </div>
  )




  
}
export default Child