import React, { useEffect, useState } from 'react'
import './HNS.css'

function HNS() {

const [show,setShow] = useState(false);

  return (
    <>


    <div style={{backgroundColor:"#290590",padding:"12px",margin:'10px',height:"144px",borderRadius:"12px"}}>

    <button className='btn' onClick={()=>{setShow(!show)}}>
      {show?<h5>Shwoing Contents</h5>:<h5>Contents Hidden</h5>}
    </button>      

    <br></br>
      Hiding and Appearing of the Components

      {show && (
        <div className='algn'>
          <Another_Item/>
          <Item/>
        </div>
      )}


    </div>

     
    </>

  )
}



const Item = ()=> {
  const [size,setSize] = useState(window.innerWidth);
  
  const CheckSize = ()=>{
    setSize(window.innerWidth)
  };

  useEffect(()=>{
    window.addEventListener('resize',CheckSize);

    return () => {
      window.removeEventListener('resize',CheckSize)
    }

  },[])
//We will run this componenet multiple times initially we would render it 
/**
 * So we need to implement a clean Up Function FOR THIS Purpose
 */

    return(
    <div style={{marginTop:'2rem'}}>
      <h2>Window</h2>
      <h2>Size : {size}px</h2>
    </div>)
}





const Another_Item = () => {
  return(
    <div style={{marginTop:'2rem'}}>
      <h2>Window</h2>
      <h2>Size : </h2>
    </div>
  )
}


export default HNS;