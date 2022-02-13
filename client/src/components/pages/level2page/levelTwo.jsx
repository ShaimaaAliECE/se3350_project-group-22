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

//declare a variable to keep track of the array.
let numOfArray = [];
export default class LevelTwo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      verify:false,
      step:0
    };

    this.verify = this.verify.bind(this);
    this.incrStep = this.incrStep.bind(this);
    this.getButtonNumbers = this.getButtonNumbers.bind(this);
  }

  verify(){
    //check what step the user is on
    var currentStep = this.state.step;
    
    // //keeping track of the containers
    // var userContainerList = [];
    // //keeping track of the current values in the containers
    // var currentValues = [];

    //keeping track of the num of correct the user gets
    var countTrue = 0;

    var index = 0;
    //console.log("generate array button value: " + numOfArray);

    //check how many containers is there for the current step
    var currentContainers = steps[currentStep-1].container;
    console.log("num of containers: " + currentContainers);

    //getting a collection of all the boardcontainers currently on the screen
    var boardContainers = document.getElementsByClassName('board');

    
    //disregard dont delete
    // //create variable names for each container present
    // for(var m = 0; m < currentContainers; m++){
    //   //creating an array to put current values inside the each of the userContainerList
    //   userContainerList[m] = [];
    // }
    //loop through the current containers to find what numbers are in the conatiner at index k
    // for(var k = 0; k < currentContainers; k++){
    //   //looping through however many numbers are supposed to be in the currentContainers at index k.
    //   for(var h = 0; h < steps[currentStep-1].numInCon[k]; h++){ //in the js file for steps have ex under step 1 numberscontained : [5,5] so it would loop through the 5 numbers then the second container would loop through 5 numbers again.
    //     //push the numbers in the currentValues by looking at boardcontainer at index k and the childrens associated with it.
    //     currentValues.push(boardContainers[k].children[h].id);
    //   }
    //   //add the values from above to the current user container list at index k
    //   userContainerList[k] = currentValues;
    //   //set current values back to nothing.
    //   currentValues = [];

    // }

    //loop through all the containers to check 
    for(var b = 0; b < currentContainers; b++){
      for(var c = 0; c < steps[currentStep-1].numInCon[b]; c++){ //in the js file for steps have ex under step 1 numberscontained : [5,5]
        if(boardContainers[b].children[c] != steps[currentStep-1].numInCon[b]){
          console.log("BITCHHH you wrong afff");
        }
      //checking if the array stored is the same as the users array.
        if(numOfArray[index] == boardContainers[b].children[c].id){
          countTrue++;
          index++;
        }
      }
    }

    //set index to 0
    index = 0;

    //if counttrue equals 10 that means user got everything correct
    if(countTrue == 10){
      //render the feedback text
      ReactDOM.render(<><text>Yay you got it right! Click next.</text></>, document.getElementById("feedback"));
    }else{
      ReactDOM.render(<><text>You got it wrong my dude</text></>, document.getElementById("feedback"));
    }
  }

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
    if (count < 8){
      count++;
      this.setState({ step :  count }, () => {
              console.log(this.state.step);
            });
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
    // ReactDOM.render(<>
    //   <Board className='board' id='1'></Board>
    //   <Board className='board' id='2'></Board>
    // </>, document.getElementById("containers"));
    // render the check answer button so that users can check their answers
    ReactDOM.render(<button onClick={this.verify}>Verify</button>, document.getElementById("verify"));
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
        <div id="verify"></div>
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

