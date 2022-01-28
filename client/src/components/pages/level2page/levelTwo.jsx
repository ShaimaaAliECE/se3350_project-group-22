import React from "react";
import ReactDOM from 'react-dom';
import {RandomNumbersArray} from '../randomNumberGenerator.js';

export default class LevelTwo extends React.Component {
  getButtonsUsingMap(){
    //create an array of random number
    const randomNum = RandomNumbersArray(10,20,1);

    //return the button with the number in the array
    let buttons=[];
    for (let num of randomNum){
      buttons.push(<button>{num}</button>);
    }
        ReactDOM.render(<> 
             {buttons}
        </>,document.getElementById("numbers"))
  }
    
  render() {
    return (
      <div id="main">
        <h1>Hello</h1>
        <button> alice yout button</button>
        <button onClick={this.getButtonsUsingMap}>Generate 10 Numbers</button>

        <div id="numbers"></div>
      </div>
    );
  }

}
