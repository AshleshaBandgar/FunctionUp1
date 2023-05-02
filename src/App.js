import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';


export default function App() {
  const [apiData, setApiData] = useState('');
  
useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then( (res) => res.json() )
    .then( (data)=> setApiData(data) ) 
  }, [])

  return (
  <div>
    <img src={apiData.message} />
  </div>
  );
}
