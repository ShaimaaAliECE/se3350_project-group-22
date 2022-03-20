import React, { Component } from "react";
import wrongaudio from "../../../sounds/wrong.mp3";
import correctaudio from "../../../sounds/correct.mp3";
import "./levelFour.css";
import { Link } from "react-router-dom";
import {
    Start,
    MergeChoice,
    SplitChoice
} from "./4testFunctions";

export default class LevelFour extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       items: getItems(10),
    //     };
    //     this.onDragEnd = this.onDragEnd.bind(this);
    //   }
    
    //   onDragEnd(result) {
    //     // dropped outside the list
    //     if (!result.destination) {
    //       return;
    //     }
    
    //     const items = reorder(
    //       this.state.items,
    //       result.source.index,
    //       result.destination.index
    //     );
    
    //     this.setState({
    //       items,
    //     });
    //   }

    // // verify user response
    // checkResponse = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("/check-answer", {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //     });

    //     const body = await response.text();
    //     alert(body);
    //     console.log(body);
    //     this.setState({ userResponse: body });
    // };

    // state = {
    //     // Get audio files in a variable
    //     incorrectSound: new Audio(wrongaudio),
    //     correctSound: new Audio(correctaudio),

    //     // State for user response
    //     incorrect: true,
    //     correct: false,
    // };

    // playSound = () => {
    //     // Get state of user response
    //     let incorrect = this.state.incorrect;
    //     let correct = this.state.correct;

    //     if (incorrect && !correct) {
    //     // Play correct sound if user response is right
    //     this.state.incorrectSound.pause();
    //     this.state.correctSound.play();
    //     } else {
    //     // Play incorrect sound if user response is wrong
    //     this.state.correctSound.pause();
    //     this.state.incorrectSound.play();
    //     }

    //     // Change the state of user answer later
    //     this.setState({ incorrect: !incorrect });
    //     this.setState({ correct: !correct });
    // };


    render() {
        return (
            <div id="root">{/* enclosing div */}
                <div class="topnav">{/* navbar */}
                    <b>MergeSort Algorithm: Level 4</b>
                    <a href="#about">Quit</a>
                    <c href="#level4">Restart</c>
                    <a href="#home">Home</a>
                </div> {/*end of navbar */}

                <div id= "startHeader" class="instructionHeader">
                    <h3> Click to Generate the Array</h3>
                </div>
                <div id= "startBttn" className="centerdiv">
                    <input
                        type="button"
                        className="choiceBttn"
                        value="Start"
                        onClick={Start}
                    />
                </div>

                <div id= "instructionHeader" class="instructionHeader hidden">
                    <h3>A set of 20 numbers has been randomly generated</h3>
                </div> <div><br></br></div>
                
                <table id="BaseArrayTable" class="BaseTableStyle">
                </table>
                
                <div><br></br></div>
                <div id= "choicefeedbackHeader" class="instructionHeader hidden">
                    <h3></h3>
                </div>
                <div id= "choiceinstructionHeader" class="instructionHeader hidden">
                    <h3>Should the array be split or merged next?</h3>
                </div>
                <div id= "choiceBttns" className="centerdiv hidden">
                    
                    <input 
                        type="button"
                        value="Split"
                        id= "splitchoicebttn" 
                        class="choiceBttn"
                        onClick={SplitChoice}
                        />
                    <input
                        type="button"
                        id= "mergechoicebttn"
                        class="choiceBttn"
                        value="Merge"
                        onClick={MergeChoice}
                    />
                </div>

                
               
                

            </div> // end of enclosing div
        );//end of return
    }//end of render
}//end of class


/*


<script>
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

</body>
</html>*/