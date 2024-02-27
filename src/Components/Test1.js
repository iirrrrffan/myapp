import React from 'react'

const Test1 = () => {
   console.log("child......");
  return (
    <div></div>
  )
}

export default Test1
export const Kk=React.memo(Test1)