import './form.css'
import { useState } from 'react'

export default function Form(){

   const [name, setName] = useState('')
   const [heading, setHeading] = useState('Welcome')

   const handleSubmit = (event) =>{

       event.preventDefault();
       setHeading(`Hello ${name}`);
       setName(' ')
};
    const handleChange = (event) =>{
        setName(event.target.value)
    }


   return (
    <div>
      <h1>{heading}</h1>
      <form onSubmit = {handleSubmit}>
        <input
          type = "text"
          value = {name}
          placeholder = "Enter your name"
          onChange = {handleChange }
          

        />
         <button type = "submit">Submit</button>
    
      
      </form>

    </div>
    
  )
}

   
