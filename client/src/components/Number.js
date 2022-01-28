import React from 'react';


export default class Number extends React.Component{


    render() {
    return (
        <button
        // changes the class of the button depending on which number is generated
            className = {this.props.className}
        // handles clicking the button, calls the click event from parent component
            onClick = {this.props.onClick}
            >
            {this.props.className}
        </button>

    );
}
}