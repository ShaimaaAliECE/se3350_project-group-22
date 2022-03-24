import React, { Component } from "react";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import style from "./levelFour.css";
import { Link } from "react-router-dom";
import "./home.css";

class LevelFour extends Component {
    render() {
        return (
            <div className="background--custom">
                <div className="header">
                    <h1>MergeSort Algorithm: Level 4</h1>
                </div>
                    <div>
                        <div className="header1">
                            <h1>Level 1: MergeSort Algorithm</h1>
                        </div>
                    <div className="btnNav">
                        <button className="home">Home</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        <button className="back">Back</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                            {/* <!-- button for first step  --> */}
                        <button
                            id="next"
                            className="home"
                            value="Random Number!"
                            onClick={Random}
                        >
                            Next
                        </button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        <button className="restart">Restart</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        <button className="quit">Quit</button>
                    </div>
                </div>
                <div className="instruction1">
                    <h3> Click on the button to generate 10 random numbers</h3>
                </div>
            </div>

        );
    }
}
