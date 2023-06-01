import React from 'react';
import { useEffect, useState } from 'react';
import styles from'./MainPage.module.css'

export default function MainPage(){

     const [data, setData] = useState([])

    function getData(){
        fetch('data.json')
        .then((res)=>{
            return res.json()
        })
        .then((myjson)=>{
    //    console.log(data)
           setData(myjson)
        })
    }

    useEffect(()=>{
       getData()
    }, [])

  return (
    <div>
        {
            data && data.length > 0 && data.map((val,id)=>{
          return(
            <div className={styles.container} key={val.id}>
            <p>{val.id}</p>
            <p>{val.content}</p>
            <p>{val.createdAt}</p>
            <img src={val.image}/>
            <p>{val.tweetedBy.id}</p>
            <p>{val.tweetedBy.name}</p>
            <p>{val.likeCount}</p>
            <p>{val.commentCount}</p>
            <p>{val.reTweetsCount}</p>
            <p>{val.isLiked}</p>

            </div>
            
          )
        })
        }
    </div>
  )
}
