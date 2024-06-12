import React, { useEffect, useState } from 'react'

//The Multiple Returns

const url = "https://api.github.com/users/QuincyLarson"

function ApiFetch() {

  const[isLoading,setIsLoading] = useState(true);
  const[isError,setIsError] = useState(false);
  const[user,setUser] = useState("Deafult Content");

  
  
  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<=299)
      {
          return resp.json()
      }
      else
      {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
      }
    })
    .then((user)=>{
      setUser(user)
    })
    .catch((error) => console.log(error))
  },[])




  if(isLoading)
    {
      return(
        <div>
          <h1>Loading Content</h1>
        </div>
      )
    }

  if(isError)
  {
        return(
        <div>
          <h1 style={{color:"black"}}>Error Encountered !! </h1>
        </div>)
  }






  return (


    <div> 
      <h1>
        {user}
      </h1>
    </div>
  )
}

export default ApiFetch