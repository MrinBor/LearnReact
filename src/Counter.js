import React from 'react'
import { useState,useEffect } from 'react'




function Counter() {

    const [value,setValue] = useState(0);

//After every render tyhe use effect will be called
/**
 * The basic fucntion of the Use Effect Function
 * 
 * 
 */

    useEffect(()=>{
        document.title = `NEW Message (${value})`
    })



    return (
    <div>Counter

        <div>
            <h3>{value}</h3>
            <button className='btn' onClick={()=>setValue(value+1)}>Increase Value</button>
        </div>
    </div>
  )
}

export default Counter