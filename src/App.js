import React, { Fragment } from 'react';
import './App.css';
import { useState } from 'react';
import Form from './components/form';


function App() {

const [count, setCount] = useState(0)

function handleIncrement(){
  setCount(count+1)
  
};

function HandleDecrement(){
  if(count>0)
  setCount(count-1)
}
 
return (
<div className="App">

<h3>Count is : {count}</h3>
<button onClick={handleIncrement}>Increment</button>
<button onClick={HandleDecrement}>decrement</button>

<Form/>
</div> 

  );
}
export default App;