import React from 'react'
import { useState,useEffect } from 'react'
import './Counter.css'



function Counter() {

    const [value,setValue] = useState(0);
    const [size,setSize]   = useState(window.innerWidth)

//After every render tyhe use effect will be called
/**
 * The basic fucntion of the Use Effect Function
 * 
 * 
 */


    useEffect(()=>{
        if(value>1){
        document.title = `React App 📲 NEW Message (${value})`
    }
    else
    {
    }
    },[value])


    useEffect(()=>{
        console.log(size);
    })


    //We can use as many use effect as we want

    //[ ] is the dependency array -->. blank means it will run on the intial run only
    /**
     * 
     * 
     */




//We can not call the hooks conditionally
// We should pass it through a use effect

//Wil rund after every render -->> Eacch tanmd every time the state is chanhed
//** */


    return (
    <div>Counter

        <div>
            <h3>{value}</h3>
            <button className='btn' onClick={()=>setValue(value+1)}>Increase Value</button>
        </div>


        <div style={{color:"blue"}}>
            <h3>The size of the Window</h3>
            <div className='cmpsize' style={{padding:"12px",fontSize:"12",backgroundColor:"lime",height:'62px',borderRadius:"12px"}}>
                <h6>Use Effect Clean Up -- {size} PX </h6>
            </div>
        </div>
    </div>
  )
}

export default Counter