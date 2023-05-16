import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'


export default function App(){

const navigate = useNavigate()

function handleLogin(){
  navigate('/Login')
}

function handleRegister(){
  navigate('/Register')
}

function handleHome(){
  navigate('/Home')
}

function handleAboutUs(){
  navigate('/aboutus')
}





  return (
  <div className="App">

    
       <button onClick={handleHome}>Home</button>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleRegister}>Register</button>
       <button onClick={handleAboutUs}>AboutUs</button>
      
       
  </div>
  )
}
