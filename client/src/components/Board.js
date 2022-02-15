import React from 'react'

export default function Board(props) {
    const drop = (e) => {
        e.preventDefault();
        const num_id = e.dataTransfer.getData('num_id');

        const num = document.getElementById(num_id);
        num.style.display = 'block';

        e.target.appendChild(num);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }
  return (
    <div
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
    >
        {props.children}
    </div>
  )
}
