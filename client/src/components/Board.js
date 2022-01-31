import { captureRejections } from 'events';
import React from 'react';

export default function Board(props) {
    const drop = e => {
        //stop error
        e.preventDefault();
        //get the number id
        const num_id = e.dataTransfer.getData('num_id');

        const num = document.getElementById(num_id);
        //hide the block when first start dragging
        num.style.display = 'block';

        //grab the target which is what is being returned and append a child
        e.target.appendChild(num);
    }

    const dragOver = e => {
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
    );
}

