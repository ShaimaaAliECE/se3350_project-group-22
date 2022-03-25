import React from "react";
import ReactDOM from 'react-dom';
import { Route, Navigate, Link } from "react-router-dom";

class Timer extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 0, lastActive: 0, timerIsActive: false, exitLevel: false};
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countUp = this.countUp.bind(this);
      this.clearTimer = this.clearTimer.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let minute_divisor = secs % (60 * 60);
      let minutes = Math.floor(minute_divisor / 60);
  
      let seconds_divisor = minute_divisor % 60;
      let seconds = Math.ceil(seconds_divisor);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let initialTime = this.secondsToTime(this.state.seconds);
      this.setState({ time: initialTime });
    }
  
    startTimer() {
        if (!this.state.timerIsActive)
        {
            this.setState({timerIsActive: true});
            this.timer = setInterval(this.countUp, 1000);  
        }       
    }
  
    countUp() {
        // Add one second, set state so a re-render happens.
        let seconds = this.state.seconds + 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });      
        // check if user was inactive for 5 minutes
        if (this.state.seconds - this.state.lastActive > 300) {
          // set exitLevel state to true so that user will be returned to home
          this.setState({ lastActive: this.state.seconds });
          alert("You will be returned to home due to 5 minutes of inactivity");
          this.setState({ exitLevel: true });
        }
    }

    clearTimer(){
        clearInterval(this.timer);
    }
    // log the time user was last active at
    setLastActive(){
        this.setState({
            lastActive: this.state.seconds,
        });
    }
  
    render() {
      return(
        <div>
          <button onClick={this.startTimer}>Start</button>
          Time Elapsed: {this.state.time.m}:{this.state.time.s}
          {/* return user to home after 5 minutes of inactivity using state*/}
          {this.state.exitLevel && <Navigate to="/" replace={true} />}
        </div>
      );
    }
  }
  
  ReactDOM.render(<Timer/>, document.getElementById('View'));