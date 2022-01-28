function RandomNumbersArray(size, max, min){
    
    var numbersArray = new Array(size);
    var randomID = 0;

    for (i = 0;i < size; i++){
        do {
            randomID = Math.floor(Math.random() * (max - min) ) + min;
      
        } while(InIDList(randomid));

        numbersArray[size] = randomID;

    }
  
    return numbersArray;
};
  
function InIDList(randomID) {
    // check the ids to make sure it is not already in it
    for(var j = 0; j < matrixSize; j++) {
      if (positions[1][j] == randomID){
        return true;
      }
    }
    return false;
};