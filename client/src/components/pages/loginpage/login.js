import React from "react";
import Userfront from "@userfront/core";
import ErrorMsg from "./errorMsg";
import { Link } from "react-router-dom";
Userfront.init("demo1234");

export default class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMsg: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);
   };

    handleInput(event){
        event.preventDefault();
        const target = event.target;
        this.setState({
        [target.name]: target.value,
        });
    }

    setErrorMsg(message) {
        this.setState({errorMsg: message});
    }

    handleSubmit(event){
        this.setErrorMsg();
        event.preventDefault();
        Userfront.login({
            method: "password",
            email: this.state.email,
            password: this.state.password,
          }).catch((error) => {
            this.setErrorMsg(error.message);
          });
    }

