import React, { Component, useState } from "react";
import "./levelFour.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

var elementidnumber =0;

var useriscorrect = false;
var allSplit = false;
var wasSplitStep = false;
var incorrectCount = 0;

var size = 20;
var max = 50;
var min = 1;
var numbersArray = new Array(size);
var numOfGroups = 2;
var numOfItems=0;


var listOfDropfBoxIds;

numbersArray = RandomNumbersArray(size, max, min);

const Notice = styled.div`
    /* display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
    border: 1px solid transparent;
    line-height: 1.5;
    color: #aaa; */
`;
 
const ArrayElement = styled.div`
    border: 1px ${props => (props.isDragging ? 'dashed #000' : 'solid #999')};
    background: ${(props) => (props.isDragging ? '#e991dd' : '#e2b4ee')};
    font-family: "Courier New", Courier, monospace;
    padding: 5px;
    text-align: center;
    display: inline;
    margin: 3px;
    display: inline;
 
`;

const DropBox = styled.div`
    background: ${(props) => (props.isDraggingOver ? '#e991dd' : '#faddf6')};
    text-align: center;
    vertical-align: middle;
    height: 40px;
    display: flex;
    margin: 3px;
    border: 1px solid #9e9e9e;
  
`;

const TopDropBox = styled.div`
    text-align: center;
    padding: 0.5rem;
    height: 40px;
    /*background: ${(props) => (props.isDraggingOver ? '#e991dd' : '#faddf6')};*/
`;

