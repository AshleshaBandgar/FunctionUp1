import React from 'react';
import './App.css';
import APICards from './components/organisms/APICards';
import {useState} from 'react'

export default function App() {

  const [user, setUser] = useState([])

  async function handleAPI(){
      const response = await fetch('https://reqres.in/api/users/')
      const userData = await response.json()
      setUser(userData.data)
      console.log(userData.data)
  }
  
  return (
  
       <div>
       <button onClick={handleAPI}>Get User</button>
  
       <div className="App">
  {
    user.map((userData) => <APICards userData={userData} key ={userData.id}/>)
  }
  
  </div>
  </div>
  );
}
