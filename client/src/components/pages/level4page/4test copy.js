import React, { Component } from "react";
import wrongaudio from "../../../sounds/wrong.mp3";
import correctaudio from "../../../sounds/correct.mp3";
import "./levelFour.css";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


var useriscorrect = false;
var allSplit = false;
var wasSplitStep = false;
var incorrectCount = 0;

var size = 20;
var max = 50;
var min = 1;
var numbersArray = new Array(size);
var numOfGroups =1;

const getItems = (size) => Array.from({ length: size }, (v, k) => k).map(k => ({
    id: `toparrayitem-${k}`,
    content: `${numbersArray[k]}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,
  
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',
  
    // styles we need to apply on draggables
    ...draggableStyle,
  });

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
  });
  

function addgroup() {
    var row = document.getElementById("1row");
    var x = row.insertCell(-1);
    x.classList.add("groupArrayCells");
    //x.setAttribute(ondrop, drop(event));
    //x.ondrop="drop(event)" ondragover="allowDrop(event)"
    numOfGroups++;
}//end of addgroup

function subgroup() {
    var row = document.getElementById("1row");
    row.deleteCell(0);
    numOfGroups--;
}//end of addgroup

function RandomNumbersArray(size, max, min) {
    var count = 1;
    var rangeSize = max - min + 1;
    var numbersArray = new Array(size);
    var randomNum = 0;
  
    // populate the array
    for (var j = 0; j < size; j++) {
      numbersArray[j] = 0;
    }
  
    for (var i = 0; i < size; i++) {
      do {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (count <= rangeSize && InNumberList(numbersArray, randomNum, size));
  
      numbersArray[i] = randomNum;
      count++;
    }
  
    return numbersArray;
}
  
function InNumberList(numbersArray, randomNum, size) {
    // check the numbers to make sure it is not already in the array
    for (var j = 0; j < size; j++) {
      if (numbersArray[j] === randomNum) {
        return true;
      }
    }
    return false;
}

function BuildArrayTable() {
    var table = document.getElementById("BaseArrayTable");
    var j = 1;
    var rows = [];
    var cells = [];
    
    for( var i = 0; i < j; i++ )
    {
        rows[i] = table.insertRow(i);
        cells[i] = [];

        for( var x = 0; x < size ; x++ )
        {
            cells[i][x] = document.createElement("td");
            cells[i][x].classList.add("BaseArrayCells");
            //cells[i][x].setAttribute(draggable, true);
            cells[i][x].innerHTML = numbersArray[x];
            rows[rows.length - 1].appendChild(cells[i][x]);
        }
    }
}

function Start() {

    numbersArray = RandomNumbersArray(size, max, min);
  
    //remove header and start button
    var startheaderremove = document.getElementById("startHeader");
    startheaderremove.remove();
    var startbttnremove = document.getElementById("startBttn");
    startbttnremove.remove();
    BuildArrayTable();

    //show the first step header
    document.getElementById("toptext").classList.remove("hidden");
    document.getElementById("bottomtext").classList.remove("hidden");
    document.getElementById("choiceBttns").classList.remove("hidden");
  
}//end of start function


export default class LevelFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbacktext: "",
            toptext: "A set of 20 numbers has been randomly generated",
            bottomtext: "Should the array be split or merged next?",
            incorrectSound: wrongaudio,
            correctSound: correctaudio,
            items: getItems(6),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const items = reorder(
          this.state.items,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          items,
        });
      }

    playSound = () => {
        if (useriscorrect) {
        // Play correct sound if user response is right
        this.state.incorrectSound.pause();
        this.state.correctSound.play();
        } 
        
        else {
        // Play incorrect sound if user response is wrong
        this.state.correctSound.pause();
        this.state.incorrectSound.play();
        }
    };

    ShowCorrect = () => {
        //show correct banner
        this.ReplaceFeedbackTextFunction("Correct!");
        document.getElementById("feedbackbar").className = "";
        document.getElementById("feedbackbar").classList.add("correctText");

        //show next button
        document.getElementById("next").classList.remove("hidden");

        //hide bottom and top text
        document.getElementById("toptext").classList.add("hidden");
        document.getElementById("nexthidden").classList.add("hidden");
        useriscorrect = true;
    } 

    ShowWrong = () => {
        //show wrong banner
        this.ReplaceFeedbackTextFunction("Incorrect");
        document.getElementById("feedbackbar").className = "";
        document.getElementById("feedbackbar").classList.add("wrongText");

        //change top to try again!
        this.ReplaceTopTextFunction("Try Again!");
        
        //show next button
        document.getElementById("next").classList.remove("hidden");

        //hide bottom content
        document.getElementById("nexthidden").classList.add("hidden");
        useriscorrect = false;
        incorrectCount++;
    } 

    TryAgain  = () => {
        //bring back bottom content
        document.getElementById("nexthidden").classList.remove("hidden");

        //hide next button and feedback bar
        document.getElementById("next").classList.add("hidden");
        document.getElementById("feedbackbar").classList.add("hidden");

        //reset top text
        document.getElementById("toptext").classList.remove("hidden");
        this.ReplaceTopTextFunction("Should the array be split or merged?");
        
        //hide bottom text
        document.getElementById("bottomtext").classList.add("hidden");
    }

    nextSplit = () => {
        //hide next button and feedback bar
        document.getElementById("next").classList.add("hidden");
        document.getElementById("feedbackbar").classList.add("hidden");

        //hide choice buttons
        document.getElementById("choiceBttns").classList.add("hidden");

        //bring back bottom content
        document.getElementById("nexthidden").classList.remove("hidden");

        //set top text to instruction
        document.getElementById("toptext").classList.remove("hidden");
        this.ReplaceTopTextFunction("Next, Drag and Drop the numbers from the array into the correct groups");
        
        //show check answer button
        document.getElementById("checkanswerBttn").classList.remove("hidden");
        this.ReplaceBottomTextFunction("Click the check answer button when finished");
        
        //show grouping array
        document.getElementById("stepstable").classList.remove("hidden");
    }

    nextMerge = () => {
        //bring back bottom content
        document.getElementById("nexthidden").classList.add("hidden");

        //hide next button and feedback bar
        document.getElementById("next").classList.add("hidden");
        document.getElementById("feedbackbar").classList.add("hidden");

        //hide choice buttons
        document.getElementById("choiceBttns").classList.add("hidden");

        //bring back bottom content
        document.getElementById("nexthidden").classList.remove("hidden");

        //set top text to instruction
        document.getElementById("toptext").classList.remove("hidden");
        this.ReplaceTopTextFunction("Next, drag and drop the numbers from the array into the correct merged groups");
        
        //show check answer button
        document.getElementById("checkanswerBttn").classList.remove("hidden");
        this.ReplaceBottomTextFunction("Click the check answer button when finished");
        
        //show grouping array
        document.getElementById("stepstable").classList.remove("hidden");
    }

    Next = () =>{
        if(!useriscorrect){
            this.TryAgain();
        }
        else {
            if (wasSplitStep) {
                this.nextSplit();
            }
            else {
                this.nextMerge();
            }
        }
    }

    SplitChoice = () => {
        if(allSplit) {
            //wrong answer
            wasSplitStep = false;
            this.ShowWrong();
        }
        else{
            //right answer
            wasSplitStep = true;
            this.ShowCorrect();
        }
    }
    
    MergeChoice = () => {  
        if(allSplit) {
            //right answer
            wasSplitStep = false;
            this.ShowCorrect();
           
         }
        else{
            //wrong answer
            wasSplitStep = true;
            this.ShowWrong();
        }
    }

    ReplaceFeedbackTextFunction = (text) =>{
        var NewText = text;
        this.setState({ feedbacktext : NewText});
    }

    ReplaceTopTextFunction = (text) =>{
        var NewText = text;
        this.setState({ toptext : NewText});
    }

    ReplaceBottomTextFunction = (text) =>{
        var NewText = text;
        this.setState({ bottomtext : NewText});
    }

    CheckAnswer = () => {

    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                        <div id="root"   ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>{/* enclosing div */}
                            <div class="topnav">{/* navbar */}
                                <b>MergeSort Algorithm: Level 4</b>
                                <a href="#about">Quit</a>
                                <c href="#level4">Restart</c>
                                <a href="#home">Home</a>
                            </div> {/*end of navbar */}

                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}
                                    >
                                    {item.content}
                                    </div>
                                )}
                                </Draggable>
                            ))}{provided.placeholder}

                            <div id= "startHeader" class="instructions">
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

                            <div id= "feedbackbar" class="instructions hidden">
                                <h3>{ this.state.feedbacktext} </h3>
                            </div>

                            <div id= "toptext" class="instructions hidden">
                                <h3>{ this.state.toptext} </h3>
                            </div>

                            <table id="BaseArrayTable" class="BaseTableStyle">
                            </table>
                            <div><br></br></div>

                            <table id="testTable" class="BaseTableStyle">
                                <td class="BaseArrayCells" draggable="true">testinf</td>
                            </table>
                            <div><br></br></div>



                            <div id="nexthidden"> {/*hide everything below to show next step */}
                                <div id="stepstable" class="centerdiv hidden">
                                    <table id="stepstable" class="stepsTableFormat">
                                        <td class="steptablecells centerdiv">
                                            <div id="splitArray" class="centerdiv">
                                                <table class="buttonsTableStyle">
                                                    <td width="5%" class="buttonsArrayCells">
                                                        <div class="groupboxdiv"> 
                                                            <input 
                                                                type="button"
                                                                value="+"
                                                                id= "addgroupbutton"
                                                                class="groupBox"
                                                                onClick={addgroup}
                                                            />
                                                        </div>
                                                    </td>
                                                
                                                    <td class="buttonsArrayCells">
                                                        <table id="splitArrayTable" class="groupTableStyle">
                                                            <tr id="1row"><td class="groupArrayCells"></td></tr>
                                                        </table>
                                                    </td>

                                                    <td width="5%" class="buttonsArrayCells">
                                                        <div class="groupboxdivright"> 
                                                            <input 
                                                                type="button"
                                                                value="-"
                                                                id= "subgroupbutton"
                                                                class="groupBox"
                                                                onClick={subgroup}
                                                            />
                                                        </div>
                                                    </td>
                                                </table> 
                                            </div>
                                        </td>
                                    </table>
                                </div>

                                <div id= "bottomtext" class="instructions hidden">
                                    <h3>{this.state.bottomtext}</h3>
                                </div>

                                <div id= "choiceBttns" className="centerdiv hidden">
                                    <input 
                                        type="button"
                                        value="Split"
                                        id= "splitchoicebttn" 
                                        class="choiceBttn"
                                        onClick={this.SplitChoice}
                                        />
                                    <input
                                        type="button"
                                        id= "mergechoicebttn"
                                        class="choiceBttn"
                                        value="Merge"
                                        onClick={this.MergeChoice}
                                    />
                                </div>

                                <div id= "checkanswerBttn" className="centerdiv hidden">
                                    <input 
                                        type="button"
                                        value="Check Answer"
                                        id= "checkanswerbttn" 
                                        class="choiceBttn"
                                        onClick={this.CheckAnswer}
                                        />
                                </div>
                            </div> {/* hidden for next step div */}
                            
                            <div id= "next" className="centerdiv hidden">
                                    <div><br></br></div>
                                    <input 
                                        type="button"
                                        value="Next"
                                        id= "nextbttn" 
                                        class="choiceBttn"
                                        onClick={this.Next}
                                    />
                            </div>
                        </div> 
                    )}
                </Droppable>
            </DragDropContext>
        );//end of return
    }//end of render
}//end of class