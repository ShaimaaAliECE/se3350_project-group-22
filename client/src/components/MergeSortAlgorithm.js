// declare global variables

//these 3 are all that get changed to update the array parameters
var arraySize = 4;
var arrayMax = 20;
var arrayMin = 1;

var levelArray = new Array(arraySize);
var finalLevelArray = new Array(arraySize);

var compareL;
var compareR;


//define array/get random numbers
levelArray = RandomNumbersArray(arraySize, arrayMax, arrayMin);
var originalLevelArray = levelArray;

//print starting array to console
console.log(""); console.log("");
console.log("this is the original array");
print(levelArray, arraySize);
console.log(""); console.log("");


//call merge sort and print each step
//passes array name, index 0, final index number
mergeSortAlgorithm(levelArray, 0, arraySize - 1);


//print final array
console.log(""); console.log("");
console.log("this is the final sorted array");
print(levelArray, arraySize);
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
        process.stdout.write(array[i] + " ");
    }
}//end of print function























function mergeSortAlgorithm(array, leftIndex, rightIndex) {
    console.log(" ");
    console.log("the merge split algorithm was called: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //if the start index has become equal or less than the end index then the merge sort is done
    if(leftIndex >= rightIndex) {
        return;
    }//end of if 
    
    //set the middle index
    var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
   
    var leftSideSize = (leftIndex + middleIndex + 1);
    var rightSideSize = rightIndex - middleIndex;
    
    var compareLArray = new Array(leftSideSize);
    var compareRArray = new Array(rightSideSize);
    
    console.log("after setting the variables: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    console.log(" ");


    //setting left side of the array being done
    for (let i = 0; i <= middleIndex; i++){
        //console.log("l is working, copying array i=:"+ array[i]);
        compareLArray[i] = array[i];
    }
    
    let k = 0;
    //setting right side of the array being done
    for (let j = (middleIndex + 1);j <= rightIndex; k++ , j++){
        //console.log("r is working, copying array j=:"+ array[j]);
        compareRArray[k] = array[j];
    }
    //console.log("compareLArray length: "+compareLArray.length);
    //console.log("compareRArray length: "+compareRArray.length);

    console.log("after setting the for loops: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    console.log(" ");

    
    console.log("calling function recursive split (using left indexes) middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: ",+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //recursively merge sorting the left (start) side
    mergeSortAlgorithm(array, leftIndex, middleIndex);
    console.log("left split was returned,: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    console.log(" ");

    for (let i = 0; i <= middleIndex; i++){
        //console.log("l is working, copying array i=:"+ array[i]);
        compareLArray[i] = array[i];
    }
    
    k = 0;
    //setting right side of the array being done
    for (let j = (middleIndex + 1);j <= rightIndex; k++ , j++){
        //console.log("r is working, copying array j=:"+ array[j]);
        compareRArray[k] = array[j];
    }
   
    console.log("calling function recursive split (using right indexes) middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    //recursively merge sorting the left (start) side
    mergeSortAlgorithm(array, middleIndex + 1, rightIndex);
    console.log("right split was returned,: array: "+array+", middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    console.log(" ");

    // for (let i = 0; i <= middleIndex; i++){
    //     //console.log("l is working, copying array i=:"+ array[i]);
    //     compareLArray[i] = array[i];
    // }
    
    // k = 0;
    // //setting right side of the array being done
    // for (let j = (middleIndex + 1);j <= rightIndex; k++ , j++){
    //     //console.log("r is working, copying array j=:"+ array[j]);
    //     compareRArray[k] = array[j];
    // }


    //merging the array
    console.log("calling merge function: array: "+array+"middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    merge(array, leftIndex, middleIndex, rightIndex);
    console.log("merge is done now recursing: array: "+array+",middle index: "+middleIndex+", leftIndex: "+leftIndex+", rightIndex: "+rightIndex+ ", leftSideSize: "+leftSideSize+", rightSideSize: "+rightSideSize+", compareLArray: "+ compareLArray+", compare RArray: "+compareRArray);
    console.log(" ");
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

    console.log("copying temp data to L "+L);
    console.log("copying temp data to R "+R);

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = leftIndex;

    while (i < n1 && j < n2) {
        console.log("comparing : " + L[i] + " and "+ R[j]);
        if (L[i] <= R[j]) {
            array[k] = L[i];
            console.log("copying "+L[i]+" to array at index: "+k+"   new array: "+array)
            i++;
        }
        else {
            array[k] = R[j];
            console.log("copying "+R[j]+" to array at index: "+k+"   new array: "+array)
            j++;
        }
        k++;
    }
    
    console.log("copying any leftover L array numbers from L: " + L);
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        console.log("copying left: "+ L[i]+ " to array at index "+k);
        array[k] = L[i];
        i++;
        k++;
    }

    console.log("array: "+array); 
   

    // Copy the remaining elements of
    // R[], if there are any
    console.log("copying any leftover R array numbers from R: " + R);
    while (j < n2) {
        console.log("copying right: "+ R[j]+ " to array at index "+k);
        array[k] = R[j];
        j++;
        k++;
    }
    console.log("array: "+array);
}//end of the merge function