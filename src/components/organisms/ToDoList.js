import React from 'react'
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


export default function ToDoList(){
    const[activity, setActivity] = useState("")
    const[listData, setlistData] = useState([])

    function handleActivity(){
        //setlistData([...listData, activity]) or below method 
        setlistData((listData)=>{
        const updateList = [...listData, activity]   //list->to add activities below input bar
                                                     //activities values will be listed in [...listData
           setActivity('');                      //setActivity('')->to clear input bar
           return updateList;
        })
    }
    function handleRemove(i){
        const updatedListData = listData.filter((elem,id)=>{   //filter method to filter out list from listData
           return i!=id;          //to delete specific item which we want to delete
                                  //because we assigning only one delete button
            })
            setlistData(updatedListData)
        }
    function removeAll(){
        setlistData([]);           //delete all liistData from list
    }
  return (
    <>
        <div className="container">
            <div className="header">ToDoList</div>
            <input type="text" placeholder='Add todolist'  //value={activity}->to store input value in variable(activity)
                                                           //onChange->to set the input value in activity variable(otherwise u won't be able to type in input)
                                                           //(e.target.value)->value that user is typing
                                                           //setActivity(e.target.value)->input value will be stored in activity by using setActivity
                   value={activity} onChange={(e)=>setActivity(e.target.value)}/>   
                   <button onClick={handleActivity}>Add</button>
                   <h3>You can do it <ThumbUpIcon/></h3>
            
            {listData.map((data,i)=>{
                return(
                    <p className="List-heading" key={i}>
                     <div>{data}</div>
                     <div className="btn-position" onClick={()=>handleRemove(i)}>Delete</div>    
                             {/* passing key=i in handleRemove                                                                          */}
                     </p>
                )
            })
            }
            {listData.length>=1 && <button onClick={removeAll}>Remove all</button>}
            
        </div>
    </>
  )
}
