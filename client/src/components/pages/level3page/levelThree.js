import React, { Component } from "react";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import styles from "./levelThree.css";
import { Random, Wrong } from "./Level3Functions";
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
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              type="button"
              className="nextStep"
              value="Split Array"
              //go to the next step
              onClick={Wrong}
            />
            <div className="hide" id="wrong">
              <input
                type="text"
                id="wrong"
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
            </div>

            {/* step 2 number block */}
            <div className="blockofnum">
              <input type="number" id="n1" name="n1" size="1" readOnly />
              <input type="number" id="n2" name="n2" size="1" readOnly />
              <input type="number" id="n3" name="n3" size="1" readOnly />
              <input type="number" id="n4" name="n4" size="1" readOnly />
              <input type="number" id="n5" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "200px" }}></span>

              <input type="number" id="n6" name="n2" size="1" readOnly />
              <input type="number" id="n7" name="n2" size="1" readOnly />
              <input type="number" id="n8" name="n2" size="1" readOnly />
              <input type="number" id="n9" name="n2" size="1" readOnly />
              <input type="number" id="n10" name="n2" size="1" readOnly />
            </div>

            {/* step 3 block */}
            <div className="blockofnum">
              <input type="number" id="num1" name="n1" size="1" readOnly />
              <input type="number" id="num2" name="n2" size="1" readOnly />
              <input type="number" id="num3" name="n3" size="1" readOnly />

              <span style={{ display: "inline-block", width: "70px" }}></span>

              <input type="number" id="num4" name="n4" size="1" readOnly />
              <input type="number" id="num5" name="n4" size="1" readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

              <input type="number" id="num6" name="n1" size="1" readOnly />
              <input type="number" id="num7" name="n2" size="1" readOnly />
              <input type="number" id="num8" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

              <input type="number" id="num9" name="n2" size="1" readOnly />
              <input type="number" id="num10" name="n2" size="1" readOnly />
            </div>


            {/* step 4 block */}
            <div className="blockofnum">
              {/* <!-- group 1 -- > */}
              <input type="number" id="n1Step4" name="n1" size="1" readOnly />
              <input type="number" id="n2Step4" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "60px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step4" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step4" name="n4" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n5Step4" name="n4" size="1" readOnly />
              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "80px" }}></span>
              <input type="number" id="n6Step4" name="n1" size="1" readOnly />
              <input type="number" id="n7Step4" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--   group 4 -- > */}
              <input type="number" id="n8Step4" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step4" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step4" name="n2" size="1" readOnly />
            </div>


            {/* step 5 block */}
            <div className="blockofnum">
              {/* <!--
            group 1 -- > */}
              <input type="number" id="n1Step5" name="n1" size="1" readOnly />
              <span style={{ display: "inline-block", width: "15px" }}></span>
              <input type="number" id="n2Step5" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "60px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step5" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step5" name="n4" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n5Step5" name="n4" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "60px" }}></span>
              <input type="number" id="n6Step5" name="n1" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n7Step5" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step5" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step5" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step5" name="n2" size="1" readOnly />
            </div>


            {/* step 6 block */}
            <div className="blockofnum">
              {/* <!--group 1 -- > */}
              <input type="number" id="n1Step6" name="n1" size="1" readOnly />
              <input type="number" id="n2Step6" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step6" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step6" name="n4" size="1" readOnly />
              <input type="number" id="n5Step6" name="n5" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "90px" }}></span>
              <input type="number" id="n6Step6" name="n1" size="1" readOnly />
              <input type="number" id="n7Step6" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "90px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step6" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step6" name="n2" size="1" readOnly />
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step6" name="n2" size="1" readOnly />
            </div>


            {/* step 7 block */}
            <div className="blockofnum">
              <input type="number" id="n1Step7" name="n1" size="1" readOnly />
              <input type="number" id="n2Step7" name="n2" size="1" readOnly />
              <input type="number" id="n3Step7" name="n3" size="1" readOnly />
              {/* <!--group 2 -- > */}

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step7" name="n4" size="1" readOnly />
              <input type="number" id="n5Step7" name="n5" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "100px" }}></span>
              <input type="number" id="n6Step7" name="n1" size="1" readOnly />
              <input type="number" id="n7Step7" name="n2" size="1" readOnly />
              <input type="number" id="n8Step7" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "40px" }}></span>
              {/* <!--
            group 4 -- > */}

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step7" name="n2" size="1" readOnly />
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step7" name="n2" size="1" readOnly />
            </div>

            {/* step 8 block */}
            <div className="blockofnum">
              <input type="number" id="n1Step8" name="n1" size="1" readOnly />
              <input type="number" id="n2Step8" name="n2" size="1" readOnly />
              <input type="number" id="n3Step8" name="n3" size="1" readOnly />
              <input type="number" id="n4Step8" name="n4" size="1" readOnly />
              <input type="number" id="n5Step8" name="n5" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "180px" }}></span>
              <input type="number" id="n6Step8" name="n1" size="1" readOnly />
              <input type="number" id="n7Step8" name="n2" size="1" readOnly />
              <input type="number" id="n8Step8" name="n2" size="1" readOnly />

              <input type="number" id="n9Step8" name="n2" size="1" readOnly />
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step8" name="n2" size="1" readOnly />
            </div>


            {/* step 9 block */}
            <div className="blockofnum">
              <input type="number" id="n1Step9" name="n1" size="1" readOnly />
              <input type="number" id="n2Step9" name="n2" size="1" readOnly />
              <input type="number" id="n3Step9" name="n3" size="1" readOnly />
              <input type="number" id="n4Step9" name="n4" size="1" readOnly />
              <input type="number" id="n5Step9" name="n5" size="1" readOnly />
              <input type="number" id="n6Step9" name="n1" size="1" readOnly />
              <input type="number" id="n7Step9" name="n2" size="1" readOnly />
              <input type="number" id="n8Step9" name="n2" size="1" readOnly />

              <input type="number" id="n9Step9" name="n2" size="1" readOnly />
              {/* //    <!--group 7 -- > */}
              <input type="number" id="n10Step9" name="n2" size="1" readOnly />
            </div>


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
