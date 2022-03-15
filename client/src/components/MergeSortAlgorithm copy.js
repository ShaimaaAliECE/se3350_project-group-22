// declare global variables

//these 3 are all that get changed to update the array parameters
var arraySize = 5;
var arrayMax = 20;
var arrayMin = 1;


var firstCall = true;

var levelArray = new Array(arraySize);
var finalLevelArray = new Array(arraySize);

var compareL;
var compareR;


//define array/get random numbers
levelArray = RandomNumbersArray(arraySize, arrayMax, arrayMin);
var originalLevelArray = levelArray;

//print starting array to console
process.stdout.write("Original Array to sort: "); print(levelArray, arraySize);
console.log(""); console.log("");

//call merge sort and print each step - passes array name, index 0, final index number
mergeSortAlgorithm(levelArray, 0, arraySize - 1);


//print final array
console.log(""); console.log("");
process.stdout.write("This is the final sorted array: "); print(levelArray, arraySize);
console.log(""); console.log("");

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
    //console.log(" ");
    //console.log("the merge split algorithm was called: thisblocksize: "+thisBlockSize+", array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //if the start index has become equal or less than the end index then the merge sort is done
    if(leftIndex >= rightIndex) {
        return;
    }//end of if 
    
    //set the middle index
    var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
    var newBlockCheck;
    
    if((arraySize % 2)==0){//even
        newBlockCheck = (arraySize/2)-1;
    }

    else{
        newBlockCheck = Math.ceil(arraySize/2); 
    }

    if(middleIndex == newBlockCheck) {
        firstCall = true;
    }

    if(firstCall){
        var thisBlockSize = arraySize - leftIndex;
        firstCall = false;
    }
    else {
        var thisBlockSize = arraySize - (arraySize -(rightIndex+1));
    }
    var rightSideSize = rightIndex - middleIndex;
    var leftSideSize = thisBlockSize - rightSideSize;
    
    var compareLArray = new Array(leftSideSize);
    var compareRArray = new Array(rightSideSize);
    
    //console.log("after setting the variables: thisblocksize: "+thisBlockSize+", array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //console.log(" ");

    //setting the left side of the numbers to compare
    for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
        compareLArray[y] = array[i];
    }
    
    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }

    console.log("after setting the for loops: array: firstCall: "+firstCall+" array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    process.stdout.write("Splitting numbers: "); print(compareLArray, leftSideSize); process.stdout.write("   "); print(compareRArray, rightSideSize); console.log(" "); console.log(" ");

    
    //console.log("calling function recursive split (using left indexes) middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: ",+leftSideSize+", rightSideSize: "+rightSideSize+", 
    //recursively merge sorting the left (start) side
    mergeSortAlgorithm(array, leftIndex, middleIndex, compareLArray, compareRArray);
    //console.log("left split was returned,: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    
    //setting the left side of the numbers to compare
    for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
        compareLArray[y] = array[i];
    }

    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }
   
    //console.log("calling function recursive split (using right indexes) middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //recursively merge sorting the left (start) side
    mergeSortAlgorithm(array, middleIndex + 1, rightIndex, compareLArray, compareRArray);
    //console.log("right split was returned,: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //console.log(" ");

    //merging the array
    //console.log("calling merge function: array: "+array+"middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
   
    merge(array, leftIndex, middleIndex, rightIndex, compareLArray, compareRArray);
    //console.log("merge is done now recursing: array: "+array+",middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //console.log(" ");
}//end of the mergesortalgorithm function




















function merge(array, leftIndex, middleIndex, rightIndex) {
    var n1 = middleIndex - leftIndex + 1;
    var n2 = rightIndex - middleIndex;

    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = array[leftIndex + i];
    for (var j = 0; j < n2; j++)
        R[j] = array[middleIndex + 1 + j];

    //console.log("copying temp data to L "+L);
    //console.log("copying temp data to R "+R);

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = leftIndex;

    while (i < n1 && j < n2) {
        console.log(" ");console.log(" ");
        process.stdout.write("Comparing: " + L[i] + " & "+ R[j]);
        if (L[i] <= R[j]) {
            array[k] = L[i];
            console.log("  --->  "+L[i]+" is smaller than or equal to "+R[j]);
            console.log(" ");
            console.log("Inserting "+L[i]+" to the array at index "+k);
            console.log(" ");
            process.stdout.write("The updated array looks like this: "); print(array,arraySize); console.log(" ");
            i++;
        }
        else {
            array[k] = R[j];
            console.log("  --->  "+R[j]+" is smaller than "+L[i]);
            console.log(" ");
            console.log("Inserting "+R[j]+" to the array at index "+k);
            console.log(" ");
            process.stdout.write("The updated array looks like this: "); print(array,arraySize); console.log(" ");
            j++;
        }
        k++;
    }
    
    // Copy the remaining elements of
    // L[], if there are any
    console.log(" ");
    process.stdout.write("Inserting any remaining numbers from the left side:"); 
    if (!(i < n1)){
        process.stdout.write(" No numbers to add");
    }
    while (i < n1) {
        process.stdout.write(" "+L[i]+" at index "+k+".");
        array[k] = L[i];
        i++;
        k++;
    }
   
    // Copy the remaining elements of
    // R[], if there are any
    console.log(" ");console.log(" ");
    process.stdout.write("Inserting any remaining numbers from the right side:"); 
    if (!(j < n2)){
        process.stdout.write(" No numbers to add")
    }
    while (j < n2) {
        process.stdout.write(" "+R[j]+" at index "+k+".");
        array[k] = R[j];
        j++;
        k++;
    }
    console.log(" "); console.log(" ");
    process.stdout.write("This is the array after the merge: "); print(array, arraySize); console.log(" "); console.log(" "); console.log(" ");
}//end of the merge function