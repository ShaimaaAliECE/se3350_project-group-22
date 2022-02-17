import React from 'react'

export default function Number(props) {
    const dragStart = e =>{
        const target = e.target;
        console.log("target:" + target.id)

        e.dataTransfer.setData('num_id', target.id);

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
