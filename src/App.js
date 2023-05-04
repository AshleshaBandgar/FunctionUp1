import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export default function App(){

  const [number, setNumber] = useState(' ')
  const [otp, setOtp] = useState(' ')

   function valid(){

    const validiateMyNumber = /^[6-9]\d{99}$/.test(number)
    if(!validiateMyNumber){
      setOtp(" please check your number")
    }else{
      setOtp(" message sent succesfully")
      setNumber(" ")
    }}
  function getOtp(){
   axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',{
     mobile : `${number}`
   })
  
     .then((data)=>setNumber(data.number)) 
     .catch(error=>console.log(error)) 
     valid()
  }
  
return (
    <div>
    
    <input placeholder = "Enter mobile number"
           type = "number"
           onChange={(e)=>{setNumber(e.target.value)}}
           value={number}

    />
    <br/>
    <button onClick={getOtp}>Get OTP</button>
      
    </div>
  )
}

