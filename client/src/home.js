import React, { Component } from "react";
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
          <br/>
          <h3>Levels</h3>
        </div>
        <div className="container">
        <button class="btn2 btn-shadow-drop2 btn-shadow-drop--black">
            {" "}
            Level 1{" "}
          </button>
          <button class="btn2 btn-shadow-drop2 btn-shadow-drop--black">
            {" "}
            Level 2{" "}
          </button>
          <button class="btn2 btn-shadow-drop2 btn-shadow-drop--black">
            {" "}
            Level 3{" "}
          </button>
          <button class="btn2 btn-shadow-drop2 btn-shadow-drop--black">
            {" "}
            Level 4{" "}
          </button>
          <button class="btn2 btn-shadow-drop2 btn-shadow-drop--black">
            {" "}
            Level 5{" "}
          </button>
          <button class="btn2 btn-shadow-drop2 btn-shadow-drop--black">
            {" "}
            Level 6{" "}
          </button>
        </div>
      </div>
    );
  }
}
