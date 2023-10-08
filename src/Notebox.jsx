import React from 'react'
import './Todolist.scss'

export default function Notebox(props) {
   
  return (
    <>
       { <div className="note" style={props.color =='yellow' || props.color=='' ? {color:'black',backgroundColor:props.color} : {color:'white',backgroundColor:props.color}} > {props.box} </div> }
    </>
  )
}
