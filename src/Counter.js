import React from 'react'
import { useState } from 'react'

function Counter() {
    let [count,setCount] = useState(0)
    // let count = 0
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>{
           setCount(count+=1 )
           console.log(count)
        }}>increase</button>
    </div>
  )
}

export default Counter