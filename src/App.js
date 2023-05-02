import React from 'react';
import './App.css';
import Food from './components/organisms/Food-Project/food project';
import Button from './components/atoms/button';
import AboutFoodilla from './components/organisms/Food-Project/aboutfoodilla';


function App(){
  const card1 = {
    number:"1",
    category:"Breakfast",
    Name:"Poha",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/13041628/pexels-photo-13041628.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  
  const card2 = {
    number:"2",
    category:"Lunch",
    Name:"Manchurian",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/5339079/pexels-photo-5339079.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  
  const card3 = {
    number:"3",
    category:"Lunch",
    Name:"Dosa",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://media.istockphoto.com/id/1460788317/photo/south-indian-vegetarian-breakfast.jpg?b=1&s=612x612&w=0&k=20&c=Y85m3OnJrowADnlL9eBjPm1Je11d-t6qoCvjhjCC0dk="
  }
  const card4 = {
    number:"4",
    category:"Dinner",
    Name:"Biryani",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  const card5 = {
    number:"5",
    category:"Dinner",
    Name:"Buttor Chicken",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  const card6 = {
    number:"6",
    category:"Lunch",
    Name:"Noodles",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  const card7 = {
    number:"7",
    category:"Dinner",
    Name:"Paneer shahi korma",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  const card8 = {
    number:"8",
    category:"Lunch",
    Name:"Aloo paratha",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  const card9 = {
    number:"9",
    category:"Breakfast",
    Name:"Upama",
    description:"It is a popular snack that is also sold in local restaurants and food stalls. In home recipes people also add other vegetables such as peas and corn to it.",
    image:"https://media.istockphoto.com/id/1422008793/photo/close-up-image-of-indian-breakfast-recipe-of-savoury-rava-upma-in-oven-proof-serving-dish.jpg?b=1&s=612x612&w=0&k=20&c=Vwprq6wE9WRDLcHwkjDwyyNl3GB2xG0Wmd4zxpX1K3g="
  }
  
return (
 <div className="App">
    <img className = "logo" src = "images/logo.png" alt = ""/>
    <h2 className = "slogan">We’re tastier! Freshly made!</h2> 
    <Button/>
<p className ="food-container">    
       <Food 
       menuDetail={card1}/>
       <Food 
       menuDetail={card2}/>
       <Food 
       menuDetail={card3}/>
       <Food 
       menuDetail={card4}/>
       <Food 
       menuDetail={card5}/>
       <Food 
       menuDetail={card6}/>
       <Food 
       menuDetail={card7}/>
       <Food 
       menuDetail={card8}/>
       <Food 
       menuDetail={card9}/>
</p>
 <AboutFoodilla/>

</div>


  );
}
export default App;