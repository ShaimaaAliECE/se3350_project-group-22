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

    render(){
        return (
            <div id="main">
                <div className="head">
                <Link to="/"><button>Home</button></Link>
                    <h1>Admin Login Page</h1>
                </div>
                <div>
                    <ErrorMsg message={this.state.errorMsg}/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email address
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInput}
                        />
                        </label>
                        <label>Password
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput}
                        />
                        </label>
                        <button type="submit">Log In</button>
                        <Link to="/signup/"><button>Sign Up!</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}

//     render(){
//         return (
//             <div id="main">
//                 <div className="head">
//                     <h1>Admin Login Page</h1>
//                 </div>
//                 <div>
//                     <ErrorMsg message={this.state.errorMsg}/>
//                     <form onSubmit={this.handleSubmit}>
//                         <label>Email address
//                         <input
//                             name="email"
//                             type="email"
//                             value={this.state.email}
//                             onChange={this.handleInput}
//                         />
//                         </label>
//                         <label>Password
//                         <input
//                             name="password"
//                             type="password"
//                             value={this.state.password}
//                             onChange={this.handleInput}
//                         />
//                         </label>
//                         <button type="submit">Log In</button>
//                         <Link to="/signup/"><button>Sign Up!</button></Link>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// // <ErrorMsg message={this.state.errorMsg}/>