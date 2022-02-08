  import React, { Component } from "react";
  import incorrectSfx from '../../../sounds/wrong.mp3';
  import correctSfx from '../../../sounds/correct.mp3';
  export default class LevelThree extends React.Component {

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
          <h1>Hello</h1>
            <button onClick={this.playSound}>
              Play Audio Feedback Sample
            </button>
        </div>
    );
    }
  }

