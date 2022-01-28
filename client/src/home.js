import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class home extends Component {
  render() {
    return (
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
            to="/"
            style={{ textDecoration: "none" }}
            className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
          >
            Level1
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="btn2 btn-shadow-drop2 btn-shadow-drop--black"
          >
            Level2
          </Link>
          <Link
            to="/"
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
      </div>
    );
  }
}
