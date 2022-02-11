import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/homepage/home";
import "./components/pages/homepage/home.css";
import LevelOne from "./components/pages/level1page/levelPage"
import LevelTwo from "./components/pages/level2page/levelTwo"
import LevelThree from "./components/pages/level3page/levelThree"
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
        </Routes>
      </Router>
    );
  }
}

export default App;
