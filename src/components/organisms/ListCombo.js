import React from 'react'
import  DeleteIcon  from '@material-ui/icons/Delete'
import {useState} from 'react'

export default function ListCombo(props){

    const [line, setLine] = useState(false)

    function cutIt(){
        setLine(true)
    }

    const headingStyle={display:"flex"}

  return (
    <div style={headingStyle}>
       <span onClick={cutIt}><DeleteIcon className="deleteIcon"/></span>
       <li style={{ textDecoration: line ? "line-through" : "none"}}> {props.text} </li>

    </div>
  
)}
