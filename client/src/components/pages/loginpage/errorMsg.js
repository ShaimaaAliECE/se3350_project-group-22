import React from "react";

export default class ErrorMsg extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (!this.props.message) return "";
        return <div id="alert">{this.props.message}</div>;
    }
}