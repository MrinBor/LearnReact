import React from 'react'




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

const Name_Items = ['a1','b1','c1'];



//Now we need to iterate over the array


const New_Names = Name_Items.map((names) =>{
return(
    <h1>{names}</h1>
)
})



function List() {
  return (
    <section style={{backgroundColor:'blue',borderRadius:'12px',padding:"8px",margin:"5px"}}>
            <List_Renderer_Styliing>

                {Items.map((it)=>{
                    return(
                        <h1>
                            HELLO WORLD
                        </h1>
                    )
                })}


                //Ways to render the book Items



                {/**React can not print he objects successfully
                 * Either not destructuring 
                 * 
                 */}
                <p1>##List rendering -- Inside of the element</p1>


                <div >
                    {Items.map((detls)=>{
                       const {title,brand,mainImageUrl,ratingsTotal,rating} = detls;

                       return(
                        <div style={{backgroundColor:"black",borderRadius:'12px',padding:"8px",margin:"5px"}}>
                            <h3>{title}</h3>
                            <div style={{backgroundColor:"violet",borderRadius:'12px',padding:"8px",margin:"5px"}}>
                                <h6>{brand}</h6>
                            </div>

                        </div>
                       )

                    })}
                </div>

               


            </List_Renderer_Styliing>

    <div>
     {
    Items.map((items,index)=>{
            return(
                //key = book.id
                <div key={index}>
                    <List_Iterator item_iteration={items}>
                    </List_Iterator>
                </div> 
            )
            })
     }
    </div>


    </section>
  )
}



const List_Iterator=({item_iteration})=>{

    const {title,brand} = item_iteration
    return(
        <div style={{margin:'10px',backgroundColor:"white",color:'black',borderRadius:'12px',padding:"10px"}}>
            <h1>New Type renderer</h1>
            <h2>{title}</h2>
            <h4>{brand}</h4>
        </div>
    )
}




const List_Renderer_Styliing=({children})=>{
return(
    <div>
            {children}
    </div>
)




}

export default List