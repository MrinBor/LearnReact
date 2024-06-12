import React, { useEffect, useState } from 'react'


const url = "https://api.github.com/users";

function Cup() {

    const [size,setSize] = useState(window.innerWidth);

    const CheckSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',CheckSize)
    })
    

    return (
    <div>Cup

            <h1>Current Size of the Window -- {size} PX</h1>

    </div>
  )
}

export default Cup;


    //Each and every tiem the event takes place 
    //The check SIZ EfUNCTION iS invoked
    /**
     * 
     */