const Clone = styled(ArrayElement)`
    + div {
         /* display: none !important; */
    }
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

function Start() {
    //remove header and start button
    var startheaderremove = document.getElementById("startHeader");
    startheaderremove.remove();
    var startbttnremove = document.getElementById("startBttn");
    startbttnremove.remove();

    document.getElementById("TopArrayHidden").classList.remove("hidden");

    //show the first step header
    document.getElementById("toptext").classList.remove("hidden");
    document.getElementById("bottomtext").classList.remove("hidden");
    document.getElementById("choiceBttns").classList.remove("hidden");
  
}//end of start function

const getItems = (size) => {
    
    var x = Array.from({ length: size }, (v, k) => k).map(k => ({
        id: `toparrayitem-${k}`,
        content: `${numbersArray[k]}`,
    }));
    
    numOfItems = size;

    return x;
}

// function mergeSortAlgorithm(array, leftIndex, rightIndex, compareLArray, compareRArray) {
//     //if the start index has become equal or less than the end index then the merge sort is done
//     if(leftIndex >= rightIndex) {
//         return;
//     }//end of if 
    
//     //set the middle index
//     var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
//     var thisBlockSize;
    
//     //set variable and conditionals which check if the algorithm has moved on the the right side of the original split
//     //if it has it resets the first call
//     var newBlockCheck;
    
//     if((arraySize % 2)==0){
//         newBlockCheck = (arraySize/2)-1;
//     }

//     else{
//         newBlockCheck = Math.ceil(arraySize/2); 
//     }

//     if(middleIndex == newBlockCheck) {
//         firstCall = true;
//     }

//     if(firstCall){
//         thisBlockSize = arraySize - leftIndex;
//         firstCall = false;
//     }
//     else {
//         thisBlockSize = arraySize - (arraySize -(rightIndex+1));
//     }
    
//     //declaring variables
//     var rightSideSize = rightIndex - middleIndex;
//     var leftSideSize = thisBlockSize - rightSideSize;
    
//     compareLArray = new Array(leftSideSize);
//     compareRArray = new Array(rightSideSize);

//     //setting the left side of the numbers to compare
//     for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
//         compareLArray[y] = array[i];
//     }
    
//     //setting right side of the numbers to compare
//     for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
//         compareRArray[k] = array[j];
//     }

//     //outputing a split
//     process.stdout.write("Splitting numbers: "); print(compareLArray, leftSideSize); process.stdout.write("   "); print(compareRArray, rightSideSize); console.log(" "); console.log(" ");

//     //recursively spliting the left side
//     mergeSortAlgorithm(array, leftIndex, middleIndex, compareLArray, compareRArray);
    
//     //setting the left side of the numbers to compare
//     for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
//         compareLArray[y] = array[i];
//     }

//     //setting right side of the numbers to compare
//     for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
//         compareRArray[k] = array[j];
//     }
   
//     //recursively merge sorting the right (end) side
//     mergeSortAlgorithm(array, middleIndex + 1, rightIndex, compareLArray, compareRArray);
    
//     //merging the array
//     mergeArray(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray);
// }//end of the mergesortalgorithm function

// //merge function
// function mergeArray(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray) {
//     var lSize = middleIndex - leftIndex + 1;
//     var rSize = rightIndex - middleIndex;

//     var left = new Array(lSize); 
//     var right = new Array(rSize);

//     for (var i = 0; i < lSize; i++) {
//         left[i] = array[leftIndex + i];
//     }

//     for (var j = 0; j < rSize; j++) {
//         right[j] = array[middleIndex + 1 + j];
//     }

//     var i = 0;
//     var j = 0;
//     var k = leftIndex;

//     while (i < lSize && j < rSize) {
//         console.log(" "); console.log(" "); process.stdout.write("Comparing: " + left[i] + " & "+ right[j]);
//         if (left[i] <= right[j]) {
//             array[k] = left[i];
//             console.log("  --->  "+left[i]+" is smaller than or equal to "+right[j]);
//             console.log(" ");
//             console.log("Inserting "+left[i]+" to the array at index "+k);
//             console.log(" ");
//             process.stdout.write("The updated array looks like this: "); print(array,arraySize); console.log(" ");
//             i++;
//         }
//         else {
//             array[k] = right[j];
//             console.log("  --->  "+right[j]+" is smaller than "+left[i]);
//             console.log(" "); console.log("Inserting "+right[j]+" to the array at index "+k);
//             console.log(" "); process.stdout.write("The updated array looks like this: "); print(array,arraySize); console.log(" ");
//             j++;
//         }
//         k++;
//     }

    
//     console.log(" "); process.stdout.write("Inserting any remaining numbers from the left side:"); 
//     if (!(i < lSize)){
//         process.stdout.write(" No numbers to add");
//     }
//     while (i < lSize) {
//         process.stdout.write(" "+left[i]+" at index "+k+".");
//         array[k] = left[i];
//         i++;
//         k++;
//     }

    
//     console.log(" "); console.log(" "); process.stdout.write("Inserting any remaining numbers from the right side:"); 
//     if (!(j < rSize)){
//         process.stdout.write(" No numbers to add")
//     }
//     while (j < rSize) {
//         process.stdout.write(" "+right[j]+" at index "+k+".");
//         array[k] = right[j];
//         j++;
//         k++;
//     }
    
//     console.log(" "); console.log(" "); process.stdout.write("This is the array after the merge: "); print(array, arraySize); console.log(" "); console.log(" "); console.log(" ");
// }//end of the merge function


//a little function to help us with reordering the result


const reorder = (list, startIndex, endIndex) => {
    console.log("in reorder");
    console.log(startIndex);
    console.log(endIndex);
    console.log(list);


    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log("in copy");
    console.log(source);
    console.log(destination);
    console.log(droppableSource);
    console.log(droppableDestination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: elementidnumber });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    console.log("in move");
    console.log(source);
    console.log(destination);
    console.log(droppableSource);
    console.log(droppableDestination);

    var destClone = [];

    if(destination !== undefined){
        destClone = Array.from(destination);
    }
   
    const sourceClone = Array.from(source);

    console.log(sourceClone);
    console.log(destClone);


    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const arraynumberslist = getItems(size);

function updateDropGroups() {
    return Array.from({ length: numOfGroups }, (v, k) => k).map(k => ({
        droppableId: `boxdropid-${k}`,
        content: [],
      }));
}

export default class LevelFour extends Component {
    constructor(props) {
        super(props);
        this.state = {

            feedbacktext: "",
            toptext: ("A set of "+ size +" numbers has been randomly generated"),
            bottomtext: "Should the array be split or merged next?", 

            topArrayItems: getItems(size),

            boxstateids : updateDropGroups(),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd = (result) =>  {
        
        const { source, destination } = result;

        // console.log("elementidnumber");
        // console.log(elementidnumber);

        // console.log("useriscorrect");
        // console.log(useriscorrect);

        // console.log("allSplit" );
        // console.log(allSplit );

        // console.log("wasSplitStep");
        // console.log(wasSplitStep);

        // console.log("incorrectCount");
        // console.log(incorrectCount);

        // console.log("size");
        // console.log(size);

        // console.log("max");
        // console.log(max);

        // console.log("min");
        // console.log(min);

        // console.log("numOfGroups");
        // console.log(numOfGroups);

        // console.log("numOfItems");
        // console.log(numOfItems);
     
        console.log("source:");
        console.log(source);

        console.log("destination:");
        console.log(destination);

        console.log("result:");
        console.log(result);

        // console.log("this.state.topArrayItems:");
        // console.log(this.state.topArrayItems);

        // console.log("id tests:")
        
        // console.log("this.state.topArrayItems[3].content:")
        // console.log(this.state.boxstateids[3].droppableId); 


        console.log("aougfibdhjcanlaifhu");
        var helpme = Object.keys((this.state.boxstateids));
        console.log(helpme);
        console.log(this.state.boxstateids.length);
        console.log(this.setDropIdArray());
        console.log(this.state.boxstateids[0].content );

        var sourceContent;
        var destinationContent
        
        if (source.droppableId === 'TopDropBoxDropID'){

            sourceContent = this.state.topArrayItems;
            
        }

        else {

            for (let i = 0;i< this.state.boxstateids.length;i++ ) {
                if(destination.droppableId === this.state.boxstateids[i].droppableId){

                    if (this.state.boxstateids[i].content === undefined){
                        destinationContent = [];
                    }
                    else {
                        destinationContent = this.state.boxstateids[i].content;
                    }
                }
            }
        }

        listOfDropfBoxIds = new Array(this.state.boxstateids.length);
        
        for(let i=0;i<this.state.boxstateids.length;i++) {

            listOfDropfBoxIds[i] = this.state.boxstateids[i].droppableId;

        }


        // dropped outside the list
        if (!destination) {
            console.log("here: !dest");
          return;
        }
            

        else if(source.droppableId === destination.droppableId ) {
            console.log("here: ===");

            var toReorder;

            console.log(destination.droppableId);
            
            if(destination.droppableId === 'TopDropBoxDropID') {
                toReorder = this.state.topArrayItems
            }
            
            else {
                for (let i = 0; i<numOfGroups;i++){
                    if(this.state.boxstateids[i].droppableId === destination.droppableId ) {
                        toReorder = this.state.boxstateids[i].content;
                        console.log("this is reorder passed: "+this.state.boxstateids[i].content);
                    }
                }
            }

            this.setState({
                [destination.droppableId]: reorder(
                    toReorder,
                    source.index,
                    destination.index
                )
            });
        }
        
        // else if(source.droppableId === 'TopDropBoxDropID') {
        //     console.log("here: topdboxid");
        //     var toReorder;
            
            
        //     for (let i = 0; i<numOfGroups;i++){
        //         if(this.state.boxstateids[i].droppableId === destination.droppableId ) {
        //             toReorder = this.state.boxstateids[i].content;
        //             console.log("this is reorder passed: "+this.state.boxstateids[i].content);
        //         }
        //     }

        //     this.setState({
        //         [destination.droppableId]: copy(
        //             arraynumberslist,
        //             toReorder,
        //             source,
        //             destination
        //         )
        //     });
        // }
        
        else {
            console.log("here: default");


            

            this.setState(
                move(
                    sourceContent,
                    destinationContent,
                    source,
                    destination
                )
            );
        } 
    };

    setDropIdArray = () => {

        listOfDropfBoxIds = new Array(this.state.boxstateids.length);
        
        for(let i=0;i<this.state.boxstateids.length;i++) {

            listOfDropfBoxIds[i] = this.state.boxstateids[i].droppableId;

        }

        return listOfDropfBoxIds;

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

    addList = (e) => {
        this.setState({ [numOfGroups.toString()]: [] });
    };

    render() {
        return (<div><DragDropContext onDragEnd={this.onDragEnd}><div id="root">{/* enclosing div*/}
            <div id="all the top stuff">
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
<<<<<<< Updated upstream
=======


                {/* <table id="BaseArrayTable" class="BaseTableStyle">
                </table> */}
                <div><br></br></div>

>>>>>>> Stashed changes
            </div>

            <Droppable droppableId="TopDropBoxDropID" direction="horizontal" isDropDisabled={true}>
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
                                                onClick={this.addList} 
                                            />
                                        </div>
                                    </td>
                                 
                                    {this.setDropIdArray().map((list, i) => (
                                        <td class="buttonsArrayCells">
                                        <Droppable key={list} droppableId={list} direction="horizontal">
                                            {(provided, snapshot) => (

                                                <DropBox ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>

                                                    {(this.state.boxstateids[i].content.length !== 0) ? this.state.boxstateids[i].content.map((item, index) => (
                                                                
                                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                                    {(provided, snapshot) => (
                                                                    
                                                                        <ArrayElement ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                                                            
                                                                            {list.content}
                                                                            
                                                                        </ArrayElement>

                                                                    )}
                                                                </Draggable>

                                                            )): !provided.placeholder}

                                                    {provided.placeholder}
                                                </DropBox>

                                            )}
                                        </Droppable>
                                        </td>
                                    ))}
                                    
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