import React from 'react'
import './Det.css'

//Created an Object To Display
const First_Item = {
title:"Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone",
brand: "Apple",
mainImageUrl: "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg",
ratingsTotal: 55245,
rating: 4.7,
}

const Second_Item = {
    title: "Apple MacBook Pro 14-inch, 2023, M2 Pro Chip, 16GB RAM, 512GB SSD, Space Gray",
    brand: "Apple",
    mainImageUrl: "https://m.media-amazon.com/images/I/71gD8WdSlaL.jpg",
    ratingsTotal: 35210,
    rating: 4.8,
}


const     title= "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone"
const     brand= "Apple"
const     mainImageUrl= "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg"
const     ratingsTotal= 55245
const     rating= 4.7


function Det() {
  return (

//Accessing -->> Destructutinf the props


    <section style = {{backgroundColor:'#9395FA' ,padding:'12px',borderRadius:'12px'}} >
            <div ><h1>Product Details</h1></div>
            <Item img={First_Item.mainImageUrl} title={First_Item.title} brand={First_Item.brand} />

      
            <Item img={Second_Item.mainImageUrl} title={Second_Item.title} brand={Second_Item.brand} />


            <Book2 img={Second_Item.mainImageUrl} title={Second_Item.title} brand={Second_Item.brand} >
              <p>
                Placing in between the opening  and closing 
              </p>
            </Book2>  




{            //matching to the props we are developing
}
    </section>
  ) 
}


//The destructuting of the props
//We will have the follwing

const Book2 =  ({img,title,author,children}) => {
  // const {img,title,author} = props
  return(
    <article className='book'>
      <img style={{borderRadius:'12px', height:'80px',width:'80px'}} src={img} alt='apple_image'/>
      {children}
      <h1 className='sec1'>{title}</h1>
    </article>
  )
}




const Item = (naming) => {
//{brand,mainImageUrl,img,title,ratingTotal}
//Or directly instead of naming
//Either destrucutre them inside the fucntion Body
// Or in the function parameterss


  const {brand,mainImageUrl,img,title,ratingTotal} = naming;

  console.log('Prop Item',naming)
//The children block will be evgerything tha te render
    return(
        <React.Fragment >
            <article >
                <img style={{borderRadius:'12px', height:'80px',width:'80px'}} src={img} alt='apple'/>
                <h2  className='sec1'>{title} </h2>

                {console.log(naming)}

                <p3 style={{color:'black'}}>{brand}</p3>

            </article>
        </React.Fragment>
    )
}
export default Det;