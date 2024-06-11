import React from 'react'
import './Test1.css'



const Items = [
    
{
    title:"Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone",
    brand: "Apple",
    mainImageUrl: "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg",
    ratingsTotal: 55245,
    rating: 4.7,
}
,
{
    title: "Apple MacBook Pro 14-inch, 2023, M2 Pro Chip, 16GB RAM, 512GB SSD, Space Gray",
    brand: "Apple",
    mainImageUrl: "https://m.media-amazon.com/images/I/71gD8WdSlaL.jpg",
    ratingsTotal: 35210,
    rating: 4.8,
},

]





function Test1() {
  return (

    <div>
      
    {


    Items.map((it)=>{
      //The attribute and th eveent nghandler
      //We would have th efollowing
      /**
       * Creattion of a byutton of the on click elements
       */


      //As a reference
      const ClickHandler = () =>{
        console.log("Hello World");
        alert("Hello World")
      }


      const ClickExample = (author) =>{
        console.log(author)
      }




      const {...items} =it;
      return(
        <div 
        onMouseOver={()=>{
          console.log(items.title)
        }}
        style={{height:'120px',backgroundColor:"black",margin:'12px',padding:'12px',borderRadius:'12px'}}>
          <h3>{items.brand}</h3>
          <h5 style={{color:'blue'}}>{items.title}</h5>
          <img style={{height:'60px',width:"60px",borderRadius:"10px"}} src={items.mainImageUrl}/>

          {/* <h3 onClick={()=>console.log(items.title)}>{items.title}</h3> */}
          {/* <button className="discord-button" type="button" onClick={()=>{console.log(items.title)}}>Press Me{items.title}</button> */}

          <button className="discord-button" type="button" onClick={ClickHandler}>Press Me</button>

          <button className="discord-button"  type='button' onClick={()=>ClickExample(items.title)}>More Complicated one</button>
        </div>
      )
    })
    
    
    }
    
    
    
    </div>


  )
}

const ItemRenderer = () =>{
  return(
    <div>
      <h1>The button has been Clicked</h1>
    </div>
  )
}

export default Test1; 