
  import React, { Component } from "react";
  import incorrectSfx from '../../../sounds/wrong.mp3';
  import correctSfx from '../../../sounds/correct.mp3';
  export default class LevelThree extends Component {
import React from "react";
//importing the random number generator function 
import { Random, Next }from "./Level3Functions";

export default class Example extends React.Component {
    
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
    }
    else {    
      // Play incorrect sound if user response is wrong
      this.state.correctSound.pause();
      this.state.incorrectSound.play();
    }


    //get the random numbers
        render() {
          return (
            <div>
                <div className="header1">
                  <h1>Level 3: MergeSort Algorithm</h1>
                </div>
                
                <div className="headerBtns">
                  <button className="home">Home</button>
                  <span style={{ display: "inline-block", width: "20px" }}></span>

                  <button className="back">Back</button>
                  <span style={{ display: "inline-block", width: "20px" }}></span>

                  <button className="restart">Restart</button>
                  <span style={{ display: "inline-block", width: "20px" }}></span>

                  <button className="quit">Quit</button>
                  <span style={{ display: "inline-block", width: "20px" }}></span>
                </div>
              

                <div className="instruction1">
                  <h3> Click on the button to generate 10 random numbers</h3>
                </div>

                <div className="randomdiv">
                  <input
                    type="button"
                    className="random"
                    value="Random Number!"
                    onClick={Random}
                  />
                </div>

                <form name="Start">
                <div className="hide" id="StartLevel">

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
                  <input
                    type="button"
                    className="nextStep"
                    value="Next Step"
                    onClick={Next}
                  />
                </div>
                ); </form>
              <div className="footer"></div>
            </div>
      
          
                  

//ask merge or split
//check if right
//if right move on
    //drag numbers from above step to the correct spots
    //if right start loop again
    //if wrong try again
//if wrong try again



          
/*
  // verify user response
  checkResponse = async e => {       

  e.preventDefault();
    const response = await fetch('/check-answer', {
      method: 'GET',      
      headers: { 'Content-Type': 'application/json' },   
    });
      
    const body = await response.text();
      alert (body);
      console.log (body);   
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
      }
      else {
        // Play incorrect sound if user response is wrong
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
      }


  // verify user response
  checkResponse = async e => {       

  e.preventDefault();
    const response = await fetch('/check-answer', {
      method: 'GET',      
      headers: { 'Content-Type': 'application/json' },   
    });
      
    const body = await response.text();
      alert (body);
      console.log (body);   
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

    render() {
      return (

        <div className="header">
          <h1>Hello
            <button onClick={this.playSound}>
              Play Audio Feedback Sample
            </button>
            </h1>
        </div>
    );
    }

  }



}

    */
  )}}

