import React from 'react';


export default class Number extends React.Component {
    render() {
        const dragStart = e => {
            const target = e.target;
            e.dataTransfer.setData('num_id',target.id);
        }

        const dragOver = e => {
            e.stopPropogation();
        }
        return (
                <button
                    id={this.props.id}
                    draggable = {this.props.draggable}
                    onDragStart={dragStart}
                    onDragOver ={dragOver}
                    // changes the class of the button depending on which number is generated
                    className={this.props.className}
                    // handles clicking the button, calls the click event from parent component
                    onClick={this.props.onClick}
                >
                    {this.props.id}
                </button>

        );
    }
}