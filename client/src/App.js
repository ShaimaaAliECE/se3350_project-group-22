import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/homepage/home";
import "./components/pages/homepage/home.css";
import LevelOne from "./components/pages/level1page/levelPage"
import LevelTwo from "./components/pages/level2page/levelTwo"
import LevelThree from "./components/pages/level3page/levelThree";
import LevelFour from "./components/pages/level4page/4test";
import LoginPage from "./components/pages/loginpage/login";
import SignupPage from "./components/pages/loginpage/signup";
import AdminDashboard from "./components/pages/adminDash/adminDashboard";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/levelOne" element={<LevelOne/>}/>
          <Route path="/levelTwo" element={<LevelTwo/>}/>
          <Route path="/levelThree" element={<LevelThree/>}/>
          <Route path="/4test" element={<LevelFour/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
