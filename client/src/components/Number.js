import React from 'react'
import './pages/level2page/level2.css';

export default function Number(props) {
    const dragStart = e =>{
        const target = e.target;
        //console.log("target:" + target.id)
       // console.log("target class name:" + target.className)
        // if(target.className == "number"){
            e.dataTransfer.setData('num_id', target.id);
        // }else{
        //     e.dataTransfer.setData('num',null);
        // }
        

    }

    const dragOver = e =>{
        e.stopPropagation();
    }
    
  return (
    <button
        id={props.id}
        className={props.className}   
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
         
    >
        {props.children}
    </button>
  )
}
