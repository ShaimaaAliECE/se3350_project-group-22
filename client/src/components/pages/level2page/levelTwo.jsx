import React, { Children } from "react";
import ReactDOM from 'react-dom';
import RandomNumbersArray from "../../../randomNumberGenerator";
import Number from '../../Number';
import Board from "../../Board.js";
import './level2.css';
import { steps } from "./steps";
import { useDrag } from 'react-dnd';

// declare var to keep track of the step we're on, and start on step one.
let count = 0;
//let countmerge = 0;
//let buttons = [];
let userValues = [];    // array to hold the value of the numbers the user input in each box, in order from left to right
let numNumbers = [];    // array to hold the number of numbers in each box, in order from left to right
let correctSplit;
let correctOrder;

//declare a variable to keep track of the array.
let numOfArray = [];
// let answerArray = "";

//verify split method comments
//keeping track of the containers
//var userContainerList = [];
//keeping track of the current values in the containers
//var currentValues = [];

//keeping track of the num of correct the user gets
//var countTrue = 0;

//var index = 0;
//console.log("generate array button value: " + numOfArray);

//console.log("num of containers: " + currentContainers);

//getting a collection of all the boardcontainers currently on the screen

//disregard dont delete
//create variable names for each container present
// for(var m = 0; m < currentContainers; m++){
//   //creating an array to put current values inside the each of the userContainerList
//   userContainerList[m] = [];
// }

// array of the users values
//console.log("USER - ARRAY: "+ userValues); 
// array of how many numbers the user put in each box, ordered from left to right
//console.log("USER - # boxes: " + numNumbers); 

// what the answer is supposed to be 
//console.log("step: " + currentStep);
// after step 4, starts merging, so the array needs to be in order
//console.log("ANS - ARRAY: " + numOfArray);

// for the answer to be right, then numNumbers needs to be the same as numOfArray
// also, we need to find the number of numbers that should be in each box, depending on which step
//console.log("number of containers: " + currentContainers);
// let correctNoCont = [];  // array to hold the correct number of numbers needed in each container depending on the step

// // divide number of numbers by number of containers to get how many are supposed to be in each box


// if modulus is 0
// max-min should give 0, otherwise the user is wrong

// if modulus is not 0, then it wasn't a whole number
// so max-min should give 1, otherwise the user is wrong


// // if the modulus is 0, then it's a whole number, so push that number into the array for as many times as there are containers on the screen
// if (decimalCheck === 0) {
//   for (let i=0; i<currentContainers;i++) {
//       correctNoCont.push(numsInCont);
//   }
//   console.log("ANS - # boxes: " + correctNoCont);

//   // given there's 10 numbers, if the difference between max and min is more than 1, then the answer must not be correct (since numbers have to be split evenly)
// } else {

// }

// //loop through all the containers to check 
// for(var b = 0; b < currentContainers; b++){
//   for(var c = 0; c < steps[currentStep-1].numInCon[b]; c++){ //in the js file for steps have ex under step 1 numberscontained : [5,5]
//     if(boardContainers[b].children[c] != steps[currentStep-1].numInCon[b]){
//      // console.log("BITCHHH you wrong afff");
//       this.setState({feedback : "BITCHHH you wrong afff"});
//     }
//   //checking if the array stored is the same as the users array.
//     if(numOfArray[index] == boardContainers[b].children[c].id){
//       countTrue++;
//       index++;
//     }
//   }
// }

// //set index to 0
// index = 0;

