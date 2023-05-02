import React from 'react';
import './APICards.css'
import {useEffect, useState} from 'react'

export default function APICards(){ 
    const [user, setUser] = useState([])
    async function getUsers(){
        fetch('https://reqres.in/api/users/')
        .then((data)=> data.json())
        .then ((response)=> setUser(response.data))
        .catch((error) => console.log(error))  
    
    }
    useEffect(() =>{
     getUsers();
} ,[]);

  return (
<>
    <div className="card-container">
        <div className="card">
            
                <div className="card-body">
                <span className="card-number">{user.id}</span><br/>
                <span className="card-author">{user.email}</span>
                <span className="card-title">{user.first_name}</span><br/>
                <span className="card-description">{user.last_name}</span>
                </div>
                  <img src={user.avatar} alt="" className="card-media"/><br/>
                  <button>Get User</button>
                 

           
        </div>
       
    </div>
   
</>    
  )
}
