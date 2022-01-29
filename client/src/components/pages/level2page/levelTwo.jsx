import React from "react";
import ReactDOM from 'react-dom';
import { RandomNumbersArray } from '../../../randomNumberGenerator.js';
import Number from '../../Number';
import Board from "../../Board.js";
import './level2.css';
import { useDrag } from 'react-dnd';


export default class LevelTwo extends React.Component {
  getButtonsUsingMap() {
    //create an array of random number
    const randomNum = RandomNumbersArray(10, 20, 1);

    //return the button with the number in the array
    let buttons = [];
    for (let num of randomNum) {
      buttons.push(<Number id={num} className= "number" draggable="true"></Number>);
    }
    ReactDOM.render(<>
       <Board id='board-1' className='board'> {buttons} </Board> 
       <Board id='board-2' className='board'> </Board>
       <Board id='board-2' className='board'> </Board>
    </>, document.getElementById("numbers"));
  }

  render() {
    return (
      <div id="main">
        <h1>Hello</h1>
        <button>back</button>
        <button onClick={this.getButtonsUsingMap}>Generate 10 Numbers</button>
        <button>next</button>
        <div className="flexbox">
          <div id="numbers"></div>
          <div id="containers"></div>
        </div>


      </div>
    );
  }

}

/*
      // getting the question stems
      function generateBtn(){
        let xReq = new XMLHttpRequest();              // creating an XMLHttp Request object
        xReq.onreadystatechange = showNumbers;              // when the state changes, display the generated numbers
        // first argument is HTTP method, second is URL to send req to, third is syn/async spec (true = async)
        xReq.open('GET','/generate-numbers?range=20&&num=10',true);   // submit request to generate 10 numbers from 1-20
        // send request
        xReq.send();
    }
    */
