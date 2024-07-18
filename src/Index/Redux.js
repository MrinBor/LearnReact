import React from 'react'
import './Redux.css'
import  { createStore } from 'redux';

//The reducer function will contain a state

//The state and action are the paranmeters
/**
 * 
 * This will contain state and the second one is  the parameter
 * State and the actions
 * 
 * 
 * 
 */


const RedcrFunc = (state={counter:0},action) =>{
    
}

const store = createStore(RedcrFunc);

function Redux() {
  return (
    <div className='rdx'>Redux</div>
  )
}





export default Redux;