// //if counttrue equals 10 that means user got everything correct
// if(countTrue == 10){
//   //render the feedback text
//   this.setState({feedback : "Yay you got it right"});
// }
//ReactDOM.render(<><text>Yay you got it right! Click next.</text></>, document.getElementById("feedback"));
// }else{
//   ReactDOM.render(<><text>You got it wrong my dude</text></>, document.getElementById("feedback"));
// }

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
export default class LevelTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      clicked: false,
      step: 0,
      buttons: [],
      containers: [],
      previousContainer: [],
      //correctSplit: null,
      answer: ""
    };

    this.verify = this.verify.bind(this);
    this.verifyMerge = this.verifyMerge.bind(this);
    this.incrStep = this.incrStep.bind(this);
    this.getButtonNumbers = this.getButtonNumbers.bind(this);
  }

  verifySplit() {
    console.log("Verify Split");

    // // ---------------------------   getting user input  ---------------------------

    // //check what step the user is on
    // var currentStep = this.state.step;

    // //check how many containers there are for the current step
    // var currentContainers = steps[currentStep].container;

    // var userValues = [];    // array to hold the value of the numbers the user input in each box, in order from left to right
    // var numNumbers = [];    // array to hold the number of numbers in each box, in order from left to right

    // //getting all the board elements in the bottom container
    // let bottomContainer = document.getElementsByClassName('nextcontainers');
    // var boardContainers = bottomContainer[0].children;
    // //var boardContainers = document.getElementsByClassName('board');
    // console.log(boardContainers);
    // //loop through the current containers to find what numbers are in the conatiner at index k
    // for (var k = 0; k < currentContainers; k++) {
    //   //looping through however many numbers are supposed to be in the currentContainers at index k
    //   for (var h = 0; h < boardContainers[k].childElementCount; h++) {
    //     //push the numbers in the currentValues by looking at boardcontainer at index k and the children associated with it
    //     userValues.push(boardContainers[k].children[h].id);

    //   }
    //   // push the number of children (i.e. number of numbers) that each box has into the array
    //   numNumbers.push(boardContainers[k].childElementCount);
    // }
    var currentContainers = steps[this.state.step].container;
    this.getUserInput();
    // -----------------------  check correct split  ------------------------
    let correctSplit;
    let numsInCont;
    numsInCont = 10 / currentContainers;

    let difference;
    difference = Math.max(...numNumbers) - Math.min(...numNumbers);

    // case 1: if the modulus is 0, then it's a whole number, so each box has an equal amount of numbers in it
    // thus, the difference in the max and min should be a 0
    // case 2: if it's not a whole number, then the difference should be 1, because the user has to sort numbers as evenly as possible
    // if either case 1 or case 2 is true, then the user is correct in splitting their numbers
    if ((numsInCont % 1 === 0 && difference === 0) || (numsInCont % 1 !== 0 && difference === 1)) {
      correctSplit = true;
      // this.setState({correctSplit: true});
    } else {    // otherwise, the user is incorrect
      correctSplit = false;
      // this.setState({correctSplit: false});
    }
    //console.log("was split evenly: " + correctSplit);


    // ---------------------   check correct order   -----------------------------
    //let correctOrder;
    let userString, ansString;
    // ansString = "";
    userString = userValues.toString();
    //console.log("current step: " + currentStep);

    // if it's not after the merging step, answer string is unsorted array 
    
    ansString = numOfArray.toString();
    console.log(ansString);
      // if it's after the merging step, the answer string is the sorted array
  
    // else if (currentStep >= 4) {
    //   // // sort the unsorted array before adding it to the string
    //   // ansString = numOfArray.sort((a, b) => a - b).toString();
    //   // console.log(ansString);
    // }
    if (userString === ansString) {
      correctOrder = true;
      this.setState({ answer: ansString })
    } else {
      correctOrder = false;
    }
    //console.log("was in order: " + correctOrder);

    // ------------------------  user feedback  ------------------------
    // if the user didn't drag all the numbers
    if (userValues.length < 10) {
      this.setState({ feedback: "please finish ordering all numbers" });
      // if one of the boxes contains >1 more numbers than any of the other boxes
    } else {
      if (!correctSplit && !correctOrder) {
        this.setState({ feedback: "please try again." });
      } else if (!correctOrder && correctSplit) {
        this.setState({ feedback: "the numbers are not in the correct order. please try again." });
      } else if (correctSplit && !correctOrder) {
        this.setState({ feedback: "the numbers are in the correct order but they need to be split as evenly as possible. please try again." });
      } else if (correctOrder && correctSplit) {
        this.setState({ feedback: "correct bae!!!! click next to go to the next step" });
      };
    }
  }

  getContainers() {
    // render and display the steps (written here to allow reusability)
    ReactDOM.render(<><text>Step {count}: {steps[count - 1].step}</text> </>, document.getElementById("step"));
    // figure out the number of containers needed for the current step number
    let numConts = steps[count - 1].container;
    console.log("current container : " + numConts);


    //getting previous stuff
    if (count > 1) {
      //figure out the number of containers needed from the previous step
      let prevNumConts = steps[count - 2].container;
      //console.log("prev container : " + prevNumConts);
      // array to hold number of containers
      let container = [];
      for (let i = 0; i < prevNumConts; i++) {
        container.push(<div id={i} className="board" ></div>);
      }

      this.setState({ previousContainer: container })

    }
    //checking how many containers are needed to push on top of the current containers

    // array to hold number of containers
    let container = [];

    for (let i = 0; i < numConts; i++) {
      container.push(<Board id={i} className="board" ></Board>);
    }
    this.setState({ containers: container });

    //for the current container

    //for the next container
    //set the state of containers to the container array

  }

  //----------- handling the user clicking the next button----------------------
  incrStep() {
    // if it's not the last step, increase the count variable
    if (count < 9) {
      count++;
      this.setState({ step: count - 1 }, () => {
        console.log(this.state.step);
      });
      this.setState({ feedback: " " });
      if (count > 2) {
        var currentStep = this.state.step;

        //gwt the num of containers in the previous step
        var prevContainers = steps[count - 2].container;

        //show the top container
        console.log(this.state.containers);
        console.log("prev cont: " + prevContainers);

        //get the elements in the top

        // var boardContainers = topContainer[0].children;


        // //gettting the container then getting the children which is the board then to get the board children you would do 
        // let button = [];

        // for (let num of numOfArray) {
        // button.push(<Number id={num} className="number" draggable="true">{num}</Number>);
        // }
        // console.log(button);
        // this.setState({ previousContainer:button});
        // let topContainer = document.getElementById('containerss').innerHTML = this.setState({prevContainers:button})
        //console.log(topContainer)

      }
    }
  }

  // handling the user clicking the back button
  decrStep() {
    // if it's not the first step, decrease the count variable
    if (count > 1) {
      count--;
      this.setState({ step: count - 1 }, () => {
        console.log(this.state.step);
      });
      this.setState({ feedback: " " });
    }
  }

  getButtonNumbers() {

    //set clicked to true so the buttons will show up
    this.setState({ clicked: true });

    //create an array of random number
    numOfArray = [];

    const randomNum = RandomNumbersArray(10, 20, 1);
    //setting the set stat of numOfArray to whatever randomNum array is so we have it on hand
    for (var i = 0; i < randomNum.length; i++) {
      numOfArray.push(randomNum[i]);
    }

    Array.from(numOfArray)
    //remove comment
    //return the button with the number in the array
    let button = [];

    for (let num of randomNum) {
      button.push(<Number id={num} className="number" draggable="true">{num}</Number>);
    }

    let numstr = numOfArray.toString();
    this.setState({ answer: numstr });
    this.setState({ buttons: button });
    console.log("current array when generated: " + numOfArray);
    //console.log("merged array" + mergeSort(numOfArray));
    // render the Number button components in the div called numbers
    //ReactDOM.render(<></>, document.getElementById("numbers"));
    // ReactDOM.render(<>
    //   <Board className='board' id='1'></Board>
    //   <Board className='board' id='2'></Board>
    // </>, document.getElementById("containers"));
    // render the check answer button so that users can check their answers
    ReactDOM.render(<button onClick={this.verify}>Verify</button>, document.getElementById("verify"));
  };

  getUserInput() {
    //check what step the user is on
    var currentStep = this.state.step;

    //check how many containers there are for the current step
    var currentContainers = steps[currentStep].container;

    userValues = [];    // array to hold the value of the numbers the user input in each box, in order from left to right
    numNumbers = [];    // array to hold the number of numbers in each box, in order from left to right

    //getting all the board elements in the bottom container
    let bottomContainer = document.getElementsByClassName('nextcontainers');
    var boardContainers = bottomContainer[0].children;
    console.log(boardContainers);
    //loop through the current containers to find what numbers are in the conatiner at index k
    for (var k = 0; k < currentContainers; k++) {
      //looping through however many numbers are supposed to be in the currentContainers at index k
      for (var h = 0; h < boardContainers[k].childElementCount; h++) {
        //push the numbers in the currentValues by looking at boardcontainer at index k and the children associated with it
        userValues.push(boardContainers[k].children[h].id);

      }

      console.log("user values" + userValues);
      // push the number of children (i.e. number of numbers) that each box has into the array
      numNumbers.push(boardContainers[k].childElementCount);
      console.log("num Numbers" + numNumbers);
    }
  }


   // ---------------------------------------------  check correct split  -------------------------------------------
  

  

  verifyMerge() {
    console.log("Merge verify");
    var index = 0;
    // ---------------------------   getting user input  ---------------------------
    this.getUserInput();
    console.log("user values: inside merge" + userValues);
    console.log("num Numbers values: inside merge" + numNumbers);

    // // -----------------------  check correct split  ------------------------
    //check how many containers there are for the current step
    var currentContainers = steps[this.state.step].container;
    // -----------------------  check correct split  ------------------------
    let correctSplit;
    let numsInCont;
    numsInCont = 10 / currentContainers;

    let difference;
    difference = Math.max(...numNumbers) - Math.min(...numNumbers);

    // case 1: if the modulus is 0, then it's a whole number, so each box has an equal amount of numbers in it
    // thus, the difference in the max and min should be a 0
    // case 2: if it's not a whole number, then the difference should be 1, because the user has to sort numbers as evenly as possible
    // if either case 1 or case 2 is true, then the user is correct in splitting their numbers
    if ((numsInCont % 1 === 0 && difference === 0) || (numsInCont % 1 !== 0 && difference === 1)) {
      //return true;
      correctSplit = true;
      console.log("true the number in the containers: " + numsInCont);
    } else {    // otherwise, the user is incorrect
      correctSplit = false;
      console.log("false the number in the containers: " + numsInCont);
    }
    
    //------------------------ check order ----------------------------------
    let userArray = [];
    let answerArray = [];
    //looping through each container and seeing the elements inside the container
    for (var u = 0; u < numNumbers.length; u++) {
      for (var t = 0; t < numNumbers[u]; t++) {
        // console.log("inside the " + u + "first container there are these user value: " + userValues[index]);
        userArray.push(userValues[index]);
        answerArray.push(numOfArray[index]);
        index++;
      }
      //-----------------check order-----------------
      // let correctOrder;
      let userString, ansString;
      userString = userArray.toString();
      ansString = answerArray.sort((a, b) => a - b).toString();

      console.log("User Array: " + userString);
      console.log("answer Array: " + ansString);


      if (userString === ansString) {
        correctOrder = true;
        console.log("yay correct order");
        //this.setState({ answer: ansString })
      } else {
        correctOrder = false;
        console.log("booooo not correct order");
      }

      // ------------------------  user feedback  ------------------------
      // this.getUserFeedback();
      // console.log("split " + this.state.correctSplit + " order " + correctOrder);
      // if the user didn't drag all the numbers
      if (userValues.length < 10) {
        this.setState({ feedback: "please finish ordering all numbers" });
        // if one of the boxes contains >1 more numbers than any of the other boxes
      } else {
        if (!correctSplit && !correctOrder) {
          this.setState({ feedback: "please try again." });
        } else if (!correctOrder && correctSplit) {
          this.setState({ feedback: "the numbers are not in the correct order. please try again." });
        } else if (correctSplit && !correctOrder) {
          this.setState({ feedback: "the numbers are in the correct order but they need to be split as evenly as possible. please try again." });
        } else if (correctOrder && correctSplit) {
          this.setState({ feedback: "correct bae!!!! click next to go to the next step" });
        };
      }
      userArray = [];
      answerArray = [];
    }
    index = 0;
  }

  //---------------------------------general verify function-------------------------------
  verify() {
    //get the current step
    var currentStep = this.state.step;

    //check if the current step is below 4, if so call verify split function, but if not call verify merge function
    if (currentStep < 4) {
      this.verifySplit();

    } else if (currentStep >= 4) {
      this.verifyMerge();
    }
  }

  render() {
    return (
      <div id="main">
        <h1>Level Two</h1>
        <button onClick={() => { this.decrStep(); this.getContainers() }}>back</button>
        <button onClick={this.getButtonNumbers}>Generate 10 Numbers</button>
        <button onClick={() => { this.incrStep(); this.getContainers() }}>next</button>
        <div className="flexbox">
          <div id="fixednumbers">{this.state.clicked ? this.state.answer : null}</div>
        </div>
        <div className="flexbox">
          <div id="numbers">{this.state.clicked ? this.state.buttons : null}</div>
        </div>
        <div className="flexbox">
          <div className="containers" id="containerss">{this.state.step > 0 ? this.state.previousContainer : null}</div>
        </div>
        <div className="flexbox">
          <div className="nextcontainers" id="containers">{this.state.step > 0 ? this.state.containers : this.state.step == 0 ? this.state.containers : null}</div>
        </div>

        <div id="step"></div>
        <div id="verify"></div>
        <div id="feedback">{this.state.feedback}</div>
      </div>
    );
  }
}
// // getting the question stem
// function showNext() {
//   let stepDiv = document.getElementById("step");
//   stepDiv.innerHTML = '<text>' + this.responseText + '</text><br><br><button href="/levelTwo/">click to restart</button>';
// }

