import React, { Children } from "react";
import ReactDOM from 'react-dom';
import RandomNumbersArray from "../../../randomNumberGenerator";
import incorrectSfx from "../../../sounds/wrong.mp3";
import correctSfx from "../../../sounds/correct.mp3";
import Number from '../../Number';
import Board from "../../Board.js";
import './level2.css';
import { steps } from "./steps";
import { Route, Navigate, Link } from "react-router-dom";
import { useDrag } from 'react-dnd';
//import {mergeSortAlgorithm, mergeArray, getLArray} from './mergeSortLevel2';

// declare var to keep track of the step we're on, and start on step one.
let count = 0;
let mergeCount = 0;
let leftArray = [];
let firstHalf = [];
let secondHalf = [];
let mergedArray = "";
let numOfArrayHolder = [];
let rightArr = [];
let userValues = [];    // array to hold the value of the numbers the user input in each box, in order from left to right
let numNumbers = [];    // array to hold the number of numbers in each box, in order from left to right
let correctOrder;

//declare a variable to keep track of the array.
let numOfArray = [];

//keeping track of users incorrect attempts
let incorrectCount = 0;
export default class LevelTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      clicked: false,
      step: 0,
      buttons: [],
      containers: [],
      containers0: [],
      containers1: [],
      containers2: [],
      containers3: [],
      containers4: [],
      containers5: [],
      containers6: [],
      containers7: [],
      containers8: [],
      containers9: [],
      containers10: [],
      containers11: [],
      containers12: [],
      containers13: [],
      containers14: [],
      containers15: [],
      containers16: [],
      containers17: [],
      incorrectAttempt: "",
      incorrectSound: new Audio(incorrectSfx),
      correctSound: new Audio(correctSfx),
      previousContainer: [],
      //correctSplit: null,
      answer: "",
      // for timer
      time: {},
      timerIsActive: false,
      seconds: 0,
      lastActive: 0,
      exitLevel: false
    };

    this.verify = this.verify.bind(this);
    this.verifyMerge = this.verifyMerge.bind(this);
    this.incrStep = this.incrStep.bind(this);
    this.getButtonNumbers = this.getButtonNumbers.bind(this);

    // for timer
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countUp = this.countUp.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  // convert seconds to time
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let minute_divisor = secs % (60 * 60);
    let minutes = Math.floor(minute_divisor / 60);

    let seconds_divisor = minute_divisor % 60;
    let seconds = Math.ceil(seconds_divisor);
    // function to add the leading zeros
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  // initialize timer
  componentDidMount() {
    let initialTime = this.secondsToTime(this.state.seconds);
    this.setState({ time: initialTime });
  }

  // start timer
  startTimer() {
    if (!this.state.timerIsActive) {
      this.setState({ timerIsActive: true });
      this.timer = setInterval(this.countUp, 1000);
    }
  }

  // count up
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

  clearTimer() {
    clearInterval(this.timer);
  }

  // log the time user was last active at
  setLastActive() {
    this.setState({ lastActive: this.state.seconds });
  }

  submitResult = e => {        
      e.preventDefault();
      return fetch('/submitTime', {
      method: 'POST',      
      headers: { 'Content-Type': 'application/json' },   
      body: JSON.stringify({userName: "Andrew", timeRequired: this.state.seconds,
      checkCompletion: true,}), 
    });
    
    //const body = await response.text();
    //alert (body);
    //this.setState({ responseToPost: body });    
  };
  

  verifySplit() {

    var arrAns = [];
    console.log("Verify Split");

    //get the current containers
    var currentContainers = steps[this.state.step].container;
    //get the user input
    this.getUserInput();
    // -----------------------  check correct split  ------------------------
    let correctSplit;
    let numsInCont;

    //find the total num in the current step
    let totalNum = 0;
    for (var p = 0; p < steps[this.state.step].numInCon.length; p++) {
      totalNum = totalNum + steps[this.state.step].numInCon[p];
    }
    console.log("totol Num: " + totalNum);
    numsInCont = totalNum / currentContainers;
    console.log("the number that was generated: " + numOfArray);

    let difference;
    difference = Math.max(...numNumbers) - Math.min(...numNumbers);

    //------------------checking if split is correct--------------------
    // case 1: if the modulus is 0, then it's a whole number, so each box has an equal amount of numbers in it
    // thus, the difference in the max and min should be a 0
    // case 2: if it's not a whole number, then the difference should be 1, because the user has to sort numbers as evenly as possible
    // if either case 1 or case 2 is true, then the user is correct in splitting their numbers
    if ((numsInCont % 1 === 0 && difference === 0) || (numsInCont % 1 !== 0 && difference === 1)) {
      correctSplit = true;
      console.log(correctSplit);
      // this.setState({correctSplit: true});
    } else {    // otherwise, the user is incorrect
      correctSplit = false;
      console.log(correctSplit);
      // this.setState({correctSplit: false});
    }
    //console.log("was split evenly: " + correctSplit);

    // ---------------------   check correct order   -----------------------------
    //if the current step is more than step 2 and less than 10 then call mergse sort algorithm for the first half
    //if the current step is step 11 and more then call merge sort algorithm for the second half
    let ansString = [];
    console.log("the count is" + count);
    if ((count > 2) && (count < 10)) {
      for (var k = 0; k < 5; k++) {
        arrAns.push(numOfArray[k]);
        console.log("answer at index " + k + " : " + arrAns[k]);
      }
      //cut the array in half
      mergeSortAlgorithm(arrAns, 0, 4, compareLArray, compareRArray, mergeCount, leftArray, rightArr);
      //check which step you are on using count - 1 then according the the step, get the left array or the right array for the answer
      switch (count - 1) {
        case 2:
        case 3:
          ansString = getLArray(leftArray, (count - 3));
          break;
        case 6:
          ansString = getRArray(rightArr, (count - 5));
          break;
        default:
      }
      ansString = ansString.toString();
      console.log("first if");
    } else if ((count > 10)) {
      //cut the array in half but get the second half ( 10 equals the array size)
      // get rid of the arrAns in the first half
      for (var j = 0; j < 5; j++) {
        arrAns.pop();
      }
      for (var h = 5; h < 10; h++) {
        arrAns.push(numOfArray[h]);
      }

      mergeSortAlgorithm(arrAns, 0, 4, compareLArray, compareRArray, mergeCount, leftArray, rightArr);
      //check which step you are on using count - 1 then according the the step, get the left array or the right array for the answer
      switch (count - 1) {
        case 10:
        case 11:
          ansString = getLArray(leftArray, (count + 1));
          break;
        case 14:
          ansString = getRArray(rightArr, (count - 1));
          break;
        default:
      }
      console.log("second if");
      ansString = ansString.toString();
    }
    else if ((count == 1) || (count == 2)) {
      for (var k = 0; k < totalNum; k++) {
        ansString.push(numOfArray[k]);
        console.log("answer at index " + k + " : " + ansString[k]);
      }
      ansString = ansString.toString();
      console.log("third if");
    } else {
      for (var j = 5; j < 10; j++) {
        ansString.push(numOfArray[j]);
        console.log("answer at index " + j + " : " + ansString[j]);
      }
      console.log("fourth if");
      ansString = ansString.toString();
    }
    //let correctOrder;
    let userString;

    //ansString = getLArray(rightArr, (count - 1)).toString();
    userString = userValues.toString();
    console.log("user Str: " + userString);

    // if it's not after the merging step, answer string is unsorted array 

    // ansString = numOfArray.toString();
    console.log(" answer:" + ansString);
    // if it's after the merging step, the answer string is the sorted array

    // else if (currentStep >= 4) {
    //   // // sort the unsorted array before adding it to the string
    //   // ansString = numOfArray.sort((a, b) => a - b).toString();
    //   // console.log(ansString);
    // }
    if (userString === ansString) {
      correctOrder = true;
      //this.setState({ answer: ansString })
    } else {
      correctOrder = false;
    }

    console.log("total num" + totalNum);
    console.log("was in order: " + ansString);

    // ------------------------  user feedback  ------------------------
    // if the user didn't drag all the numbers
    if (userValues.length < totalNum) {
      document.getElementById('feedback').style.backgroundColor = 'red';
      // Play incorrect sound if user response is wrong
      this.state.correctSound.pause();
      this.state.incorrectSound.play();
      this.setState({ feedback: "please finish ordering all numbers" });
      //incrementing incorrect count
      incorrectCount++;
      //set the incorrect attempt
      this.setState({ incorrectAttempt: incorrectCount });
      // if one of the boxes contains >1 more numbers than any of the other boxes
    } else {
      if (!correctSplit && !correctOrder) {
        document.getElementById('feedback').style.backgroundColor = 'red';
        // Play incorrect sound if user response is wrong
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
        this.setState({ feedback: "please try again." });
        //incrementing incorrect count
        incorrectCount++;
        //set the incorrect attempt
        this.setState({ incorrectAttempt: incorrectCount });
      } else if (!correctOrder && correctSplit) {
        document.getElementById('feedback').style.backgroundColor = 'red';
        // Play incorrect sound if user response is wrong
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
        this.setState({ feedback: "the numbers are not in the correct order. please try again." });
      } else if (correctOrder && !correctSplit) {
        document.getElementById('feedback').style.backgroundColor = 'red';
        // Play incorrect sound if user response is wrong
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
        this.setState({ feedback: "the numbers are not split correctly. please try again." });
        //incrementing incorrect count
        incorrectCount++;
        //set the incorrect attempt
        this.setState({ incorrectAttempt: incorrectCount });
      } else if (correctSplit && !correctOrder) {
        document.getElementById('feedback').style.backgroundColor = 'red';
        // Play incorrect sound if user response is wrong
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
        this.setState({ feedback: "the numbers are in the correct order but they need to be split as evenly as possible. please try again." });
        //incrementing incorrect count
        incorrectCount++;
        //set the incorrect attempt
        this.setState({ incorrectAttempt: incorrectCount });
      } else if (correctOrder && correctSplit) {
        document.getElementById('feedback').style.backgroundColor = 'green';
        document.getElementById('feedback').style.color = 'white';
        // Play correct sound if user response is right
        this.state.incorrectSound.pause();
        this.state.correctSound.play();
        this.setState({ feedback: "correct!!!! click next to go to the next step" });
      };
    }
  }

  getContainers() {
    // render and display the steps (written here to allow reusability)
    ReactDOM.render(<><text>Step {count}: {steps[count - 1].step}</text> </>, document.getElementById("step"));
    // figure out the number of containers needed for the current step number
    let numConts = steps[count - 1].container;
    console.log("current container : " + numConts);

    //creating an id holder to avoid conflict
    let idHolder;
    //getting previous stuff
    if (count > 1) {
      //figure out the number of containers needed from the previous step
      let prevNumConts = steps[count - 2].container;
      //console.log("prev container : " + prevNumConts);
      // array to hold number of containers
      let container = [];
      for (let i = 0; i < prevNumConts; i++) {
        idHolder = i * 30; //literally you can do anything just not numbers from (1-10 or maybe 1-20 not sure)
        container.push(<div id={idHolder} className="board" ></div>);
      }
      this.setState({ previousContainer: container })
    }
    //checking how many containers are needed to push on top of the current containers
    // array to hold number of containers
    let container = [];

    for (let i = 0; i < numConts; i++) {
      idHolder = i * 30;  //literally you can do anything just not numbers from (1-10 or maybe 1-20 not sure)
      container.push(<Board id={idHolder} className="board" ></Board>);
    }

    switch (steps[count - 1].stepID) {
      case 1:
        this.setState({ containers0: container });
        break;
      case 2:
        this.setState({ containers1: container });
        break;
      case 3:
        this.setState({ containers2: container });
        break;
      case 4:
        this.setState({ containers3: container });
        break;
      case 5:
        this.setState({ containers4: container });
        break;
      case 6:
        this.setState({ containers5: container });
        break;
      case 7:
        this.setState({ containers6: container });
        break;
      case 8:
        this.setState({ containers7: container });
        break;
      case 9:
        this.setState({ containers8: container });
        break;
      case 10:
        this.setState({ containers9: container });
        break;
      case 11:
        this.setState({ containers10: container });
        break;
      case 12:
        this.setState({ containers11: container });
        break;
      case 13:
        this.setState({ containers12: container });
        break;
      case 14:
        this.setState({ containers13: container });
        break;
      case 15:
        this.setState({ containers14: container });
        break;
      case 16:
        this.setState({ containers15: container });
        break;
      case 17:
        this.setState({ containers16: container });
        break;
      case 18:
        this.setState({ containers17: container });
        break;
      default:
    }
  }

  //----------- handling the user clicking the next button----------------------
  incrStep() {
    // if it's not the last step, increase the count variable
    if (count < 18) {
      let con = "container";
      let conPointer;
      count++;
      this.setState({ step: count - 1 }, () => {
        //console.log(this.state.step);
        conPointer = con + this.state.step;
      });

      //change the style to block to show the div in the current step container
      Array.prototype.forEach.call(document.getElementsByClassName('flexbox'), function (element) {
        element.style.display = 'flex';
      });

      document.getElementById('feedback').style.backgroundColor = "white";

      this.setState({ feedback: " " });
      if (count > 1) {
        var currentStep = this.state.step;
        //gwt the num of containers in the previous step
        var prevContainers = steps[count - 2].container;

        //show the top container
        console.log(this.state.containers);
        console.log("prev cont: " + prevContainers);
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
    this.setState({ buttons: [] }, () => {
      //create an array of random number
      numOfArray = [];
      firstHalf = [];
      secondHalf = [];
      const randomNum = RandomNumbersArray(10, 20, 1);
      //setting the set stat of numOfArray to whatever randomNum array is so we have it on hand
      for (var i = 0; i < randomNum.length; i++) {
        numOfArray.push(randomNum[i]);
        numOfArrayHolder.push(randomNum[i]);
      }
      //set the merged array of the array generated
      mergedArray = numOfArrayHolder.sort((a, b) => a - b).toString();
      //return the button with the number in the array
      let button = [];

      for (let num of randomNum) {
        button.push(<Number id={num} className="number" draggable="true">{num}</Number>);
      }
      //get the first half
      for (var k = 0; k < 5; k++) {
        firstHalf.push(numOfArray[k]);
      }
      //get the second half
      for (var k = 5; k < 10; k++) {
        secondHalf.push(numOfArray[k]);
      }

      let numstr = numOfArray.toString();
      this.setState({ answer: numstr });
      this.setState({ buttons: button });
      console.log("current array when generated: " + numOfArray);
      console.log("the first half of the array:" + firstHalf);
      console.log("the seconf half of the array:" + secondHalf);
    });
    ReactDOM.render(<button className="verifyBtn" onClick={() => { this.verify(); this.setLastActive() }}>Verify</button>, document.getElementById("verify"));
  };

  getUserInput() {
    //check what step the user is on
    var currentStep = this.state.step;
    let con = "container";
    let conPointer;

    //check how many containers there are for the current step
    var currentContainers = steps[currentStep].container;

    userValues = [];    // array to hold the value of the numbers the user input in each box, in order from left to right
    numNumbers = [];    // array to hold the number of numbers in each box, in order from left to right

    //get the div of the current containers
    conPointer = con + currentStep;
    console.log("pointer" + conPointer)

    //getting all the board elements in the bottom container
    let bottomContainer = document.getElementsByClassName(conPointer);
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


  // ---------------------------------------------  MERGEEEEEEEE  -------------------------------------------F

  verifyMerge() {
    console.log("Merge verify");
    var index = 0;
    var orderCount = 0;
    var splitCount = 0;
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
    //find the total num in the current step
    let totalNum = 0;
    for (var p = 0; p < steps[this.state.step].numInCon.length; p++) {
      totalNum = totalNum + steps[this.state.step].numInCon[p];
    }
    console.log("totol Num: " + totalNum);
    numsInCont = totalNum / currentContainers;
    //numsInCont = 10 / currentContainers;

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
    let finalAnswerArray = "";


    //looping through each container and seeing the elements inside the container
    for (var u = 0; u < numNumbers.length; u++) {
      for (var t = 0; t < numNumbers[u]; t++) {
        console.log("inside the " + u + "first container there are these user value: " + userValues[index]);
        userArray.push(userValues[index]);
        //answerArray.push(numOfArray[index]);
        index++;
      }
      //-----------------check order-----------------
      //checking what step the merging is occuring and get the answer value at that correct index of the merge
      switch (count - 1) {
        case 4:
        case 5:
        case 8:
          for (var k = 0; k < totalNum; k++) {
            answerArray.push(firstHalf[k]);
            console.log("answer at index " + k + " : " + answerArray[k]);
          }
          //finalAnswerArray = answerArray.toString();
          break;
        case 7:
          for (var h = 3; h < 5; h++) {
            answerArray.push(firstHalf[h]);
            console.log("answer at index " + k + " : " + answerArray[h]);
          }
          //finalAnswerArray = answerArray.toString();
          break;
        case 12:
        case 13:
        case 16:
          for (var k = 0; k < totalNum; k++) {
            answerArray.push(secondHalf[k]);
            console.log("answer at index " + k + " : " + answerArray[k]);
          }
          break;
        case 15:
          for (var h = 3; h < 5; h++) {
            answerArray.push(secondHalf[h]);
            console.log("answer at index " + k + " : " + answerArray[h]);
          }
          break;
        default:
      }

      // let correctOrder;
      let userString, ansString;
      userString = userArray.toString();
      if (steps[count - 1].stepID == 18) {
        ansString = mergedArray;
      } else {
        ansString = answerArray.sort((a, b) => a - b).toString();
        //finalAnswerArray += ansString;
      }
      finalAnswerArray += ansString;
      console.log("User Array: " + userString);
      console.log("answer Array: " + finalAnswerArray);


      if (userString === ansString) {
        orderCount++;
        if (orderCount === currentContainers) {
          correctOrder = true;
        }
        console.log("yay correct order");
        console.log(finalAnswerArray);
        //this.setState({ answer: ansString })
      } else {
        correctOrder = false;
        console.log("booooo not correct order");
      }

      // ------------------------  user feedback  ------------------------
      // this.getUserFeedback();
      // console.log("split " + this.state.correctSplit + " order " + correctOrder);
      // if the user didn't drag all the numbers
      if (userValues.length < totalNum) {
        this.setState({ feedback: "please finish ordering all numbers" });
        document.getElementById('feedback').style.backgroundColor = 'red';
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
        //incrementing incorrect count
        incorrectCount++;
        //set the incorrect attempt
        this.setState({ incorrectAttempt: incorrectCount });
        // if one of the boxes contains >1 more numbers than any of the other boxes
      } else {
        if (!correctSplit && !correctOrder) {
          this.setState({ feedback: "please try again." });
          document.getElementById('feedback').style.backgroundColor = 'red';
          this.state.correctSound.pause();
          this.state.incorrectSound.play();
          //incrementing incorrect count
          incorrectCount++;
          //set the incorrect attempt
          this.setState({ incorrectAttempt: incorrectCount });
        } else if (!correctOrder && correctSplit) {
          document.getElementById('feedback').style.backgroundColor = 'red';
          this.state.correctSound.pause();
          this.state.incorrectSound.play();
          this.setState({ feedback: "the numbers are not in the correct order. please try again." });
          //incrementing incorrect count
          incorrectCount++;
          //set the incorrect attempt
          this.setState({ incorrectAttempt: incorrectCount });
        } else if (correctSplit && !correctOrder) {
          document.getElementById('feedback').style.backgroundColor = 'red';
          this.state.correctSound.pause();
          this.state.incorrectSound.play();
          //incrementing incorrect count
          incorrectCount++;
          //set the incorrect attempt
          this.setState({ incorrectAttempt: incorrectCount });
          this.setState({ feedback: "the numbers are in the correct order but they need to be split as evenly as possible. please try again." });
          // if the user gets the final step of the algorithm correct, and successfully completes the level
        } else if (correctOrder && correctSplit && (this.state.step === 17)) {
          document.getElementById('feedback').style.backgroundColor = 'green';
          document.getElementById('feedback').style.color = 'white';
          this.state.correctSound.play();
          this.state.incorrectSound.pause();
          this.setState({ feedback: "correct!!!! congratulations!!!!!! :-D you've now completed level 2!!! feel free to redo this level to strengthen your skills, or go back to the home page and try level 3!!!!" });
          // if it's the right order, right split, and it's not the final step of the algorithm
        } else if (correctOrder && correctSplit && (this.state.step !== 17)) {
          document.getElementById('feedback').style.backgroundColor = 'green';
          document.getElementById('feedback').style.color = 'white';
          this.state.correctSound.play();
          this.state.incorrectSound.pause();
          //if the last step is being verified then clear the timer and log the time
          if (steps[count - 1].stepID === 18) {
            console.log("Total Time: " + this.state.time.m + ":" + this.state.time.s);
            this.clearTimer();
            this.setState({ feedback: "Correct!!!You have finished level 2" });
          } else {
            this.setState({ feedback: "correct!!!! click next to go to the next step" });
          }
        };
      }
      userArray = [];
      answerArray = [];
    }
    orderCount = 0;
    index = 0;
  }

  //---------------------------------general verify function-------------------------------
  verify() {
    //get the current step
    var currentStep = this.state.step;

    //check if verify is 1, if so it will go to verify split. If verify is 2, it will go to merge
    if (steps[count - 1].verify === 1) {
      this.verifySplit();
      console.log("cuurent step:" + currentStep);
      console.log("it is verifying");
    } else {
      this.verifyMerge();
      console.log("it is merging");
      console.log("cuurent step:" + currentStep);

    }

    //--------------------prompt box-------------------------------
    //if user has 3 incorrect attempt prompt the user to 
    if (this.state.incorrectAttempt === 3) {
      let userNotFinished = true;
      //looping through the prompt box so that if the user makes a mistake it will prompt again until the user has correctly inputted the correct option
      while (userNotFinished) {
        let option = prompt("Please enter your option (if you clicked cancel, it will redirect you to homepage):\nOption 1: Restart the same level \nOption 2: Go back to the previous level \nOption 3: Switch to the latest level with another algorithm \nOption 4: Quit the game", "1");
        if (option == null || parseInt(option) === 4) {   //if user cancels or picks option 4 to quit the game, it will redirect to the home page
          window.location = '/';
          userNotFinished = false;
        } else if (parseInt(option) === 1) { //if user picks option 1
          window.location.reload();
          userNotFinished = false;
        } else if (parseInt(option) === 2) { //if user picks option 2 to go to the previous level
          window.location = "/LevelOne";
          userNotFinished = false;
        } else if (parseInt(option) === 3) { //if user picks option 3 to go to the latest level of another algorithm
          alert("Latest level of another algorithm is currently in the making! You will be directed to home!");
          window.location = '/';
          userNotFinished = false;
        } else {  //if user incorrectly inputted the wrong option
          userNotFinished = true;
          alert("Incorrect input, try again!");
        }
      }
    }
  }

    render() {
      const exitLevel = this.state.exitLevel;
      return (
        <div id="main">
          <div className="head">
            <Link to="/"><button>Home</button></Link> <button onClick={() => { window.location.reload(); }}>Restart</button>
            <h1>Level Two</h1>
          </div>
          <div className="nav">
            Incorrect Attempts: {this.state.incorrectAttempt}
            <button className="backBtn" onClick={() => { this.decrStep(); this.getContainers(); this.setLastActive() }}>back</button>
            <button className="generateBtn" onClick={() => { this.getButtonNumbers(); this.startTimer(); this.setLastActive(); this.submitResult() }}>Generate 10 Numbers</button>
            <button className="nextBtn" onClick={() => { this.incrStep(); this.getContainers(); this.setLastActive(); this.submitResult() }}>next</button>
            Time Elapsed: {this.state.time.m}:{this.state.time.s}
            {/* return user to home after 5 minutes of inactivity using state*/}
            {exitLevel && <Navigate to="/" replace={true} />}
          </div>
          <h3 className="text">{this.state.clicked ? `The generated array: ${this.state.clicked ? this.state.answer : null}` : null}</h3>
          <div id="step"></div>
          <div id="verify"></div>
          <div id="feedback">{this.state.feedback}</div>
          <div className="flexbox1">
            <div id="numbers">{this.state.clicked ? this.state.buttons : null}</div>
          </div>
          <div className="flexbox">
            <div className="container0" id="containers">{(this.state.step >= 0) ? this.state.containers0 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container1" id="containers">{this.state.step >= 1 ? this.state.containers1 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container2" id="containers">{(this.state.step >= 2) && (this.state.step <= 5) ? this.state.containers2 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container3" id="containers">{(this.state.step >= 3) && (this.state.step <= 4) ? this.state.containers3 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container4" id="containers">{(this.state.step >= 4) && (this.state.step <= 5) ? this.state.containers4 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container5" id="containers">{this.state.step >= 5 ? this.state.containers5 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container6" id="containers">{this.state.step >= 6 ? this.state.containers6 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container7" id="containers">{this.state.step >= 7 ? this.state.containers7 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container8" id="containers">{this.state.step >= 8 ? this.state.containers8 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container9" id="containers">{this.state.step >= 9 ? this.state.containers9 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container10" id="containers">{this.state.step >= 10 ? this.state.containers10 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container11" id="containers">{this.state.step >= 11 ? this.state.containers11 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container12" id="containers">{this.state.step >= 12 ? this.state.containers12 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container13" id="containers">{this.state.step >= 13 ? this.state.containers13 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container14" id="containers">{this.state.step >= 14 ? this.state.containers14 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container15" id="containers">{this.state.step >= 15 ? this.state.containers15 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container16" id="containers">{this.state.step >= 16 ? this.state.containers16 : null}</div>
          </div>
          <div className="flexbox">
            <div className="container17" id="containers">{this.state.step >= 17 ? this.state.containers17 : null}</div>
          </div>
        </div>
      );
    }
  }

// declare global variables

//these 3 are all that get changed to update the array parameters
var arraySize = 5;
var firstCall = true;
var compareLArray;
var compareRArray;



/*--------------------------Functions----------------------------*/
//---set left array-----
function setLArray(compareLArray, leftArr) {
  var lHolder = [];
  for (let i = 0; i < compareLArray.length; i++) {
    //set the left array to send
    lHolder.push(compareLArray[i]);
  }
  leftArr.push(lHolder);
  for (let i of leftArr) {
    console.log("Left Arr at " + i);
  }
}

//---set right array-----
function setRArray(compareRArray, rightArr) {
  var rHolder = [];
  for (let i = 0; i < compareRArray.length; i++) {
    //set the left array to send
    rHolder.push(compareRArray[i]);
  }
  console.log("the rHolder after set: " + rHolder);
  rightArr.push(rHolder);
  for (let i of rightArr) {
    console.log("Right Arr at " + i);
  }
  console.log("Right Arr" + rightArr);
}

//---get left array-----
function getLArray(leftArr, count) {
  console.log("the count is: " + count);
  console.log("lHolder " + leftArr[count]);
  return leftArr[count];
}
//---set right array-----
function getRArray(rightArr, count) {
  console.log("the count is: " + count);
  console.log("rHolder " + rightArr[count]);
  return rightArr[count];
}

function mergeSortAlgorithm(array, leftIndex, rightIndex, compareLArray, compareRArray, mergeCount, leftArr, rightArr) {
  console.log("The count is: " + mergeCount);
  //if the start index has become equal or less than the end index then the merge sort is done
  if (leftIndex >= rightIndex) {
    return;
  }//end of if 

  //set the middle index
  var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
  var thisBlockSize;

  //set variable and conditionals which check if the algorithm has moved on the the right side of the original split
  //if it has it resets the first call
  var newBlockCheck;

  if ((arraySize % 2) == 0) {
    newBlockCheck = (arraySize / 2) - 1;
  }

  else {
    newBlockCheck = Math.ceil(arraySize / 2);
  }

  if (middleIndex == newBlockCheck) {
    firstCall = true;
  }

  if (firstCall) {
    thisBlockSize = arraySize - leftIndex;
    firstCall = false;
  }
  else {
    thisBlockSize = arraySize - (arraySize - (rightIndex + 1));
  }

  //declaring variables
  var rightSideSize = rightIndex - middleIndex;
  var leftSideSize = thisBlockSize - rightSideSize;

  compareLArray = new Array(leftSideSize);
  compareRArray = new Array(rightSideSize);

  //setting the left side of the numbers to compare
  for (let i = leftIndex, y = 0; i <= middleIndex; y++, i++) {
    compareLArray[y] = array[i];
  }
  //set the left array
  setLArray(compareLArray, leftArr);

  //setting right side of the numbers to compare
  for (let j = (middleIndex + 1), k = 0; j <= rightIndex; k++, j++) {
    compareRArray[k] = array[j];
  }
  //outputing a split //, leftSideSize , rightSideSize
  console.log("Splitting numbers: "); console.log(compareLArray); console.log("   "); console.log(compareRArray); console.log(" "); console.log(" ");

  //recursively spliting the left side
  //add count by 1
  console.log("left count: " + mergeCount);
  mergeCount = mergeCount + 1;
  mergeSortAlgorithm(array, leftIndex, middleIndex, compareLArray, compareRArray, mergeCount, leftArr, rightArr);

  //setting the left side of the numbers to compare
  for (let i = leftIndex, y = 0; i <= middleIndex; y++, i++) {
    compareLArray[y] = array[i];
  }
  //setLArray(compareLArray, leftArr);
  //setting right side of the numbers to compare
  for (let j = (middleIndex + 1), k = 0; j <= rightIndex; k++, j++) {
    compareRArray[k] = array[j];
  }
  //set the right array
  setRArray(compareRArray, rightArr);
  console.log("right count: " + mergeCount);
  mergeCount = mergeCount + 1;
  //recursively merge sorting the right (end) side
  mergeSortAlgorithm(array, middleIndex + 1, rightIndex, compareLArray, compareRArray, mergeCount, leftArr, rightArr);

  //merging the array
  mergeArray(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray);
}//end of the mergesortalgorithm function

//merge function
function mergeArray(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray) {
  var lSize = middleIndex - leftIndex + 1;
  var rSize = rightIndex - middleIndex;

  var left = new Array(lSize);
  var right = new Array(rSize);

  for (var i = 0; i < lSize; i++) {
    left[i] = array[leftIndex + i];
  }

  for (var j = 0; j < rSize; j++) {
    right[j] = array[middleIndex + 1 + j];
  }

  var i = 0;
  var j = 0;
  var k = leftIndex;

  while (i < lSize && j < rSize) {
    console.log(" "); console.log(" "); console.log("Comparing: " + left[i] + " & " + right[j]);
    if (left[i] <= right[j]) {
      array[k] = left[i];
      console.log("  --->  " + left[i] + " is smaller than or equal to " + right[j]);
      console.log(" ");
      console.log("Inserting " + left[i] + " to the array at index " + k);
      console.log(" ");
      console.log("The updated array looks like this: "); console.log(array, arraySize); console.log(" ");
      i++;
    }
    else {
      array[k] = right[j];
      console.log("  --->  " + right[j] + " is smaller than " + left[i]);
      console.log(" "); console.log("Inserting " + right[j] + " to the array at index " + k);
      console.log(" "); console.log("The updated array looks like this: "); console.log(array, arraySize); console.log(" ");
      j++;
    }
    k++;
  }


  console.log(" "); console.log("Inserting any remaining numbers from the left side:");
  if (!(i < lSize)) {
    console.log(" No numbers to add");
  }
  while (i < lSize) {
    console.log(" " + left[i] + " at index " + k + ".");
    array[k] = left[i];
    i++;
    k++;
  }


  console.log(" "); console.log(" "); console.log("Inserting any remaining numbers from the right side:");
  if (!(j < rSize)) {
    console.log(" No numbers to add")
  }
  while (j < rSize) {
    console.log(" " + right[j] + " at index " + k + ".");
    array[k] = right[j];
    j++;
    k++;
  }

  console.log(" "); console.log(" "); console.log("This is the array after the merge: "); console.log(array, arraySize); console.log(" "); console.log(" "); console.log(" ");

}//end of the merge function