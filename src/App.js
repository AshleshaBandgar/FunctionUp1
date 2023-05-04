import React from 'react';
import{ useEffect, useState } from 'react';
import axios from 'axios';
import Axios from './components/organisms/Axios';

export default function App(){
  
  const [user, setUser] = useState([]) 

  async function AxiosCards(){
    const response = await axios.get('https://reqres.in/api/users/')
    const userData = await response.data
    setUser(userData.data)
    
  }
 useEffect(()=>{
 AxiosCards();
},[])

return (
<div>  
  <div className="App">
{
user.map((userData) => <Axios userData={userData} key ={userData.id}/>)
}

</div>
 
</div>
 )}
