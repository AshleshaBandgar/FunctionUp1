import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {useState} from 'react'
import ListCombo from './ListCombo';


export default function ToDoList(){
    const[item, setItem]=useState("")
    const [newItem, setnewItem] = useState([])

    function itemEvent(e){
        setItem(e.target.value)
    }
    function todoList(){
        setnewItem((prevValue)=>{
            return [...prevValue,item]
        })
        setItem(" ")
    }
  return (
    <div className='main-div'>
      <div className='center-div'>
        <h1>Add new user</h1>
        <br/>
        <input type='text' 
        value={item}
               placeholder='Add New User'
               onChange={itemEvent}
               />
        <Button className="newBtn" onClick={todoList}>
           <AddIcon/> 
        </Button>
        <br/>
        <ol>
           {
           newItem.map((val,index)=>{
            return <ListCombo key={index} text={val}/> })
            }
        </ol>
        
      </div>
    </div>
  )
}