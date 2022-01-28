
import React from "react";
import Number from '../Number';
import ReactDOM from "react-dom";

export default class LevelTwo extends React.Component {

  backBtn(){
    // let numbersDiv = document.getElementsByClassName("numbersDiv");
    // numbersDiv.innerHTML = "<h1>back</h1>";
    alert("hi");

  }

  showNumbers(){
    //console.log("click");
    ReactDOM.render(<Number>hey</Number>);

  }

  nextBtn(){
    Number.dangerouslySetInnerHTML = "<h1>next</h1>";
  }

    render() {
      return (
        <><div className="header">
        <h1>Level Two</h1>
            <button onClick={this.backBtn}>back</button>
            <button onClick={this.showNumbers}> generate ten numbers</button>
            <button onClick={this.nextBtn}>next</button>
        </div>
        <div className="numbersDiv">

        </div>
        <div className="answersDiv">
        </div>
        <div className="feedbackDiv">
        </div></>
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

    // function to handle when the user chooses an option
    

  