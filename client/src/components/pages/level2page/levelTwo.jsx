import React from "react";
import ReactDOM from 'react-dom';
import RandomNumbersArray from "../../../randomNumberGenerator";
import Number from '../../Number';
import Board from "../../Board.js";
import './level2.css';
import {useDrag} from 'react-dnd';
import { steps } from "./steps";

// declare var to keep track of the step we're on, and start on step one.
let count = 0; 

//declare a variable to keep track of the array.
let numOfArray = [];
export default class LevelTwo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      verify:false,
      step:0,
      containers:0
    };

    this.verify = this.verify.bind(this);
    this.incrStep = this.incrStep.bind(this);
    this.getButtonNumbers = this.getButtonNumbers.bind(this);
  }
  verify(){
    //check what step the user is on
    var currentStep = this.state.step;
    
    var userContainerList = [];
    var currentValues = [];
    var countTrue = 0;
    var index = 0;
    console.log(numOfArray);


    //check how many containers is there for the current step
    var currentContainers = steps[currentStep-1].container;
    console.log("num of containers" + currentContainers);

    //check the numbers on the container currenlty on the screen
    var boardContainers = document.getElementsByClassName('board');

    //create variable names for each container present
    for(var m = 0; m < currentContainers; m++){
      userContainerList[m] = [];
    }
    
    //loop through the current containers to find what numbers are in what container
    for(var k = 0; k < currentContainers; k++){
      for(var h = 0; h < 5; h++){ //in the js file for steps have ex under step 1 numberscontained : [5,5]
        //push the numbers in the currentValues by looking at boardcontainer at index k and the childrens associated with it.
        currentValues.push(boardContainers[k].children[h].id);
      }
      //add the values from above to the current user container list at index k
      userContainerList[k] = currentValues;
      //set current values back to nothing.
      currentValues = [];
    }

    //check if the numbers in the first container the same and the answer
    for(var b = 0; b < currentContainers; b++){
      for(var c = 0; c < 5; c++){ //in the js file for steps have ex under step 1 numberscontained : [5,5]
      //checking if the array stored is the same as the users array.
        if(numOfArray[index] == userContainerList[b][c]){
          countTrue++;
          index++;
        }
      }
    }

    //set index to 0
    index = 0;

    //if counttrue equals 10 that means user got everything correct
    if(countTrue == 10){
      console.log("Yay you are correct");
    }else{
      console.log("my dude you wrong!");
    }
  }

  incrStep() {
    if (count < 9){
      count++;
      this.setState({ step :  count }, () => {
        console.log(this.state.step);
      });
    }
    ReactDOM.render(<><text>step: </text>{count}</>, document.getElementById("step"));
  }

  decrStep(){
    if (count > 1){
      count--;
    }
    ReactDOM.render(<><text>step: </text>{count}</>, document.getElementById("step"));
  }

  getButtonNumbers() {
    //create an array of random number
    numOfArray = [];
    const randomNum = RandomNumbersArray(10, 20, 1);
    //setting the set stat of numOfArray to whatever randomNum array is so we have it on hand
    for(var i =0; i < randomNum.length; i++){
      numOfArray.push(randomNum[i]);
    }

    //remove comment
    //return the button with the number in the array
    let buttons = [];
    for (let num of randomNum) {
      buttons.push(<Number id={num} className="number" draggable="true"></Number>);
    }
    
    console.log(numOfArray);
    // render the Number button components in the div called numbers
    ReactDOM.render(<>{buttons}</>, document.getElementById("numbers"));
    ReactDOM.render(<>
      <Board className='board' id='1'></Board>
      <Board className='board' id='2'></Board>
    </>, document.getElementById("containers"));
    // render the check answer button so that users can check their answers
    // ReactDOM.render(<button onClick={this.checkAns}>check answer</button>, document.getElementById("numbers"));
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
        <button onClick={this.decrStep}>back</button>
        <button onClick={this.getButtonNumbers}>Generate 10 Numbers</button>
        <button onClick={this.incrStep}>next</button>
        <div className="flexbox"> <div id="numbers"></div>  </div>
        <div className="flexbox"> <div id="containers"></div> </div>
        <div id="step"></div>
        <button onClick={this.verify}>Verify</button>
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

