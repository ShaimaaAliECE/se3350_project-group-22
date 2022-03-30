import React, { Component, useRef} from "react";
import "./levelFive.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

var size = 50;
var max = 100;
var min = 1;

var numbersArray = new Array(size);
numbersArray = RandomNumbersArray(size, max, min);

const getItems = (size) => {
    
    var x = Array.from({ length: size }, (v, k) => k).map(k => ({
        id: `toparrayitem-${k}`,
        content: `${numbersArray[k]}`,
    }));
    return x;
}



const arraynumberslist = getItems(size);

var wascontenterror = false;

var arraySize = size;
var arrayMax = max;
var arrayMin = min;

var firstCall = true;
var levelArray = new Array(arraySize);
var finalLevelArray = new Array(arraySize);
var compareLArray;
var compareRArray;
var compareL;
var compareR;
var reminaingLArray;
var remainingRArray;


var middleIndextotal = 0 + parseInt(((arraySize - 1) - 0) / 2);

//define array/get random numbers
levelArray = arraynumberslist;

var elementidnumber = 0;
var useriscorrect = true;
var allSplit = false;
var wasSplitStep = false;
var incorrectCount = 0;

var arrayforgroupinfo = [];
var stepnum = 0;
var currentitemcount = 0;


var currentstepcheck = 0;
var mergestepcurrentstep = 0;
var hasHitStep = false;
var mergesortstepresult = [];

var boxcontent = "";

var leftIndex = 0;
var rightIndex = arraySize-1;
var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);


var array= [];

for (var i = 0; i <arraynumberslist.length; i++) {
    array[i] = arraynumberslist[i];
}


var isonleft = true;

var isfirst = true;

var splits = [[]];

var stepnum = 0;

var rightsideSave = [];
var leftsideSave = [];

var numoflsplits = 0;

function splitcheck () {
    var lengths = findDim(splits);

    if (middleIndextotal % 2 === 0) {
        numoflsplits = middleIndextotal ;
    }
    else {
        numoflsplits = middleIndextotal + 1;
    }
    
    
    if(isfirst) {
        
        for (let x=0;x <= middleIndex;x++){
            splits[stepnum][x] = array[x];
        }
       
        splits[stepnum][middleIndex+1] = "split";

        for (let x = middleIndex+1, y = 0;x< array.length;y++,x++){
            rightsideSave[y] = array[x];
        }
    
        for (let x = middleIndex+1, y = middleIndex+2;x< array.length;y++,x++){
            splits[stepnum][y] = array[x];
        }

        isfirst = false;
    }

    lengths = findDim(splits);
    
    splits.push([]);

    for(let x = 0; x < lengths[1]; x++){
        
        splits[stepnum+1][x] = splits[stepnum][x];
    }
    
    while(numoflsplits > 0) {
        
        lengths = findDim(splits);
        var lengthx = lengths[1]+1;
        stepnum++;
        splits.push([]);
        
        rightIndex = middleIndex;
        leftIndex = 0;
        middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
       
        for(let x = 0; x < lengths[1]; x++){
        
            array[x] = splits[stepnum][x];
        }

     
    
        for (let x=0 ;x <= middleIndex; x++){
            
            splits[stepnum][x] = array[x];

        }
        
        splits[stepnum][middleIndex+1] = "split";
    
        for (let x = middleIndex+1, y = middleIndex+2;x< array.length;y++,x++){
    
            splits[stepnum][y] = array[x];
        }

        numoflsplits--;
        
        for(let x = 0; x < lengthx; x++){
        
            splits[stepnum+1][x] = splits[stepnum][x];
        }
    }

console.log(splits);

return splits;
}

function findDim(a){
    var mainLen = 0;
    var subLen = 0;

    mainLen = a.length;

    for(var i=0; i < mainLen; i++){
        var len = a[i].length;
        subLen = (len > subLen ? len : subLen);
    }

    return [mainLen, subLen];
};

function additembox() {

    currentitemcount++;

    arrayforgroupinfo[parseInt(stepnum)] = currentitemcount;

    var row = document.getElementById(("stepnumber-"+stepnum));
    var x = row.insertCell(-1);
    var thisid = ("step"+stepnum+"-group-"+currentitemcount);
    x.setAttribute("id", thisid);

    
    boxcontent= "<input class =\"itembox\" id =\"s";
    boxcontent = boxcontent + stepnum;
    boxcontent = boxcontent +"-i";
    boxcontent = boxcontent +currentitemcount;
    boxcontent = boxcontent+ "\" type=\"text\"/>";
 
    x.insertAdjacentHTML("afterbegin", boxcontent);

}//end of addgroup

function subitembox() {
    if(currentitemcount >= 0){
        currentitemcount--;
        var row = document.getElementById(("stepnumber-"+stepnum));
        row.deleteCell(currentitemcount+1);
    }
}//end of subgroup

 
const ArrayElement = styled.div`
    border: 1px ${props => (props.isDragging ? 'dashed #000' : 'solid #999')};
    background: ${(props) => (props.isDragging ? '#e991dd' : '#ffebfc')};
    color: '#e2b4ee';
    font-family: "Courier New", Courier, monospace;
    padding: 5px;
    text-align: center;
    display: inline;
    margin: 3px;
    display: inline;
 
`;


