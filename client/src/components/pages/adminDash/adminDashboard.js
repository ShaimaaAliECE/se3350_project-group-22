import React from "react";

export default class AdminDashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div id="main">
            <div className="head">
                <h1>Welcome to the Admin Dashboard!</h1>
            </div>
            <button>View Analytics</button>
        </div>
        )
    };
}