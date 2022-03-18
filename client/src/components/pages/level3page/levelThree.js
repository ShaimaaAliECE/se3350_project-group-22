import React, { Component } from "react";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import style from "./levelThree.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Random,
  checkFeedbackCorrect,
  checkFeedbackCorrect1,
  checkFeedbackCorrect13,
  checkFeedbackWrong,
  checkFeedbackCorrect10,
  checkFeedbackCorrect12,
  checkFeedbackCorrect14,
  checkFeedbackCorrect15,
  Next2,
  Next10,
  Next11,
  Next12,
  Next13,
  Next14,
  Next15,
  Next16,
  Next17,
  Next18,
  Next19,
  Next20,
  Next21,
  Next22,
  Next23,
  Next24,
  Next25,
  checkFeedbackCorrect2,
  checkFeedbackCorrect11,
  checkFeedbackCorrect3,
  checkFeedbackCorrect4,
  checkFeedbackCorrect5,
  checkFeedbackCorrect6,
  checkFeedbackCorrect7,
  checkFeedbackCorrect8,
  checkFeedbackCorrect9,
  VerifyAnswer,
  VerifyAnswer2,
  VerifyAnswer3,
  VerifyAnswer4,
  VerifyAnswer5,
  VerifyAnswer6,
  VerifyAnswer7,
  VerifyAnswer8,
  Next3,
  Next4,
  Next5,
  Next6,
  Next1,
  Next8,
  Next9,
  Next7,
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

  // verify user response using backend
  checkResponse = async e => {       

    e.preventDefault();

    const response = await fetch('/check-answer', {
      method: 'GET',      
      headers: { 'Content-Type': 'application/json' },   
    });
      
    const body = await response.text();
    alert (body);
    
    if(body == "wrong"){
      this.setState({ userResponse: false });
      alert ("Wrong answer, please try again")
    }    
    else{
      this.setState({ userResponse: true });
      alert ("Correct!")
    } 
  };

  /*
  playSound = () => {
    // Get state of user response
    let incorrect = this.state.incorrect;
    let correct = this.state.correct;

    if (incorrect && !correct) {
      // Play correct sound if user response is right
      this.state.incorrectSound.pause();
      this.state.correctSound.play();
    }
    else {
      // Play incorrect sound if user response is wrong
      this.state.correctSound.pause();
      this.state.incorrectSound.play();
    }

    // Change the state of user answer later
    this.setState({ incorrect: !incorrect });
    this.setState({ correct: !correct });
  };
  */

  render() {
    return (
      <div>
        <div className="header1">
          <h1>Level 3: MergeSort Algorithm</h1>
        </div>
        <div className="functions">
          <button className="home">Home</button>
          <span style={{ display: "inline-block", width: "20px" }}></span>

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
                type="text"
                className="split"
                id="n1space"
                size="3"
                value="< >"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n2" value="Random Number!" readOnly />

              <input
                type="text"
                size="3"
                id="n2space"
                className="split"
                value="< >"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n3" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n3space"
                className="split"
                value="< >"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n4" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n4space"
                className="split"
                value="< >"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <input type="number" id="n5" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n5space"
                className="split"
                value="< >"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect1}
                readOnly
              />
              <input type="number" id="n6" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n6space"
                className="split"
                value="< >"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <input type="number" id="n7" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n7space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n8" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n8space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n9" value="Random Number!" readOnly />
              <input
                type="text"
                size="3"
                id="n9space"
                value="< >"
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
                type="text"
                size="3"
                id="n12space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n22" name="n2" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n22space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n32" name="n32" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n32space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect2}
                readOnly
              />

              <input type="number" id="n42" name="n4" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n42space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n52" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "200px" }}></span>

              <input type="number" id="n62" name="n2" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n62space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n72" name="n2" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n72space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <input type="number" id="n82" name="n2" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n82space"
                value="< >"
                className="split"
                style={{ backgroundColor: "yellow" }}
                onClick={checkFeedbackCorrect3}
                readOnly
              />
              <input type="number" id="n92" name="n2" size="1" readOnly />
              <input
                type="text"
                size="3"
                id="n92space"
                value="< >"
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
                  type="text"
                  size="3"
                  id="n92space"
                  value="< >"
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackWrong}
                  readOnly
                />
                <input type="number" id="num2" name="n2" size="1" readOnly />
                <input
                  type="text"
                  size="5"
                  id="space13"
                  value="< >"
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackCorrect4}
                  readOnly
                />
                <input type="number" id="num3" name="n3" size="1" readOnly />

                <span style={{ display: "inline-block", width: "70px" }}></span>

                <input type="number" id="num4" name="n4" size="1" readOnly />
                <input
                  type="text"
                  size="5"
                  id="space23"
                  value="< >"
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
                  type="text"
                  size="5"
                  id="n92space"
                  value="< >"
                  className="split"
                  style={{ backgroundColor: "yellow" }}
                  onClick={checkFeedbackWrong}
                  readOnly
                />
                <input type="number" id="num7" name="n2" size="1" readOnly />
                <input
                  type="text"
                  size="5"
                  id="space33"
                  value="< >"
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
                  type="text"
                  size="5"
                  id="space43"
                  value="< >"
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
                type="text"
                size="5"
                id="space14"
                value="< >"
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
                type="text"
                size="5"
                id="space24"
                value="< >"
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
          </div>
          {/* split5 */}
          <div className="hide" id="split5">
            <div className="blockofnum" draggable="true" id="item">
              {/* <!--
  group 1 -- > */}
              <input
                type="number"
                id="n1Step5"
                name="n1"
                draggable="true"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "15px" }}></span>
              <input
                type="number"
                id="n2Step5"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "60px" }}></span>
              {/* <!--group 2 -- > */}
              <input
                type="number"
                id="n3Step5"
                draggable="true"
                name="n3"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <input
                type="number"
                id="n4Step5"
                draggable="true"
                name="n4"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input
                type="number"
                id="n5Step5"
                draggable="true"
                name="n4"
                size="1"
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "60px" }}></span>
              <input
                type="number"
                id="n6Step5"
                draggable="true"
                name="n1"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input
                type="number"
                id="n7Step5"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--
  group 4 -- > */}
              <input
                type="number"
                id="n8Step5"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input
                type="number"
                id="n9Step5"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--group 7 -- > */}
              <input
                type="number"
                id="n10Step5"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              {/* end of box */}
            </div>

            {/* end of step 5 */}
          </div>
          {/* choose where to merge 1 */}
          <div className="hide" id="chooseMerge">
            <div className="blockofnum" draggable="true" id="item">
              {/* <!--
  group 1 -- > */}
              <input
                type="number"
                id="n1Step6"
                name="n1"
                draggable="true"
                size="1"
                readOnly
              />

              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackCorrect7}
                readOnly
              />

              <input
                type="number"
                id="n2Step6"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              {/* <!--group 2 -- > */}
              <input
                type="number"
                id="n3Step6"
                draggable="true"
                name="n3"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <input
                type="number"
                id="n4Step6"
                draggable="true"
                name="n4"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input
                type="number"
                id="n5Step6"
                draggable="true"
                name="n4"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "60px" }}></span>
              <input
                type="number"
                id="n6Step6"
                draggable="true"
                name="n1"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input
                type="number"
                id="n7Step6"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--
  group 4 -- > */}
              <input
                type="number"
                id="n8Step6"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input
                type="number"
                id="n9Step6"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
              <input
                type="text"
                size="3"
                id="space26"
                value="><"
                className="merge"
                style={{ backgroundColor: "green" }}
                onClick={checkFeedbackWrong}
                readOnly
              />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--group 7 -- > */}
              <input
                type="number"
                id="n10Step6"
                draggable="true"
                name="n2"
                size="1"
                readOnly
              />
            </div>
          </div>
          {/* merge 1 */}
          <div className="hide" id="merge1">
            <h6>Order the numbers by chossing a value</h6>

            <input type="number" id="n1Step7" name="n1" size="1" />

            <input type="number" id="n2Step7" name="n2" size="1" />

            {/* end of merge1 */}
          </div>
          <div className="hide" id="merge1Answer">
            <h6>Order the numbers by chossing a value</h6>

            <input type="number" id="n1Step7A" name="n1" size="1" />

            <input type="number" id="n2Step7A" name="n2" size="1" />

            {/* end of merge1 */}
          </div>
          {/* choose the second merge  */}
          <div className="hide" id="chooseMerg2">
            <input
              type="number"
              id="n1CM2"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM2"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM2"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM2"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect8}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              type="number"
              id="n5CM2"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "60px" }}></span>
            <input
              type="number"
              id="n6CM2"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              type="number"
              id="n7CM2"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM2"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM2"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM2"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          {/* the second merge usewr input */}
          <div className="hide" id="merge2">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2Input" name="n4" size="1" />
            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer}
            />
          </div>
          {/* the second merge answer sorted  */}
          <div className="hide" id="merge2Answer">
            <input type="number" id="n1A2" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2A2" name="n4" size="1" />
          </div>
          {/* user chosses place of third merge */}
          <div className="hide" id="chooseMerge3">
            <input
              type="number"
              id="n1CM3"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM3"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM3"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM3"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n5CM3"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input
              type="number"
              id="n6CM3"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect9}
              readOnly
            />

            <input
              type="number"
              id="n7CM3"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM3"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM3"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM3"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          <div className="hide" id="merge3">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input3" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2Input3" name="n4" size="1" />
            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer2}
            />
          </div>
          <div className="hide" id="merge3Answer">
            <input type="number" id="n1A3" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2A3" name="n4" size="1" />
          </div>
          {/* choose the 4 merge  */}
          <div className="hide" id="chooseMerge4">
            <input
              type="number"
              id="n1CM4"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM4"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM4"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM4"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n5CM4"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input
              type="number"
              id="n6CM4"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n7CM4"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM4"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM4"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect10}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM4"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          {/* merge 4  */}
          <div className="hide" id="merge4">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input4" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2Input4" name="n4" size="1" />
            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer3}
            />
          </div>
          {/* merge4 answer */}
          <div className="hide" id="merge4Answer">
            <input type="number" id="n1A4" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2A4" name="n4" size="1" />
          </div>
          {/* chose merge 5 */}
          <div className="hide" id="chooseMerge5">
            <input
              type="number"
              id="n1CM5"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM5"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect11}
              readOnly
            />

            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM5"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM5"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n5CM5"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input
              type="number"
              id="n6CM5"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n7CM5"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM5"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM5"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM5"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          {/* merge5  */}
          <div className="hide" id="merge5">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input5" name="n4" size="1" />

            <input type="number" id="n2Input5" name="n4" size="1" />
            <input type="number" id="n3Input5" name="n4" size="1" />
            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer4}
            />
          </div>
          {/* merge5 Answer */}
          <div className="hide" id="merge5Answer">
            <input type="number" id="n1A5" name="n4" size="1" />

            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n2A5" name="n4" size="1" />
            <input type="number" id="n3A5" name="n4" size="1" />
          </div>
          {/* choose merge6  */}
          <div className="hide" id="chooseMerge6">
            <input
              type="number"
              id="n1CM6"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM6"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM6"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM6"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n5CM6"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input
              type="number"
              id="n6CM6"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n7CM6"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect12}
              readOnly
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM6"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM6"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM6"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          {/* merge 6 */}
          <div className="hide" id="merge6">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input6" name="n4" size="1" />

            <input type="number" id="n2Input6" name="n4" size="1" />
            <input type="number" id="n3Input6" name="n4" size="1" />
            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer5}
            />
          </div>
          {/* merge6 answers */}
          <div className="hide" id="merge6Answer">
            <input type="number" id="n1A6" name="n4" size="1" />

            <input type="number" id="n2A6" name="n4" size="1" />
            <input type="number" id="n3A6" name="n4" size="1" />
          </div>
          {/* chose mereg 7 */}
          <div className="hide" id="chooseMerge7">
            <input
              type="number"
              id="n1CM7"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM7"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM7"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect13}
              readOnly
            />
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <span style={{ display: "inline-block", width: "50px" }}></span>
            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM7"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n5CM7"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input
              type="number"
              id="n6CM7"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n7CM7"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM7"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM7"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM7"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          {/* mereg 7 */}
          <div className="hide" id="merge7">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input7" name="n4" size="1" />
            <input type="number" id="n2Input7" name="n4" size="1" />
            <input type="number" id="n3Input7" name="n4" size="1" />
            <input type="number" id="n4Input7" name="n4" size="1" />
            <input type="number" id="n5Input7" name="n4" size="1" />

            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer6}
            />
          </div>
          {/* merge 7 answers  */}
          <div className="hide" id="merge7Answer">
            <input type="number" id="n1A7" name="n4" size="1" />

            <input type="number" id="n2A7" name="n4" size="1" />
            <input type="number" id="n3A7" name="n4" size="1" />
            <input type="number" id="n4A7" name="n4" size="1" />
            <input type="number" id="n5A7" name="n4" size="1" />
          </div>
          {/* chhose merge 8 */}
          <div className="hide" id="chooseMerge8">
            <input
              type="number"
              id="n1CM8"
              name="n1"
              draggable="true"
              size="1"
              readOnly
            />
            <input
              type="number"
              id="n2CM8"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 2 -- > */}
            <input
              type="number"
              id="n3CM8"
              draggable="true"
              name="n3"
              size="1"
              readOnly
            />

            {/* <!--group 3 -- > */}
            <input
              type="number"
              id="n4CM8"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n5CM8"
              draggable="true"
              name="n4"
              size="1"
              readOnly
            />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackWrong}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input
              type="number"
              id="n6CM8"
              draggable="true"
              name="n1"
              size="1"
              readOnly
            />

            <input
              type="number"
              id="n7CM8"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--
  group 4 -- > */}
            <input
              type="number"
              id="n8CM8"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect14}
              readOnly
            />
            <span style={{ display: "inline-block", width: "80px" }}></span>
            {/* <!--group 5 -- > */}
            <input
              type="number"
              id="n9CM8"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />

            {/* <!--group 7 -- > */}
            <input
              type="number"
              id="n10CM8"
              draggable="true"
              name="n2"
              size="1"
              readOnly
            />
          </div>
          {/* merge 8 */}
          <div className="hide" id="merge8">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input8" name="n4" size="1" />
            <input type="number" id="n2Input8" name="n4" size="1" />
            <input type="number" id="n3Input8" name="n4" size="1" />
            <input type="number" id="n4Input8" name="n4" size="1" />
            <input type="number" id="n5Input8" name="n4" size="1" />

            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer7}
            />
          </div>
          {/* merge Answer */}
          <div className="hide" id="merge8Answer">
            <input type="number" id="n1A8" name="n4" size="1" />

            <input type="number" id="n2A8" name="n4" size="1" />
            <input type="number" id="n3A8" name="n4" size="1" />
            <input type="number" id="n4A8" name="n4" size="1" />
            <input type="number" id="n5A8" name="n4" size="1" />
          </div>
          {/* choose merehge 9  */}
          <div className="hide" id="chooseMerge9">
            <input type="number" id="n1CM9" name="n1" size="1" readOnly />
            <input type="number" id="n2CM9" name="n2" size="1" readOnly />

            {/* <!--group 2 -- > */}
            <input type="number" id="n3CM9" name="n3" size="1" readOnly />

            {/* <!--group 3 -- > */}
            <input type="number" id="n4CM9" name="n4" size="1" readOnly />

            <input type="number" id="n5CM9" name="n4" size="1" readOnly />

            <input
              type="text"
              size="3"
              id="space26"
              value="><"
              className="merge"
              style={{ backgroundColor: "green" }}
              onClick={checkFeedbackCorrect15}
              readOnly
            />
            {/* <!--group 3 -- > */}

            <input type="number" id="n6CM9" name="n1" size="1" readOnly />

            <input type="number" id="n7CM9" name="n2" size="1" readOnly />

            {/* <!--
  group 4 -- > */}
            <input type="number" id="n8CM9" name="n2" size="1" readOnly />

            {/* <!--group 5 -- > */}
            <input type="number" id="n9CM9" name="n2" size="1" readOnly />

            {/* <!--group 7 -- > */}
            <input type="number" id="n10CM9" name="n2" size="1" readOnly />
          </div>
          {/* merge 9 */}
          <div className="hide" id="merge9">
            <h6>order the numbers</h6>
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input type="number" id="n1Input9" name="n4" size="1" />
            <input type="number" id="n2Input9" name="n4" size="1" />
            <input type="number" id="n3Input9" name="n4" size="1" />
            <input type="number" id="n4Input9" name="n4" size="1" />
            <input type="number" id="n5Input9" name="n4" size="1" />
            <input type="number" id="n6Input9" name="n4" size="1" />
            <input type="number" id="n7Input9" name="n4" size="1" />
            <input type="number" id="n8Input9" name="n4" size="1" />
            <input type="number" id="n9Input9" name="n4" size="1" />
            <input type="number" id="n10Input9" name="n4" size="1" />
            <input
              type="button"
              id="verify2"
              value="Verify Answer"
              size="6"
              //go to the next step
              style={{ backgroundColor: "Purple" }}
              onClick={VerifyAnswer8}
            />
          </div>
          {/* merge 9 answers  */}
          <div className="hide" id="merge9Answer">
            <input type="number" id="n1A9" name="n4" size="1" />
            <input type="number" id="n2A9" name="n4" size="1" />
            <input type="number" id="n3A9" name="n4" size="1" />
            <input type="number" id="n4A9" name="n4" size="1" />
            <input type="number" id="n5A9" name="n4" size="1" />
            <input type="number" id="n6A9" name="n4" size="1" />
            <input type="number" id="n7A9" name="n4" size="1" />
            <input type="number" id="n8A9" name="n4" size="1" />
            <input type="number" id="n9A9" name="n4" size="1" />
            <input type="number" id="n10A9" name="n4" size="1" />
          </div>
          {/* final result sorted array  */}
          <div className="hide" id="sortedArray">
            <h5>Congratulations you have sorted the array!</h5>
            <input type="number" id="n1CM10" name="n1" size="1" readOnly />
            <input type="number" id="n2CM10" name="n2" size="1" readOnly />

            {/* <!--group 2 -- > */}
            <input type="number" id="n3CM10" name="n3" size="1" readOnly />

            {/* <!--group 3 -- > */}
            <input type="number" id="n4CM10" name="n4" size="1" readOnly />

            <input type="number" id="n5CM10" name="n4" size="1" readOnly />

            <input type="number" id="n6CM10" name="n1" size="1" readOnly />

            <input type="number" id="n7CM10" name="n2" size="1" readOnly />

            {/* <!--
  group 4 -- > */}
            <input type="number" id="n8CM10" name="n2" size="1" readOnly />

            {/* <!--group 5 -- > */}
            <input type="number" id="n9CM10" name="n2" size="1" readOnly />

            {/* <!--group 7 -- > */}
            <input type="number" id="n10CM10" name="n2" size="1" readOnly />
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
          <div className="hide" id="mergeInstructions">
            <input id="Instruction" type="text" value="Choose the next step" />
            <input
              id="SplitBtn"
              type="button"
              value="Split Array"
              //go to the next step
              onClick={checkFeedbackWrong}
            />
            <span style={{ display: "inline-block", width: "20px" }}></span>
            <input
              id="mergeBtn"
              type="button"
              value="Merge Array"
              //go to the next step
              onClick={checkFeedbackCorrect6}
            />
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
          <input
            type="button"
            id="next6"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "orange" }}
            onClick={Next6}
          />
          <input
            type="button"
            id="next7"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "orange" }}
            onClick={Next7}
          />
          <input
            type="button"
            id="next8"
            value="Verify Answer"
            className="hide"
            size="6"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next8}
          />
          <input
            type="button"
            id="next9"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next9}
          />
          <input
            type="button"
            id="next10"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next10}
          />
          <input
            type="button"
            id="next11"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next11}
          />
          <input
            type="button"
            id="next12"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next12}
          />
          <input
            type="button"
            id="next13"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next13}
          />
          <input
            type="button"
            id="next14"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next14}
          />
          <input
            type="button"
            id="next15"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next15}
          />
          <input
            type="button"
            id="next16"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next16}
          />
          <input
            type="button"
            id="next17"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next17}
          />
          <input
            type="button"
            id="next18"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next18}
          />
          <input
            type="button"
            id="next19"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next19}
          />
          <input
            type="button"
            id="next20"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next20}
          />
          <input
            type="button"
            id="next21"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next21}
          />
          <input
            type="button"
            id="next22"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next22}
          />
          <input
            type="button"
            id="next23"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next23}
          />
          <input
            type="button"
            id="next24"
            value="Next"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next24}
          />
          <input
            type="button"
            id="next25"
            value="View Sorted Array"
            className="hide"
            //go to the next step
            style={{ backgroundColor: "Purple" }}
            onClick={Next25}
          />
          {/* <h4 class="hide" id="right">
              Correct answer!{" "}
            </h4> */}{" "}
        </form>
        {/* <div className="footer"></div>
        <div className="footer"></div>{" "}
        {/*<button onClick={this.playSound}>Play Audio Feedback Sample</button>{" "}*/}
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
        </DragDropContext> */}
      </div>
    );
  }
}
