import React, {useEffect, useState } from 'react'

function Fake() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/posts").then((result)=>{
            result.json().then((resp)=>{
                console.log("result",resp)
                setData(resp);
            })
        })
    },[])
        

  return (
    <div>
    <h1>map</h1>
    {
        data.map((item,i)=>
        <div key={i}><h1>{item.id},{item.title},{item.author}</h1></div>)
    }
    </div>
  )
}

export default Fake;