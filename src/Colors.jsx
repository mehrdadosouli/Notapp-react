import React from 'react'
import './Todolist.scss'

export default function Colors(props) {
    const colors=props.allcolors
    const colorHandler=()=>{
      props.func(colors)
    }
  return (
    <>   
        {
          <div className='color' style={{backgroundColor:colors}} onClick={colorHandler}></div>
        }
        
    </>
  )
}
