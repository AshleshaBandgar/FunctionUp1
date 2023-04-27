import { useState } from 'react'
import Button from '../../atoms/button'
import './luckynumber.css'

export default function Luckynumbergame(){
    const num = 10
   const [lucky, setLucky]=useState()
   
   function handleLuckynum(e){
        setLucky(e.target.value) 
    }
    

    function handleSubmit(){
        if(lucky<num){
        alert("You guessed a smaller number")}

    
        if(lucky>num){
        alert("You guessed a bigger number than the lucky number")}

    
        if(lucky==num){
        alert(" Congratulations you guessed the right number")}

    }   
    
   return (
    <div classname="form">
      <h1>Lucky Number Game</h1>
      
      <input classname="inputField"
      placeholder='Guess Lucky Number' 
      onChange={handleLuckynum} 
      type="number"/>
      <Button btnStyle="submitbtn" clickFunction={handleSubmit}/>
    </div>
    
  )
}