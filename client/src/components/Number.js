import React from 'react'

export default function Number(props) {
    const dragStart = e =>{
        const target = e.target;

        e.dataTransfer.setData('num_id', target.id);

        // setTimeout(() =>{
        //     target.style.display = "none";
        // },0)
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
