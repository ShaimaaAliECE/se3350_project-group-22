import React from "react";
import wrongSfx from '../../../sounds/wrong.mp3';
import correctSfx from '../../../sounds/correct.mp3';

export default class Example extends React.Component {
    
  state = {

    // Get audio file in a variable
    wrong: new Audio(wrongSfx),
    correct: new Audio(correctSfx),

    // Set initial state of audio
    wrongIsPlaying: false,
    correctIsPlaying: false,
  };

  playWrong = () => {
    // Get state of audio
    let wrongIsPlaying = this.state.wrongIsPlaying;

    /*
    if (wrongIsPlaying) {
      // Pause the audio if it is playing
      this.state.wrong.pause();
    } else {
    */

      // Play the audio if it is paused
      this.state.wrong.play();
    //}

    // Change the state of audio
    this.setState({ wrongIsPlaying: !wrongIsPlaying });
  };

  playCorrect = () => {
    // Get state of audio
    let correctIsPlaying = this.state.correctIsPlaying;

    /*
    if (correctIsPlaying) {
      // Pause the audio if it is playing
      this.state.correct.pause();
    } else {
    */

      // Play the audio if it is paused
      this.state.correct.play();
    //}

    // Change the state of audio
    this.setState({ correctIsPlaying: !correctIsPlaying });
  };

    render() {
        return (
      
      <div className="header">
        <h1>Hello</h1>
        {/* Button to play audio */}
        <button onClick={this.playWrong}>
          Play Wrong Sound
        </button>
        <button onClick={this.playCorrect}> 
          Play Correct Sound
        </button>

      </div>
    );
    }
}
