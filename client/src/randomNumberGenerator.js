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