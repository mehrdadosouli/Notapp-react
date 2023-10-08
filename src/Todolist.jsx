import React, { useState,useEffect, useRef } from 'react'
import './Todolist.scss'
import Colors from './Colors'
import Notebox from './Notebox'
import { v4 as uuidv4 } from 'uuid';


export default function Todolist() {
  const boxelem=useRef(null)
  const [inputValue,setInput]=useState('')
  const [colorvalue,setColor]=useState(['red','green','blue','yellow','pink'])
  const [inpuColor,setColorInput]=useState('')
  const [Noteboxvalue,setNotbox]=useState([])
  const [show,setShow]=useState(false)


  const changeColor= (color)=>{
    setColorInput(color) 
    document.getElementsByClassName('title')[0].style.backgroundColor=color;
    document.getElementsByClassName('title')[0].style.color='#fff';
  }
  
  const addHandler=()=>{
    if(inputValue) {
      setShow(true)
      setNotbox(prev=>[...prev,{
        id:Noteboxvalue.length + 1,
        title:inputValue,
        color:inpuColor
      }])
      setInput('')
      document.getElementsByClassName('title')[0].style.backgroundColor='#fff';
      document.getElementsByClassName('title')[0].style.color='black';
    }else{
      setShow(false)
    }    
  }
  return (
    <>
      <div className="header">
        <h1>Note app</h1>
        <input className='title' type="text" onChange={(e)=>setInput(e.target.value)} value={inputValue} /> 
        <div className='colors'>
          {colorvalue.map(item =><Colors allcolors={item} key={uuidv4()} func={changeColor}/>)}
        </div>
        <button className='addbtn' onClick={addHandler}>Add Note</button>
       {
          show || Noteboxvalue  ? 
          <div className='allNotebox'>
           { Noteboxvalue.map(item=>{
            return <Notebox key={uuidv4()} box={item.title} color={item.color}/> 
          })}
          </div>
          : ""
       }
      </div>
    </>
  )
}
