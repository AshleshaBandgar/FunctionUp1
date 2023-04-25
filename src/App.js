import React from 'react';
import './App.css';
import Productcard from './components/product';


function App() {
const userOne = {
  image :"https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600",
  nav:'WOODLAND',
  details:"garnier pure active micellure",
  price:"$70"
}

const userTwo = {
  image :"https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&w=600",
  nav:'NIKE',
  details:"Latest collection",
  price:"$80"
}
const userThree = {
  image :"https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600",
  nav:'BATA',
  details:"Newest collection",
  price:"$100"
}
function AlertUserOne(){
  alert(userOne.nav)
}
function AlertUserTwo(){
  alert(userTwo.nav)
}
function AlertUserThree(){
  alert(userThree.nav)
}
 
return (
<div className="App">

<Productcard 
  userDetail = {userOne}
  alertFunction={AlertUserOne}
/>
<Productcard
  userDetail = {userTwo}
  alertFunction={AlertUserTwo}
/>
<Productcard
  userDetail = {userThree}
  alertFunction={AlertUserThree}
  
/>
</div>     
  );
}
export default App;