const TopDropBox = styled.div`
    text-align: center;
    padding: 0.5rem;
    height: 40px;
`;

const Clone = styled(ArrayElement)`
    + div {
         /* display: none !important; */
    }
`;

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

function print(array, size) {
    for (var i = 0; i < size; i++){
        console.log("["+array[i] + "]");
    }
}//end of print function


function mergeSortAlgorithm(array, leftIndex, rightIndex, compareLArray, compareRArray) {
    //if the start index has become equal or less than the end index then the merge sort is done
    if(leftIndex >= rightIndex) {
        return;
    }//end of if 
    
    //set the middle index
    var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
    var thisBlockSize;
    
    //set variable and conditionals which check if the algorithm has moved on the the right side of the original split
    //if it has it resets the first call
    var newBlockCheck;
    
    if((arraySize % 2)==0){
        newBlockCheck = (arraySize/2)-1;
    }

    else{
        newBlockCheck = Math.ceil(arraySize/2); 
    }

    if(middleIndex == newBlockCheck) {
        firstCall = true;
    }

    if(firstCall){
        thisBlockSize = arraySize - leftIndex;
        firstCall = false;
    }
    else {
        thisBlockSize = arraySize - (arraySize -(rightIndex+1));
    }
    
    //declaring variables
    var rightSideSize = rightIndex - middleIndex;
    var leftSideSize = thisBlockSize - rightSideSize;
    
    compareLArray = new Array(leftSideSize);
    compareRArray = new Array(rightSideSize);

    //setting the left side of the numbers to compare
    for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
        compareLArray[y] = array[i];
    }
    
    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }

    mergestepcurrentstep++;
    if(currentstepcheck === mergestepcurrentstep && !hasHitStep) {
        hasHitStep = true;
        for (let j = 0;j < arraySize; j++){
            mergesortstepresult = array[j];
        }
    }


    console.log (compareLArray);
    //console.log("Splitting numbers: "); print(compareLArray, leftSideSize); console.log("   "); print(compareRArray, rightSideSize); console.log(" "); console.log(" ");

    //recursively spliting the left side
    mergeSortAlgorithm(array, leftIndex, middleIndex, compareLArray, compareRArray);
    
    //setting the left side of the numbers to compare
    for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
        compareLArray[y] = array[i];
    }

    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }
   
    mergestepcurrentstep++;
    if(currentstepcheck === mergestepcurrentstep && !hasHitStep) {
        hasHitStep=true;
       for (let j = 0;j < arraySize; j++){
           mergesortstepresult = array[j];
       }
    }
    //recursively merge sorting the right (end) side
    mergeSortAlgorithm(array, middleIndex + 1, rightIndex, compareLArray, compareRArray);
    
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
        console.log(" "); console.log(" "); console.log("Comparing: " + left[i] + " & "+ right[j]);
        if (left[i] <= right[j]) {
            array[k] = left[i];
            console.log("  --->  "+left[i]+" is smaller than or equal to "+right[j]);
            console.log(" ");
            console.log("Inserting "+left[i]+" to the array at index "+k);
            console.log(" ");
            console.log("The updated array looks like this: "); print(array,arraySize); console.log(" ");
            i++;
        }
        else {
            array[k] = right[j];
            console.log("  --->  "+right[j]+" is smaller than "+left[i]);
            console.log(" "); console.log("Inserting "+right[j]+" to the array at index "+k);
            console.log(" "); console.log("The updated array looks like this: "); print(array,arraySize); console.log(" ");
            j++;
        }
        k++;
    }

    
    console.log(" "); console.log("Inserting any remaining numbers from the left side:"); 
    if (!(i < lSize)){
        console.log(" No numbers to add");
    }
    while (i < lSize) {
        console.log(" "+left[i]+" at index "+k+".");
        array[k] = left[i];
        i++;
        k++;
    }

    
    console.log(" "); console.log(" "); console.log("Inserting any remaining numbers from the right side:"); 
    if (!(j < rSize)){
        console.log(" No numbers to add")
    }
    while (j < rSize) {
        console.log(" "+right[j]+" at index "+k+".");
        array[k] = right[j];
        j++;
        k++;
    }
    
    console.log(" "); console.log(" "); console.log("This is the array after the merge: "); print(array, arraySize); console.log(" "); console.log(" "); console.log(" ");
}//end of the merge function
export default class LevelFour extends Component {
    constructor(props) {
        super(props);
        this.state = {

            feedbacktext: "",
            toptext: ("A set of "+ size +" numbers has been randomly generated"),
            bottomtext: "Should the array be split or merged next?", 
            toptext2: "",
            topArrayItems: getItems(size),

           
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd = (result) =>  {
        
        const { source, destination } = result;



        // dropped outside the list
        if (!destination) {
            console.log("here: !dest");
          return;
        }
            
    };

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

    notANumber  = () => {

         document.getElementById("nexthidden").classList.add("hidden");
         document.getElementById("next").classList.remove("hidden");

         document.getElementById("NANwarning").classList.remove("hidden");
         
        
         document.getElementById("toptext").classList.add("hidden");
         document.getElementById("toptext2").classList.add("hidden");
         
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
        this.ReplaceTopTextFunction("Next, enter the numbers from the array into the correct groups. Leave a blank box to indicate a split");
        
        //set top text to instruction
        document.getElementById("toptext2").classList.remove("hidden");
        this.ReplaceTopTextFunction("Leave a blank box to indicate a split");
        

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
        if(wascontenterror){
            document.getElementById("NANwarning").classList.add("hidden");
            this.TryAgain();
        }

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

    ReplaceTopTextFunction = (text) =>{
        var NewText = text;
        this.setState({ toptext2 : NewText});
    }

    ReplaceBottomTextFunction = (text) =>{
        var NewText = text;
        this.setState({ bottomtext : NewText});
    }

    CheckAnswer = () => {

        var answerArray=[];

        for (var j = 0; j <= currentitemcount; j++) {

            if(document.getElementById(("s"+stepnum+"-i"+j)).value === "") {
                answerArray[j] = "";
            }
            else if (isNaN(parseInt(document.getElementById(("s"+stepnum+"-i"+j)).value))) {
                //show warning for not numbers
                wascontenterror = true;
                this.notANumber();
             }

            else {
                answerArray[j] = document.getElementById(("s"+stepnum+"-i"+j)).value;
            } 
        }

        var thislevelArray = [];

        for (var i = 0; i <arraynumberslist.length; i++) {
            thislevelArray[i] = arraynumberslist[i];
        }


        mergeSortAlgorithm(thislevelArray, 0, arraySize - 1, compareLArray, compareRArray);

        var splitsx = splitcheck();

        var splitcountchecker= 0;
        for (i=0; i< answerArray.length;i++){
            //not at a split
            if(splitsx[stepnum][i] !== "split") {
                if(answerArray[i] !== thislevelArray[i+splitcountchecker]){
                    useriscorrect=false;
                }
            }
            
            //is at a split
            else {
                splitcountchecker++;
                if (answerArray[i] !== ""){
                    useriscorrect=false;
                }
            } 


        }
        
        //go to next step-- make all cells in top uneditable

    };



    render() {
        return (<div><DragDropContext onDragEnd={this.onDragEnd}><div id="root">{/* enclosing div*/}
            <div id="all the top stuff">
                <div class="topnav">{/* navbar */}
                    <b>MergeSort Algorithm: Level 5</b>
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

                <div id= "toptext2" class="instructions hidden">
                    <h3>{ this.state.toptext2} </h3>
                </div>

                <div id= "NANwarning" class="hidden">
                    <h3 class="nanwarning">One or more of your inputs is not a number</h3><h3></h3>
                    <h3 class="nanwarning">Try again!</h3>
                    
                </div>

            </div>
<div id=" top array stuff">
            <Droppable droppableId="TopDropBoxDropID" direction="horizontal" isDropDisabled={true}>
                {(provided, snapshot) => (

                    <div id="TopArrayHidden" class = "hidden">
                        
                        
                        <TopDropBox id="topArrayBox" ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
                            
                            
                            {arraynumberslist.map((number, index) => (
                
                                <Draggable key={number.id} draggableId={number.id} index={index}>
                                    {(provided, snapshot) => ( 

                                        <React.Fragment>
                                            <div class="arrayElement" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} style={provided.draggableProps.style}>
                                                
                                                
                                                {number.content}
                                
                                        
                                            </div>
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
</div>

<div id="nexthidden">

            <div id="stepstablehidden"> {/*hide everything below to show next step */}
                <div id="stepstable" class="centerdiv hidden">
                    
                    <table class="buttonsTableStyle">
                        <td width="5%" class="buttonsArrayCells">
                            <div class="groupboxdivleft"> 
                                <input 
                                    type="button"
                                    value="+"
                                    id= "addgroupbutton"
                                    class="groupBox"
                                    onClick={additembox} 
                                />
                            </div>
                        </td>
                        
                        <td class="itembigtablecells">
                            <div>   
                                <table class="itemsTableStyle">
                                    <tr id="stepnumber-0">
                                        <td>
                                            <input class="itembox" id ="s0-i0" type="text"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                        
                        <td width="5%" class="buttonsArrayCells">
                            <div class="groupboxdivright"> 
                                <input 
                                    type="button"
                                    value="-"
                                    id= "subgroupbutton"
                                    class="groupBox"
                                    onClick={subitembox}
                                />
                            </div>
                        </td>{/*for sub button cell*/}
                    </table> {/*for tablebuttons */}
                </div> {/*for stepstable */}
            </div>{/* for stepstablehidden */}


    <div id="bottom stuff">                      
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