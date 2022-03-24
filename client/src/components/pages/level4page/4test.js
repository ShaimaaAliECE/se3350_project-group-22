import React, { Component } from "react";
import HTMLReactParser from 'html-react-parser';
import wrongaudio from "../../../sounds/wrong.mp3";
import correctaudio from "../../../sounds/correct.mp3";
import "./levelFour.css";
import { Link } from "react-router-dom";
import {
    Start,
    
} from "./4testFunctions";

var useriscorrect = false;
var allSplit = false;
var wasSplitStep = false;

//keeping track of users incorrect attempts
let incorrectCount = 0;



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

export default class LevelFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbacktext: "",
            toptext: "A set of 20 numbers has been randomly generated",
            bottomtext: "Should the array be split or merged next?",
            incorrectSound: wrongaudio,
            correctSound: correctaudio,
        };
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
        //bring back bottom content
        document.getElementById("nexthidden").classList.add("hidden");

        //hide next button and feedback bar
        document.getElementById("next").classList.add("hidden");
        document.getElementById("feedbackbar").classList.add("hidden");


        document.getElementById("toptext").classList.remove("hidden");
        document.getElementById("checkanswerBttn").classList.remove("hidden");
        document.getElementById("choiceBttns").classList.add("hidden");
        this.ReplaceTopTextFunction("Next, Drag and Drop the numbers from the array into the correct groups");
        this.ReplaceBottomTextFunction("Click the check answer button when finished");
        document.getElementById("splitArray").classList.remove("hidden");
        useriscorrect = true;
        this.playSound();

    }

    nextMerge = () => {
        //bring back bottom content
        document.getElementById("nexthidden").classList.add("hidden");
        if(allSplit) {
            //right answer
            //correctaudio.play();
            document.getElementById("choiceBttns").classList.add("hidden");
            document.getElementById("checkanswerBttn").classList.remove("hidden");
            this.ReplaceTopTextFunction("Correct!");
            document.getElementById("instructionHeader").className = "";
            document.getElementById("splitArray").classList.remove("hidden");
            document.getElementById("instructionHeader").classList.add("correctText");
            document.getElementById("instructionHeader2").classList.remove("hidden");
            this.ReplaceTop2TextFunction("Next, Drag and Drop the numbers from the array into the correct groups");
            this.ReplaceBottomTextFunction("Click the check answer button when finished");
            useriscorrect = true;
            this.playSound();
         }
        else{
           //wrong answer
           //wrongaudio.play();
            this.ReplaceTopTextFunction("Incorrect");
            document.getElementById("instructionHeader").className = "";
            document.getElementById("instructionHeader").classList.add("wrongText");
            document.getElementById("instructionHeader2").classList.remove("hidden");
            this.ReplaceTop2TextFunction("Try again!");
            useriscorrect = false;
            this.playSound();

        }


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

    }

    render() {
        return (
            <div id="root">{/* enclosing div */}
                <div class="topnav">{/* navbar */}
                    <b>MergeSort Algorithm: Level 4</b>
                    <a href="#about">Quit</a>
                    <c href="#level4">Restart</c>
                    <a href="#home">Home</a>
                </div> {/*end of navbar */}

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

<<<<<<< Updated upstream
                <div id= "next" className="centerdiv hidden">
=======

                    </div>
                )}
            </Droppable>

