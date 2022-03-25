// declare global variables

//these 3 are all that get changed to update the array parameters
var arraySize = 5;
var arrayMax = 20;
var arrayMin = 1;


var mergesortstepresult = [];

var firstCall = true;
var levelArray = new Array(arraySize);
var finalLevelArray = new Array(arraySize);
var compareLArray;
var compareRArray;
var compareL;
var compareR;

var isAtMiddle = true;
var isSplittingL = true;
var isSplittingR = false;

var middleIndextotal = 0 + parseInt(((arraySize - 1) - 0) / 2);
var remainingLArray = [];
var remainingRArray = [];


//define array/get random numbers
levelArray = RandomNumbersArray(arraySize, arrayMax, arrayMin);
var originalLevelArray = levelArray;

//print starting array to console
process.stdout.write("Original Array to sort: "); print(levelArray, arraySize); console.log(""); console.log("");

//call merge sort and print each step
mergeSortAlgorithm(levelArray, 0, arraySize - 1, compareLArray, compareRArray);

//print final arrayc
console.log(""); console.log(""); process.stdout.write("This is the final sorted array: "); print(levelArray, arraySize);

/*--------------------------Functions----------------------------*/

function RandomNumbersArray(size, max, min){
    var count = 1;
    var rangeSize = max-min+1;
    var numbersArray = new Array(size);
    var randomNum = 0;

    // populate the array
    for(var j = 0; j < size; j++) {
        numbersArray[j] = 0;
    }//end of for loop

    for (var i = 0;i < size; i++){
        do {
            randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        } while((count<= rangeSize) && (InNumberList(numbersArray,randomNum, size)));

        numbersArray[i] = randomNum;
        count++;

    }//end of for loop
    return numbersArray;
}//end of reandom numbers array function
  
function InNumberList(numbersArray, randomNum, size) {
    // check the numbers to make sure it is not already in the array
    for(var j = 0; j < size; j++) {
      if (numbersArray[j] == randomNum){
        return true;
      }
    }
    return false;
}//end of in numbers list function

function print(array, size) {
    for (var i = 0; i < size; i++){
        process.stdout.write("["+array[i] + "]");
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
    

    if(middleIndex === middleIndextotal ) {
        //setting the left side full
        for (let i = 0; i <= middleIndex; i++){
            remainingLArray[i] = array[i];
        }
        
        //setting right side full
        for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
            remainingRArray[k] = array[j];
        }
    }

    // else if (middleIndex < middleIndextotal) {
    //     //setting the left side full
    //     for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
    //         remainingLArray[y] = array[i];
    //     }

    //     var temprarray = remainingRArray;

    //     //setting right side full
    //     for (let j = 0 ;j <= temprarray.length; j++){
    //         remainingRArray[j] = temprarray[j];
    //     }

    // }
    console.log(remainingLArray);

    console.log(remainingRArray);


    //outputing a split
    //STOP
    // if(currentstepcheck === mergestepcurrentstep && !hasHitStep) {
    //      //setting the left side of the numbers to compare
    //     for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
    //         compareLArray[y] = array[i];
    //     }
        

    //     //setting right side of the numbers to compare
    //     for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
    //         compareRArray[k] = array[j];
    //     }

    //     mergesortstepresult = [];
        
     
    // }


    //outputing a split
    process.stdout.write("Splitting numbers: "); print(compareLArray, leftSideSize); process.stdout.write("   "); print(compareRArray, rightSideSize); console.log(" "); console.log(" ");

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
        console.log(" "); console.log(" "); process.stdout.write("Comparing: " + left[i] + " & "+ right[j]);
        if (left[i] <= right[j]) {
            array[k] = left[i];
            console.log("  --->  "+left[i]+" is smaller than or equal to "+right[j]);
            console.log(" ");
            console.log("Inserting "+left[i]+" to the array at index "+k);
            console.log(" ");
            process.stdout.write("The updated array looks like this: "); print(array,arraySize); console.log(" ");
            i++;
        }
        else {
            array[k] = right[j];
            console.log("  --->  "+right[j]+" is smaller than "+left[i]);
            console.log(" "); console.log("Inserting "+right[j]+" to the array at index "+k);
            console.log(" "); process.stdout.write("The updated array looks like this: "); print(array,arraySize); console.log(" ");
            j++;
        }
        k++;
    }

    
    console.log(" "); process.stdout.write("Inserting any remaining numbers from the left side:"); 
    if (!(i < lSize)){
        process.stdout.write(" No numbers to add");
    }
    while (i < lSize) {
        process.stdout.write(" "+left[i]+" at index "+k+".");
        array[k] = left[i];
        i++;
        k++;
    }

    
    console.log(" "); console.log(" "); process.stdout.write("Inserting any remaining numbers from the right side:"); 
    if (!(j < rSize)){
        process.stdout.write(" No numbers to add")
    }
    while (j < rSize) {
        process.stdout.write(" "+right[j]+" at index "+k+".");
        array[k] = right[j];
        j++;
        k++;
    }
    
    console.log(" "); console.log(" "); process.stdout.write("This is the array after the merge: "); print(array, arraySize); console.log(" "); console.log(" "); console.log(" ");
}//end of the merge function