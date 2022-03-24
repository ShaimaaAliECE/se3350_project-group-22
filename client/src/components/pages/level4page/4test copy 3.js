import React, { Component } from "react";
import "./levelFour.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

var topArrayItems=[];
var elementidnumber = 0;


var useriscorrect = false;
var allSplit = false;
var wasSplitStep = false;
var incorrectCount = 0;

var size = 20;
var max = 50;
var min = 1;
var numbersArray = new Array(size);
var numOfGroups = 1;

numbersArray = RandomNumbersArray(size, max, min);

// //a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: elementidnumber });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
 
const ArrayElement = styled.td`
    background-colour: ${(props) => (props.isDragging ? '#e991dd' : '#e2b4ee')};
  });
`;

const DropBox = styled.div`
    background: ${(props) => (props.isDraggingOver ? '#e991dd' : '#faddf6')};
    border: '2px solid #999';
    text-align: center;
    padding: 0.5rem;
    vertical-align: middle;
    height: 40px;
`;

const TopDropBox = styled.div`
    background: ${(props) => (props.isDraggingOver ? '#e991dd' : '#faddf6')};
    border: '2px solid #999';
    text-align: center;
    padding: 0.5rem;
    vertical-align: middle;
    height: 40px;
`;

const TopArrayTable = styled.table`
    height: 10 px;
    margin-left: auto;
    margin-right: auto;
    Overflow-x:scroll;
`;

function addgroup() {
    var row = document.getElementById("1row");
    var x = row.insertCell(-1);
    x.classList.add("groupArrayCells");
    numOfGroups++;
}//end of addgroup

function subgroup() {
    var row = document.getElementById("1row");
    row.deleteCell(0);
    numOfGroups--;
}//end of addgroup





// fake data generator
const getArray = () => {
    for(let i=0;i<size;i++){

        let x =    ` <Draggable key={"keytopArray"+i} draggableId={"draggableidtopArray"+i}>
        {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={provided.draggableProps.style}>
    
            numbersArray[i]

            </div>
        )}
    </Draggable>;`;


        this.setState({ topArrayItems: x});
    }
};


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

    //getArray();
    document.getElementById("topArrayTable").classList.remove("hidden");
    var table = document.getElementById("topArrayTable");
    var rows = [];
    var cells = [];
    
   
        rows[0] = table.insertRow(0);
        cells[0] = [];

        for( var x = 0; x < size ; x++ ) {
            cells[0][x] = document.createElement("ArrayElement");
            cells[0][x].classList.add("BaseArrayCells");
            cells[0][x].innerHTML = numbersArray[x];
            table.rows[0].appendChild(cells[0][x]);
        }
    
}

function BuildArrayTable2() {
    var table = document.getElementById("BaseArrayTable");
    var row = table.rows[0];
    

    for(var i = 0; i < size; i++) {
        row.Cell(i).createElement("td");
        row.Cell(i).classList.add("BaseArrayCells");
        row.Cell(i).innerHTML = numbersArray[i];
    }
}

function Start() {
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

            topArrayItems: [],
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }


    onDragEnd = (result) =>  {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const topArrayItems = reorder(
          this.state.items,
          result.source.topArrayItems,
          result.destination.topArrayItems
        );
    
        this.setState({
          topArrayItems,
        });
      }


    // onDragEnd = result => {
    //     const { source, destination } = result;

    //     // dropped outside the list
    //     if (!destination) {
    //         return;
    //     }

    //     switch (source.droppableId) {
    //         case destination.droppableId:
    //             this.setState({
    //                 [destination.droppableId]: reorder(
    //                     this.state[source.droppableId],
    //                     source.index,
    //                     destination.index
    //                 )
    //             });
    //             break;
    //         default:
    //             this.setState(
    //                 move(
    //                     this.state[source.droppableId],
    //                     this.state[destination.droppableId],
    //                     source,
    //                     destination
    //                 )
    //             );
    // //             break;
    // //     }
    // };

    // addList = e => {
    //     this.setState({ [uuid()]: [] });
    //};

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
        return (<div><DragDropContext onDragEnd={this.onDragEnd}><div id="root">{/* enclosing div*/}
       

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

            <Droppable droppableId="topArrayTableBox" direction="horizontal">
                {(provided, snapshot) => (
                    <TopDropBox ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>

                        <TopArrayTable id="topArrayTable" class="hidden"> 
                                
                            <td>
                                <Draggable key="testingid3" draggableId="testingid3">
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={provided.draggableProps.style}>
                                    
                                        hi
                            
                                        </div>
                                    )}
                                </Draggable>
                            </td>
                        </TopArrayTable>
                        <div><br></br></div>
                    </TopDropBox>
                )}
            </Droppable>



            
                {/* <TopArrayTable id="topArrayTable"> 
                   {/* <tr id="BaseArrayTabletopRow"> 
                         <Droppable isDropDisabled={true} droppableId="toparraytable" direction="horizontal">
                        {(provided, snapshot) => (
                
                             <td innerRef={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                    
                                {this.state.items.map((item, index) => (
                        
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                        
                                        <h1>hi</h1>
                                        
                                        </div>
                                    )}
                                    </Draggable>

                                ))} {provided.placeholder}
                            </td> 
                        )}
                        </Droppable>                    
                    </tr>
                </TopArrayTable>
                <div><br></br></div> */}

{/*         
       
          {(provided, snapshot) => (
              <TopArrayDropArea ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                <table id="BaseArrayTable" class="BaseTableStyle">
                {ITEMS.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <React.Fragment>
                                            <ArrayElement innerRef={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                                {item.content}
                                            </ArrayElement>
                                            
                                            {snapshot.isDragging && (
                                                <Clone>{item.content}</Clone>
                                            )}
                                        </React.Fragment>
                                    )}
                                </Draggable>
                            ))}
                
                </table>
                <div><br></br></div>
              </TopArrayDropArea>
          )}
        </Droppable> */}
       

        {/* <Droppable droppableId="droppable2" direction="horizontal">
          {(provided, snapshot) => (
            
              <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                
                {this.state.items.map((item, index) => (
                  
                  
                  
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                      
                        {item.content}
                      
                      </div>
                    )}
                  </Draggable>



                ))} {provided.placeholder}
              
              </div>

          )}
        </Droppable>*/}
            

           

            {/* <table id="testTable" class="BaseTableStyle">
                <Draggable key="testingid" draggableId="testingid">
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                      
                  
                        <td id="testingid" class="BaseArrayCells">testinf</td>
                      
                      </div>
                    )}
                  </Draggable>
            </table>
            <div><br></br></div> */}

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
                                        <table id="splitArrayTable" class="groupTableStyle">
                                            <tr id="1row">
                                                <td class="groupArrayCells"> 
                                                    <Droppable droppableId="dropbox1" direction="horizontal">
                                                        {(provided, snapshot) => (
                                                            <DropBox ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                
                                                                <Draggable key="testingid" draggableId="testingid">
                                                                    {(provided, snapshot) => (
                                                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={provided.draggableProps.style}>
                                                                    
                                                                
                                                                            <td id="testingid" class="BaseArrayCells">testinf</td>
                                                                    
                                                                        </div>
                                                                    )}
                                                                </Draggable>

                                                            </DropBox>
                                                        )}
                                                    </Droppable>
                                                </td>
                                            </tr>
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
                    <div><br></br></div>
                    <input 
                        type="button"
                        value="Next"
                        id= "nextbttn" 
                        class="choiceBttn"
                        onClick={this.Next}
                    />
            </div> 

</div></DragDropContext></div>);//end of return
    }//end of render
}//end of class