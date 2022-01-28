import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "./App";
import LevelOne from "./components/pages/level1page/levelOne";
import LevelTwo from "./components/pages/level2page/levelTwo";
import LevelThree from "./components/pages/level3page/levelThree";
export default class home extends Component {
  render() {
    return (
      <div>
        <div className="background--custom">
          <div className="header">
            <h1>Algorithms Visualizer</h1>
          </div>
          <div className="name">
            <h3>Algorithms</h3>
          </div>

          <div className="container">
            <button class="btn btn-shadow-drop btn-shadow-drop--black">
              {" "}
              MergeSort{" "}
            </button>
            <button class="btn btn-shadow-drop btn-shadow-drop--black">
              {" "}
              Algorithm2{" "}
            </button>
            <button class="btn btn-shadow-drop btn-shadow-drop--black">
              {" "}
              Algorithm3{" "}
            </button>
          </div>

          <div className="name">
            <br />
            <h3>Levels</h3>
          </div>
          <div className="container">
            <Link
              to="/levelOne/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
            >
              Level1
            </Link>
            <Link
              to="/levelTwo/"
              style={{ textDecoration: "none" }}
              className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
            >
              Level2
            </Link>
            <Link
              to="/levelThree/"
              style={{ textDecoration: "none" }}
              className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
            >
              Level3
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
            >
              Level4
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
            >
              Level5
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
            >
              Level6
            </Link>
          </div>
          <Routes>
            <Route exact path="/" component={App} />
            <Route exact path="/levelOne" element={<LevelOne />} />
            <Route exact path="/levelTwo" element={<LevelTwo />} />
            <Route exact path="/levelThree" element={<LevelThree />} />
          </Routes>
        </div>
      </div>
    );
  }
}
