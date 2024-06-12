import React, { useState } from 'react'

function Ssc() {


    const [text,setText]       = useState('Peter');

    const [isError,setIsError] = useState(false)
    
    const val1 = text || "Hello World";//1`st  false therefoe returnthe secon d value
    const val2 = text && "Hello World 2.0";



  return (
    <>
        <div style={{height:"200px",backgroundColor:"blue",borderRadius:"12px",padding:"9px"}}>
            Short Circuit

            <h3>{val1}</h3>
            <h3> value : {val2} </h3>

            <h4>{text || "John Doe" }</h4>

            <button className='btn'
            onClick={()=>{
                setIsError(!isError)
            }}
            >Toggle Error</button>


            {isError && <h1>Error !! </h1>}


            <h4>{text && "John Doe" }</h4>

        </div>
    </>

  )
}

export default Ssc