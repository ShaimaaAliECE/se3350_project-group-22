// import Userfront from "@userfront/core";
// import React from "react";
// import ErrorMsg from "./errorMsg";
// import './login.css';
// Userfront.init("demo1234");


// // defining the sign up form as a component
// export default class SignupPage extends React.Component{
//     constructor(props) {
//         super(props);
//         // declaring input fields
//         this.state = {
//             fullName: "",
//             username: "",
//             email: "",
//             password: "",
//             verifyPass: "",
//             errorMsg: "",
//         };
//         // functions to handle form submission and input value changes
//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // renders error message component above the form
//         this.setErrorMsg = this.setErrorMsg.bind(this);
//     };

//     // called if the user changes the value of an input field value, to update its corresponding state variable to match
//     handleInput(event) {
//         event.preventDefault();
//         const target = event.target;
//         this.setState({
//           [target.name]: target.value,
//         });
//     }

//     // handle the form submission by calling Userfront.signup()
//     handleSubmit(event) {
//         event.preventDefault();
//         // reset the error message i.e. clear it
//         this.setErrorMsg();
//         // verifying the user entered the same passwords
//         if (this.state.password !== this.state.verifyPass){
//             return this.setErrorMsg("The submitted passwords do not match");
//         }
//         // call Userfront.signup()
//         Userfront.signup({
//             method: "password",
//             email: this.state.email,
//             password: this.state.password,
//             data: {
//                 fullName: this.state.fullName,
//                 username: this.state.username,
//             },
//             // if there's an error with signup, catch the error in the promise chain and display it as the error message
//         }).catch((error)=>{this.setErrorMsg(error.message)});
//     }

//     setErrorMsg(message){
//         this.setState({errorMsg: message});
//     }

//     // render signup page elements/components
//     render() {
//         return (
//           <div id="main">
//             <div className="head">
//               <h1>Admin Signup Page</h1>
//             </div>
//             <ErrorMsg message={this.state.errorMsg}/>
//             <form onSubmit={this.handleSubmit}>
//             <div className="signupcont">
//               <label>
//                 Full Name
//                 <input
//                   name="fullName"
//                   type=" text"
//                   value={this.state.fullName}
//                   onChange={this.handleInput}
//                 />
//               </label>
//               <label>
//                 Username
//                 <input
//                   name="username"
//                   type="username"
//                   value={this.state.username}
//                   onChange={this.handleInput}
//                 />
//               </label>
//               <label>
//                 Email address
//                 <input
//                   name="email"
//                   type="email"
//                   value={this.state.email}
//                   onChange={this.handleInput}
//                 />
//               </label>
//               <label>
//                 Password
//                 <input
//                   name="password"
//                   type="password"
//                   value={this.state.password}
//                   onChange={this.handleInput}
//                 />
//               </label>
//               <label>
//                 Verify password
//                 <input
//                   name="verifyPass"
//                   type="password"
//                   value={this.state.verifyPass}
//                   onChange={this.handleInput}
//                 />
//               </label>
//               </div>
//               <button type="submit">Sign up!</button>
//             </form>
//           </div>
//         );
//       }
// }

