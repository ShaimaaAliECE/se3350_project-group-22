import React from "react";
import ReactDOM from 'react-dom';
import RandomNumbersArray from "../../../randomNumberGenerator";
import Number from '../../Number';
import Board from "../../Board.js";
import './level2.css';
import {steps} from "./steps";
import {useDrag} from 'react-dnd';

// declare var to keep track of the step we're on, and start on step one.
let count = 0; 

export default class LevelTwo extends React.Component {

  getContainers(){
    // render and display the steps (written here to allow reusability)
    ReactDOM.render(<><text>Step {count}: {steps[count].step}</text> </>, document.getElementById("step"));
    // figure out the number of containers needed for the current step number
    let numConts = steps[count-1].container;
    // array to hold number of containers
    let containers = [];  
    // add as many containers to the array as required, with increasing id numbers
    for (let i=0; i<numConts; i++) {
      containers.push(<Board className='board' id={i}></Board>);
    } 
    // render the containers
    ReactDOM.render(<>{containers}</>, document.getElementById("containers"));
  }

  // handling the user clicking the next button
  incrStep(){
    // if it's not the last step, increase the count variable
    if (count < 9){
      count++;
    }
  }

  // handling the user clicking the back button
  decrStep(){
    // if it's not the first step, decrease the count variable
    if (count > 1){
      count--;
    }
  }

  getButtonNumbers() {
    //create an array of random number
    const randomNum = RandomNumbersArray(10, 20, 1);
    //return the button with the number in the array
    let buttons = [];
    for (let num of randomNum) {
      buttons.push(<Number id={num} className="number" draggable="true"></Number>);
    }
    // render the Number button components in the div called numbers
    ReactDOM.render(<>{buttons}</>, document.getElementById("numbers"));
    // ReactDOM.render(<>
    //   <Board className='board' id='1'></Board>
    //   <Board className='board' id='2'></Board>
    // </>, document.getElementById("containers"));
    // render the check answer button so that users can check their answers
    ReactDOM.render(<button onClick={this.checkAns}>check answer</button>, document.getElementById("numbers"));
  };
  // checkAns() {
  //   // randomly choosing if they're right or wrong for now
  //   let random = Math.random() * 2;
  //   if (random === 1) {
  //     ReactDOM.render(<text>you're correct!</text>, document.getElementById("feedback"));
  //   } else {
  //     ReactDOM.render(<text>you're wrong!</text>, document.getElementById("feedback"));
  //   }
  // };

  // getPrev() {
  //   let xReq = new XMLHttpRequest();              // creating an XMLHttp Request object
  //   xReq.onreadystatechange = showNext;              // when the state changes, display the generated numbers
  //   // first argument is HTTP method, second is URL to send req to, third is syn/async spec (true = async)
  //   xReq.open('GET', '/check-answer', true);   // submit request to generate 10 numbers from 1-20
  //   // send request
  //   xReq.send();
  // };

  // getNext() {
  //   let xReq = new XMLHttpRequest();              // creating an XMLHttp Request object
  //   xReq.onreadystatechange = showNext;              // when the state changes, display the generated numbers
  //   // first argument is HTTP method, second is URL to send req to, third is syn/async spec (true = async)
  //   xReq.open('GET', '/get-next', true);   // submit request to generate 10 numbers from 1-20
  //   // send request
  //   xReq.send();
  // };

  render() {
    return (
      <div id="main">
        <h1>Level Two</h1>
        <button onClick={ ()=>{ this.decrStep(); this.getContainers() } }>back</button>
        <button onClick={this.getButtonNumbers}>Generate 10 Numbers</button>
        <button onClick={()=>{ this.incrStep(); this.getContainers() }}>next</button>
        <div className="flexbox"> <div id="numbers"></div>  </div>
        <div className="flexbox"> <div id="containers"></div> </div>
        <div id="step"></div>
        <div id="check"></div>
        <div id="feedback"></div>
      </div>
    );
  }
}


// // getting the question stem
// function showNext() {
//   let stepDiv = document.getElementById("step");
//   stepDiv.innerHTML = '<text>' + this.responseText + '</text><br><br><button href="/levelTwo/">click to restart</button>';
// }

