import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function App(){

  const [axiosData, setAxiosData] = useState([])
  // const [count, setCount] = useState(0)
     
  async function Axios(){
    // setCount(count+1)
    const res = await axios.get('https://dog.ceo/api/breeds/image/random')
    const data = await res.data
    console.log(data)
    setAxiosData(data)
  
  }
return (
    <div>
    
       <img src = {axiosData.message} alt = "" 
        height = "150px"
        width = "150px"
       />
      
       <button onClick ={Axios}>Click</button>
       <br/>
       
    </div>
  )
}