<div id="nexthidden">
            <div id="stepstablehidden"> {/*hide everything below to show next step */}
                <div id="stepstable" class="centerdiv hidden">
                    <table id="stepstable" class="stepsTableFormat">
                        <td class="steptablecells centerdiv">
                            <div id="splitArray" class="centerdiv">
                                <table class="buttonsTableStyle">
                                    <td width="5%" class="buttonsArrayCells">
                                        <div class="groupboxdivleft"> 
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


                                        <Droppable droppableId="boxdropid-10" direction="horizontal">
                                                        {(provided, snapshot) => (
                                                            <DropBox ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                                                                {arraynumberslist.map((number, index) => (
                
                                                                    <Draggable key={number.id} draggableId={"secondlvele"+number.id} index={index}>
                                                                        {(provided, snapshot) => ( 

                                                                            <React.Fragment>
                                                                                <ArrayElement ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                                                                    
                                                                                    
                                                                                    {number.content}
                                                                    
                                                                            
                                                                                </ArrayElement>
                                                                                {snapshot.isDragging && (
                                                                                    <Clone>{number.content}</Clone>
                                                                                )}

                                                                            </React.Fragment>
                                                                        )}
                                                                ))} {provided.placeholder}
                                                                                                
                                                            </DropBox>
                                                        )}
                                        </Droppable>
                                        
                                        {/* {this.setDropIdArray().map((list, i) => (
                                            
                                            <Droppable key={list} droppableId={listOfDropfBoxIds[list]}>
                                                {(provided, snapshot) => (

                                                    <DropBox id={"dropboxid-"+numOfGroups} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>

                                                        {this.state.boxstateids[list].content.length ? this.state.boxstateids[list].content.map((item, index) => (
                                                                    
                                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                                        {(provided, snapshot) => (
                                                                            
                                                                            
                                                                            <ArrayElement ref={provided.innerRef} {...provided.draggableProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                                                                
                                                                                {list.content}
                                                                                
                                                                            </ArrayElement>


                                                                        )}
                                                                    </Draggable>

                                                                )): !provided.placeholder && (<Notice>Drop items here</Notice>)}

                                                        {provided.placeholder}
                                                    </DropBox>

                                                )}
                                            </Droppable>
                                            
                                        ))} */}

                                    {/* {this.state.boxstateids.map(id, content) => (



                                    ))} */}

                                        {/* <Droppable droppableId="TopDropBoxDropI2D" direction="horizontal">
                                            {(provided, snapshot) => (

                                                <div id="TopArrayHidden" class = "hidden">
                                                    
                                                    
                                                    <TopDropBox id="topArrayBox" ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                                                        
                                                        
                                                        {arraynumberslist.map((number, index) => (
                                            
                                                            <Draggable key={number.id} draggableId={number.id} index={index}>
                                                                {(provided, snapshot) => ( 

                                                                    <React.Fragment>
                                                                        <ArrayElement ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                                                            
                                                                            
                                                                            {number.content}
                                                            
                                                                    
                                                                        </ArrayElement>
                                                                        {snapshot.isDragging && (
                                                                            <Clone>{number.content}</Clone>
                                                                        )}

                                                                    </React.Fragment>
                                                                )}
                                                            </Draggable>
                                                        ))} {provided.placeholder}
                                                    </TopDropBox>


                                                </div>
                                            )}
                                        </Droppable> */}

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
                                    </td>{/*for sub button cell*/}
                                </table> {/*for tablebuttons */}
                            </div>{/*for splitarray */}
                        </td>{/*for stepstable cells*/}
                    </table>{/*for stepstable */}
                </div> {/*for stepstable */}
            </div>{/* for stepstablehidden */}


                           
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

</div> {/* end of nexthidden*/}
                        
            <div id= "next" className="centerdiv hidden">
>>>>>>> Stashed changes
                    <div><br></br></div>
                    <input 
                        type="button"
                        value="Next"
                        id= "nextbttn" 
                        class="choiceBttn"
                        onClick={this.Next}
                    />
                </div>

                <div id="nexthidden"> {/*hide everything below to show next step */}
                    <div id="splitArray" class="centerdiv hidden">
                        <input 
                            type="button"
                            value="+"
                            id= "addgroupbutton" 
                            class="addBox"
                            //onClick={this.CheckAnswer}
                        />
                        
                        <table id="splitArrayTable" class="groupTableStyle">
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
            </div> // end of enclosing div
        );//end of return
    }//end of render
}//end of class