import React from 'react';
import './food project.css'

export default function Food({menuDetail}){
  const {
    number,
    category,
    Name,
    description,
    image,
 } = menuDetail
  return (
<>
    <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number">{number}</span><br/>
                <span className="card-author">
                {category}</span>
                <h2 className="card-title">{Name}</h2>
                <span className="card-description">
                {description}</span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} alt="" className="card-media"/>
            <span className="card-tag">Order now</span>
        
        </div>
       
    </div>
   
</>    
  )
}
