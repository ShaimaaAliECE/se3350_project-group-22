//document.getElementById("startHeader").classList.toggle("show");
//document.getElementById("step1").value = "Step1: A set of 10 numbers is randomly generated!";

//const element = document.getElementById("demo");
//element.remove();
import wrongaudio from "../../../sounds/wrong.mp3";
import correctaudio from "../../../sounds/correct.mp3";
import { Draggable } from "react-beautiful-dnd";


var size = 20;
var max = 50;
var min = 1;
var numbersArray = new Array(size);
var numOfGroups =1;


export function Start() {

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


export function addgroup() {
    var row = document.getElementById("1row");
    var x = row.insertCell(-1);
    x.classList.add("groupArrayCells");
    //x.setAttribute(ondrop, drop(event));
    //x.ondrop="drop(event)" ondragover="allowDrop(event)"
    numOfGroups++;
}//end of addgroup

export function subgroup() {
    var row = document.getElementById("1row");
    row.deleteCell(0);
    numOfGroups--;
}//end of addgroup

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