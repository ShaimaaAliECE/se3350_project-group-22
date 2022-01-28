const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.static('src'));



// ------------------------------------------------- code for level one -------------------------------------------------------

export function RandomNumbersArray(size, max, min){
    var count = 1;
    var rangeSize = max-min+1;
    var numbersArray = new Array(size);
    var randomNum = 0;
  
    // populate the array
    for(var j = 0; j < size; j++) {
        numbersArray[j] = 0;
    }
  
    for (var i = 0;i < size; i++){
        do {
            randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
      
        } while((count<= rangeSize) && (InNumberList(numbersArray,randomNum, size)));
  
        numbersArray[i] = randomNum;
        count++;
  
    }
  
    return numbersArray;
  };
  
  function InNumberList(numbersArray, randomNum, size) {
    // check the numbers to make sure it is not already in the array
    for(var j = 0; j < size; j++) {
      if (numbersArray[j] == randomNum){
        return true;
      }
    }
    return false;
  };


// handles returning the next step of the algorithm
app.get('/next-step', (req, res, next) => {

  
});

app.get('/prev-step', (req, res, next) => {

});

// handles generating an array of any number of numbers in a given range
app.get('/generate-numbers', (req, res, next)=> {
    // get range and number of numbers from the request object
    let range = req.query.range;
    let num = req.query.num;
    let randomNumsArr=[range, num];   // define array of hold generated numbers

    // --------------------- code to generate random numbers goes here ----------------------- 

    // push the numbers from the algorithm into the array 
    // send back the array of random numbers generated
    res.send(randomNumsArr);
});


// handles verifying the user's input
app.get('/check-answer', (req, res, next) => {

});

app.listen(3000);

