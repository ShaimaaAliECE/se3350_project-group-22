import React, { Component } from "react";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import styles from "./levelThree.css";
import { Random, Wrong, Next1 } from "./Level3Functions";
export default class LevelThree extends Component {
  // verify user response
  checkResponse = async (e) => {
    e.preventDefault();
    const response = await fetch("/check-answer", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const body = await response.text();
    alert(body);
    console.log(body);
    this.setState({ userResponse: body });
  };

  state = {
    // Get audio files in a variable
    incorrectSound: new Audio(incorrectSfx),
    correctSound: new Audio(correctSfx),

    // State for user response
    incorrect: true,
    correct: false,
  };

  playSound = () => {
    // Get state of user response
    let incorrect = this.state.incorrect;
    let correct = this.state.correct;

    if (incorrect && !correct) {
      // Play correct sound if user response is right
      this.state.incorrectSound.pause();
      this.state.correctSound.play();
    } else {
      // Play incorrect sound if user response is wrong
      this.state.correctSound.pause();
      this.state.incorrectSound.play();
    }

    // Change the state of user answer later
    this.setState({ incorrect: !incorrect });
    this.setState({ correct: !correct });
  };

  render() {
    return (
      <div>
        <div className="header1">
          <h1>Level 3: MergeSort Algorithm</h1>
        </div>
        <div>
          <button className="home">Home</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          <button className="back">Back</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          {/* 
                  {/* <!-- button for first step  --> */}
          <button id="next" className="home" value="Start" onClick={Random}>
            Next
          </button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          <button className="restart">Restart</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          <button className="quit">Quit</button>
        </div>
        <div className="instruction1">
          <h3> Click on the button to Start</h3>
        </div>
        <div className="randomdiv">
          <input
            type="button"
            className="random"
            value="Random Number"
            onClick={Random}
          />
        </div>
        <form name="rn">
          {/* <!--step1 --> */}
          <div className="hide" id="showStep1">
            <input
              type="text"
              id="step1"
              name="step1"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              <input type="number" id="tb" value="Random Number!" readOnly />
              <input type="number" id="tb2" value="Random Number!" readOnly />
              <input type="number" id="tb3" value="Random Number!" readOnly />
              <input type="number" id="tb4" value="Random Number!" readOnly />
              <input type="number" id="tb5" value="Random Number!" readOnly />
              <input type="number" id="tb6" value="Random Number!" readOnly />
              <input type="number" id="tb7" value="Random Number!" readOnly />
              <input type="number" id="tb8" value="Random Number!" readOnly />
              <input type="number" id="tb9" value="Random Number!" readOnly />
              <input type="number" id="tb10" value="Random Number!" readOnly />
            </div>
            <h3>Choose your next step</h3>
            <input
              type="button"
              className="nextStep"
              value="Merge Array"
              //go to the next step
              onClick={Wrong}
            />
            <audio
              src="correct.mp3"
              id="correct-audio"
              type="audio/mpeg"
            ></audio>
            <audio src="wrong.mp3" id="wrong-audio" type="audio/mpeg"></audio>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              type="button"
              className="nextStep"
              value="Split Array"
              //go to the next step
              onClick={Next1}
            />
            <h5 class="hide" id="wrong">
              Wrong answer please try again!{" "}
            </h5>
            <h4 class="hide" id="right">
              Correct answer!{" "}
            </h4>
          </div>
          );{" "}
        </form>
        <div className="footer"></div>
        <div className="footer"></div>{" "}
        <h1>
          Hello{" "}
          <button onClick={this.playSound}>Play Audio Feedback Sample</button>{" "}
        </h1>
      </div>
    );
  }
}
