import React from "react";
import ReactDOM from 'react-dom';
import { RandomNumbersArray } from '../../../randomNumberGenerator.js';
import Number from '../../Number';
import Board from "../../Board.js";
import './level2.css';
import {useDrag} from 'react-dnd';


export default class LevelTwo extends React.Component {
  getButtonNumbers(){
    //create an array of random number
    const randomNum = RandomNumbersArray(10, 20, 1);

    //return the button with the number in the array
    let buttons = [];
    for (let num of randomNum) {
      buttons.push(<Number id={num} className= "number" draggable="true"></Number>);
    }
    // render the Number button components in the div called numbers
    //ReactDOM.render(<>{buttons}</>, document.getElementById("numbers"));
    ReactDOM.render(<>
        <Board id='board-1' className='board'> {buttons} </Board> 
        <Board id='board-2' className='board'> </Board>
        <Board id='board-2' className='board'> </Board>
        <button onClick={this.checkAns}>check answer</button>
      </>, document.getElementById("numbers"));
  };

  checkAns(){
    // randomly choosing if they're right or wrong for now
    let random = Math.random() * 2;
    if (random === 1){
      ReactDOM.render(<text>you're correct!</text>, document.getElementById("feedback"));
    } else {
      ReactDOM.render(<text>you're wrong!</text>, document.getElementById("feedback"));
    }
  };

  getPrev(){
    let xReq = new XMLHttpRequest();              // creating an XMLHttp Request object
    xReq.onreadystatechange = showNext;              // when the state changes, display the generated numbers
    // first argument is HTTP method, second is URL to send req to, third is syn/async spec (true = async)
    xReq.open('GET','/check-answer',true);   // submit request to generate 10 numbers from 1-20
    // send request
    xReq.send();
  };
    
  getNext(){
      let xReq = new XMLHttpRequest();              // creating an XMLHttp Request object
      xReq.onreadystatechange = showNext;              // when the state changes, display the generated numbers
      // first argument is HTTP method, second is URL to send req to, third is syn/async spec (true = async)
      xReq.open('GET','/get-next',true);   // submit request to generate 10 numbers from 1-20
      // send request
      xReq.send();
  };
    
  render() {
      return (
        <div id="main">
          <h1>Level Two</h1>
          <button onClick={this.getPrev}>back</button>
          <button onClick={this.getButtonNumbers}>Generate 10 Numbers</button>
          <button onClick={this.getNext}>next</button>
          <div id="numbers"></div>
          <div className="flexbox">
              <div id="containers"></div>
          </div>
          <div className="flexbox-2">
              <div id="containers"></div>
          </div>
          <div id="containers"></div>
          <div id="feedback"></div>
          <div id="step"></div>
        </div>
      );
    }
  }


// getting the question stem
function showNext(){
        let stepDiv = document.getElementById("step");
        stepDiv.innerHTML = '<text>' + this.responseText + '</text><br><br><button href="/levelTwo/">click to restart</button>';
    }
    
