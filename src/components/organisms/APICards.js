import React from 'react';
import './APICards.css';

export default function APICards({userData}){ 
  const {
    id,
    email,
    first_name,
    last_name,
    avatar} = userData
  
return (
<div className="wrapper">
   <img src = {avatar}
    height = "100px"
    style = {{borderRadius : "50%"}} alt = ""/>
    <p>{id}</p> 
    <p>{email}</p>
    <p>{first_name}</p>
    <p>{last_name}</p>
</div>    
  )
}
