import React, { useState } from 'react'

function Ternary() {

  const [error,setError] = useState(false);



  return (
    <div  style={{backgroundColor:"#AEADF6",padding:"12px",margin:'10px',height:"144px",borderRadius:"12px"}}>
      
      
      <h2>Ternary Operator</h2>
        <button onClick={()=>{
          setError(!error)
        }}>
          Error!!
        </button>


        <h3>{error?<h2>Error Encountered</h2>:<h2>Error Removed</h2>}</h3>

      
      
    </div>
  )
}

export default Ternary  