import React, { Component } from "react";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import "./levelThree.css";
import { Random, Wrong , refreshPage} from "./Level3Functions";
import { Link } from "react-router-dom";
import styles from "./levelThree.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Random,
  checkFeedbackCorrect,
  checkFeedbackCorrect1,
  checkFeedbackWrong,
  Next2,
  checkFeedbackCorrect2,
  checkFeedbackCorrect3,
  checkFeedbackCorrect4,
  checkFeedbackCorrect5,
  Next3,
  Next4,
  Next5,
  Next1,
} from "./Level3Functions";

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `number ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 10;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? "lightpink" : "pink",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#e2b4ee	" : "#e2b4ee	",
  display: "flex",
  padding: grid,
  overflow: "auto",
});

export default class LevelThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

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
        <div className="functions">
        <Link to="/home/">
          <button className="home">Home</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
        </Link>
         
          
          <button className="back">Back</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
          
          <button className="restart" onClick={refreshPage}>Restart</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>

        <Link to="/home/"> 
          <button className="quit">Quit</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>
        </Link>

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
              <input
                type="number"
                id="tb5"
                value="Random Number!"
                // onClick={checkFeedbackCorrect}
                readOnly
              />
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
              onClick={checkFeedbackWrong}
            />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              type="button"
              className="nextStep"
              value="Split Array"
              //go to the next step
              onClick={checkFeedbackCorrect}
            />
          </div>
          {/* first place to split */}
          <div className="hide" id="Split1">
            <h5 id="right" style={{ color: "black" }}>
              {" "}
              Click where you want to split the array on the yellow space
            </h5>
            <h6 id="right" style={{ color: "black" }}>
              {" "}
              Hint: you must split all the groups in each step to be able to
              move to the next one
            </h6>

            <div className="blockofnum">
              <input type="number" id="n1" value="Random Number!" readOnly />

              <input
                type="number"
                className="split"
                id="n1space"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n2" value="Random Number!" readOnly />

              <input
                type="number"
                id="n2space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n3" value="Random Number!" readOnly />
              <input
                type="number"
                id="n3space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n4" value="Random Number!" readOnly />
              <input
                type="number"
                id="n4space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <input type="number" id="n5" value="Random Number!" readOnly />
              <input
                type="number"
                id="n5space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect1}
                readOnly
              />
              <input type="number" id="n6" value="Random Number!" readOnly />
              <input
                type="number"
                id="n6space"
                className="split"
                value=""
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <input type="number" id="n7" value="Random Number!" readOnly />
              <input
                type="number"
                id="n7space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n8" value="Random Number!" readOnly />
              <input
                type="number"
                id="n8space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n9" value="Random Number!" readOnly />
              <input
                type="number"
                id="n9space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n10" value="Random Number!" readOnly />
            </div>
          </div>
          {/* 

          split 2 */}
          <div className="hide" id="split2">
            <div className="blockofnum">
              <input type="number" id="n12" name="n1" size="1" readOnly />
              <input
                type="number"
                id="n12space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n22" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n22space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n32" name="n32" size="1" readOnly />
              <input
                type="number"
                id="n32space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect2}
                readOnly
              />

              <input type="number" id="n42" name="n4" size="1" readOnly />
              <input
                type="number"
                id="n42space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n52" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "200px" }}></span>

              <input type="number" id="n62" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n62space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n72" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n72space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n82" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n82space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect3}
                readOnly
              />
              <input type="number" id="n92" name="n2" size="1" readOnly />
              <input
                type="number"
                id="n92space"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n102" name="n2" size="1" readOnly />
            </div>

            {/* split 3 */}
            <div className="hide" id="split3">
              <div className="blockofnum">
                <input type="number" id="num1" name="n1" size="1" readOnly />
                <input
                  type="number"
                  id="n92space"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackWrong}
                  readOnly
                />
                <input type="number" id="num2" name="n2" size="1" readOnly />
                <input
                  type="number"
                  id="space13"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num3" name="n3" size="1" readOnly />

                <span style={{ display: "inline-block", width: "70px" }}></span>

                <input type="number" id="num4" name="n4" size="1" readOnly />
                <input
                  type="number"
                  id="space23"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num5" name="n4" size="1" readOnly />

                <span
                  style={{ display: "inline-block", width: "100px" }}
                ></span>

                <input type="number" id="num6" name="n1" size="1" readOnly />
                <input
                  type="number"
                  id="n92space"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackWrong}
                  readOnly
                />
                <input type="number" id="num7" name="n2" size="1" readOnly />
                <input
                  type="number"
                  id="space33"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num8" name="n2" size="1" readOnly />

                <span
                  style={{ display: "inline-block", width: "100px" }}
                ></span>

                <input type="number" id="num9" name="n2" size="1" readOnly />
                <input
                  type="number"
                  id="space43"
                  value=""
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num10" name="n2" size="1" readOnly />
              </div>
            </div>
          </div>
          {/* split 4 */}
          <div className="hide" id="split4">
            <div className="blockofnum">
              {/* <!-- group 1 -- > */}
              <input type="number" id="n1Step4" name="n1" size="1" readOnly />
              <input
                type="number"
                id="space14"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect5}
                readOnly
              />
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
              <input
                type="number"
                id="space24"
                value=""
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect5}
                readOnly
              />
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

        );
      </form>
      <div className="footer"></div>
    </div>
  );

          {/* split5 */}
          <div className="hide" id="split5">
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
          </div>
          <div className="hide" id="fedback1">
            <input
              type="button"
              id="feedbackcorrect"
              name="feedback"
              size="80"
              style={{ color: "green" }}
              readOnly
            />
          </div>
          <div className="hide" id="fedback2">
            <input
              type="button"
              id="feedbackwrong"
              name="feedback"
              size="80"
              style={{ color: "red" }}
              readOnly
            />
          </div>
          <div className="hide" id="Next">
            <input
              type="button"
              id="next"
              value="Next"
              //go to the next step
              onClick={Next1}
            />
          </div>
          <input
            className="hide"
            type="button"
            id="next2"
            value="Next"
            //go to the next step
            onClick={Next2}
          />
          <input
            className="hide"
            type="button"
            id="next3"
            value="Next"
            //go to the next step
            onClick={Next3}
          />
          <input
            className="hide"
            type="button"
            id="next4"
            value="Next"
            //go to the next step
            style={{ backgroundColor: "orange" }}
            onClick={Next4}
          />
          <input
            className="hide"
            type="button"
            id="next5"
            value="Next"
            //go to the next step
            style={{ backgroundColor: "orange" }}
            onClick={Next5}
          />
          {/* <h4 class="hide" id="right">
              Correct answer!{" "}
            </h4> */}{" "}
        </form>
        <div className="footer"></div>
        <div className="footer"></div>{" "}
        <button onClick={this.playSound}>Play Audio Feedback Sample</button>{" "}
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                className="grid"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );

  }
}
