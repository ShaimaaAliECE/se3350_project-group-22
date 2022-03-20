//document.getElementById("startHeader").classList.toggle("show");
//document.getElementById("step1").value = "Step1: A set of 10 numbers is randomly generated!";

//const element = document.getElementById("demo");
//element.remove();
import wrongaudio from "../../../sounds/wrong.mp3";
import correctaudio from "../../../sounds/correct.mp3";

var allSplit = false;
var size = 20;
var max = 50;
var min = 1;
var numbersArray = new Array(size);


export function Start() {

    numbersArray = RandomNumbersArray(size, max, min);
  
    //remove header and start button
    var startheaderremove = document.getElementById("startHeader");
    startheaderremove.remove();
    var startbttnremove = document.getElementById("startBttn");
    startbttnremove.remove();
    BuildArrayTable();

    //show the first step header
    document.getElementById("instructionHeader").classList.remove("hidden");
    document.getElementById("choiceinstructionHeader").classList.remove("hidden");
    document.getElementById("choiceBttns").classList.remove("hidden");

    //show array in table



    //
   
  
}//end of start function


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
            cells[i][x].innerHTML = numbersArray[x];
            rows[rows.length - 1].appendChild(cells[i][x]);
        }
    }
}
  
export function SplitChoice() {
    if(allSplit) {
        //wrong answer
        //wrongaudio.play();

    }
    else{
        //right answer
        //correctaudio.play();
        document.getElementById("choiceinstructionHeader").classList.add("hidden");
        document.getElementById("choiceBttns").classList.add("hidden");
        document.getElementById("choicefeedbackHeader").value = "Correct Answer";
    }
}

export function MergeChoice() {  
    if(allSplit) {
        //right answer
        //correctaudio.play();
        document.getElementById("choiceinstructionHeader").classList.add("hidden");
        document.getElementById("choiceBttns").classList.add("hidden");        
    }
    else{
       //wrong answer
       //wrongaudio.play();
    }
}


/* ************* Backend Functions - no need to export ************** */


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