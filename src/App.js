// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Form from './FORMS/Form.js';
// import Success from './FORMS/Success.js';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Form />} />
//         <Route path="/success" element={<Success />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import './index.css'
import './App.css'
import { Provider } from 'react-redux';
import React from 'react'
import Det from './Det';
import List from './List';
import Test1 from './Test1';
import Form from './Form';
import Success from './FORMS/Success';
import Counter from './Counter';
import Cup from './Cup';
import GitDis from './GitDis';
import ApiFetch from './ApiFetch';
import Ssc from './Ssc';
import Ternary from './Ternary';
import HNS from './HNS';
import Form1 from './Form1';
import Redux from './Index/Redux';
import Us from './UseRef/Us';

///Varibales can be declared outside and inside the variables as well

const TellMe = "Hello There How Are You , Myslef Mrinmoy ... ";

//The nested Components

function BookList() {



  return (


<section className='as01'>

  <Form1/>

  <Form/>

  <HNS/>

  <Ternary />

  <Ssc/>

  <ApiFetch/>



  <GitDis/>
  {/* <Chat/> */}

  <Test1/>
  <List/>

  <Det/>

  <DyanamicDisplay/>
  <Book/>

  <div style={{backgroundColor:"blue",padding:"12px",margin:'10px',height:"144px",borderRadius:"12px"}}>
      <Counter/>
  </div>


  <div style={{backgroundColor:"violet",padding:"12px",margin:'10px',height:"144px",borderRadius:"12px"}}>
    <Cup/>
  </div>


  <Redux/>
  <Us/>




</section>

    
  
  //We can also fragment it as a react fragment element 


  //Or the section will also workd
  /**
   * The js x rulks 
   * 
   * React.Fragment
   * use caseless for the html attributes
   * 
   * 
   * Formatting the end point -->> Adding the parenthesis
   */
)

}




const Book = ()=>{
  return (<article>
    <div className='tit'>
          This Is a Book
    </div>

    <Image className='img1'></Image>
    <div className='marlin'>
          <Desc></Desc>
    </div>
  </article>)
}

const Image = ()=><img style={{height:'60px',width:'60px'}} className='img1' src='https://rukminim2.flixcart.com/image/312/312/l0vbukw0/computer/t/z/j/-original-imagckcfkvspp9ga.jpeg?q=70&crop=false'alt='img'/>
//Object -->>{{}}
//IT Is stronger -->> The inline css 
/**
 * The properties that are already added this way
 * @returns 
 */
/**
 * 
 * The multiple ways  To do the same thing
 * 
 *
 * @returns 
 */


const Desc =() =>(
  <div className='asa1'>
      <p4 className='as1'>
    ASUS ROG Strix G15 AMD Ryzen 7 Octa Core 6800HS - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) G513RC-HN061W Gaming Laptop  (15.6 Inch, Eclipse Gray, 2.10 Kg)
  </p4>
  </div>
)




// const Person = () => <h1>Hello There</h1>

// const Message = () => {
//   return <p>This is my Message</p>
// }



//The splittin up of the application In saperate chunks



const DyanamicDisplay =() =>{

  return (
  <div>
      <div>
       <h1>{TellMe.toUpperCase()}</h1>
{/* //The makinjg of the jsx way moer dyanamaic */}
  </div>

  </div>)
}

export default BookList;
