// declare global variables

//these 3 are all that get changed to update the array parameters
var arraySize = 5;
var arrayMax = 20;
var arrayMin = 1;
var count = 0;

var firstCall = true;
var levelArray = new Array(arraySize);
var finalLevelArray = new Array(arraySize);
var compareLArray;
var compareRArray;
var lArray = [];
var rArray = [];
var compareL;
var compareR;


//define array/get random numbers
//levelArray = RandomNumbersArray(arraySize, arrayMax, arrayMin);
var originalLevelArray = levelArray;

//print starting array to console
// process.stdout.write("Original Array to sort: "); print(levelArray, arraySize); console.log(""); console.log("");

//call merge sort and print each step
//mergeSortAlgorithm(levelArray, 0, arraySize - 1, compareLArray, compareRArray);

//print final array
//console.log(""); console.log(""); process.stdout.write("This is the final sorted array: "); print(levelArray, arraySize);

/*--------------------------Functions----------------------------*/

export function printArray(array, size) {
    for (var i = 0; i < size; i++){
        console.log("["+array[i] + "]");
    }
}//end of print function

export function setLArray(compareLArray,leftArr){
    var lHolder = [];
    for(let i = 0; i < compareLArray.length; i++){
        //set the left array to send
        lHolder.push(compareLArray[i]);
    }
    
}

export function getLArray(leftArr, count){
    console.log("lHolder " + leftArr[count]);
    return leftArr[count];
}

export function mergeSortAlgorithm(array, leftIndex, rightIndex, compareLArray, compareRArray, mergeCount, leftArr) {
    console.log("The count is: " + mergeCount);
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
    //set the left array
    setLArray(compareLArray,leftArr);
    
    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }

    //outputing a split //, leftSideSize , rightSideSize
    console.log("Splitting numbers: "); console.log(compareLArray); console.log("   "); console.log(compareRArray); console.log(" "); console.log(" ");

    //recursively spliting the left side
    //add count by 1
    console.log("left count: " + mergeCount);
    mergeCount = mergeCount + 1;
    mergeSortAlgorithm(array, leftIndex, middleIndex, compareLArray, compareRArray, mergeCount, leftArr);
    
    //setting the left side of the numbers to compare
    for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
        compareLArray[y] = array[i];
    }

    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }
    console.log("right count: " + count);
    //recursively merge sorting the right (end) side
    mergeSortAlgorithm(array, middleIndex + 1, rightIndex, compareLArray, compareRArray, mergeCount, leftArr);
    
    //merging the array
    mergeArray(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray);
}//end of the mergesortalgorithm function

//merge function
export function mergeArray(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray) {
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
            console.log("The updated array looks like this: "); console.log(array,arraySize); console.log(" ");
            i++;
        }
        else {
            array[k] = right[j];
            console.log("  --->  "+right[j]+" is smaller than "+left[i]);
            console.log(" "); console.log("Inserting "+right[j]+" to the array at index "+k);
            console.log(" "); console.log("The updated array looks like this: "); console.log(array,arraySize); console.log(" ");
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
    
    console.log(" "); console.log(" "); console.log("This is the array after the merge: "); console.log(array, arraySize); console.log(" "); console.log(" "); console.log(" ");
}//end of the merge function