// declare global variables

//these 3 are all that get changed to update the array parameters
var arraySize = 11;
var arrayMax = 50;
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

    var beforesplitLsize = compareLArray.length;
    var beforesplitRsize = compareRArray.length;

    //setting the left side of the numbers to compare
    for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
        compareLArray[y] = array[i];
    }
    
    //setting right side of the numbers to compare
    for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
        compareRArray[k] = array[j];
    }

    //if its the first step
    if(middleIndex === middleIndextotal ) {
        for(let x = 0; x < compareLArray.length; x++){
            remainingLArray[x] = compareLArray[x];
        }

        for(let x = 0; x < compareRArray.length; x++){
            remainingRArray[x] = compareRArray[x];
        }
        
        for(let x = 0; x < remainingLArray.length; x++){
            mergesortstepresult[x] = remainingLArray[x];
        }

        mergesortstepresult[mergesortstepresult.length] = "split";

        for(let m = (mergesortstepresult.length), r = 0; r < remainingRArray.length; r++, m++){
            mergesortstepresult[m] = remainingRArray[r];
        }

        var tempRArray =[];

        for(let x = 0; x < remainingRArray.length; x++){
            tempRArray[x] = remainingRArray[x];
        }

        remainingRArray[0] = "split";
        
        for(let m = 1, r = 0; r < tempRArray.length; r++, m++){
            remainingRArray[m] = tempRArray[r];
        }

        // console.log("remainingLArray");
        // console.log(remainingLArray);
        // console.log("remainingRArray");
        // console.log(remainingRArray);

        console.log("mergesortstepresult");
        console.log(mergesortstepresult);
    }

    //if its going down splitting the left side
    else if (middleIndex < middleIndextotal) {

        remainingLArray = [];

        for(let x = 0; x < (compareLArray.length); x++){
            remainingLArray[x] = compareLArray[x];
        }
        
        var tempRArray =[];

        for(let x = 0; x < remainingRArray.length; x++){
            tempRArray[x] = remainingRArray[x];
        }

        remainingRArray[0] = "split";

        for(let x = 0, r=1; x < compareRArray.length; r++,x++){
            remainingRArray[r] = compareRArray[x];
        }


        for(let x = 0, r=(compareRArray.length+1); x < tempRArray.length; r++,x++){
            remainingRArray[r] = tempRArray[x];
        }

        mergesortstepresult = [];

        for(let x = 0; x < remainingLArray.length; x++){
            mergesortstepresult[x] = remainingLArray[x];
        }


        for(let m = (mergesortstepresult.length), r = 0; r < remainingRArray.length; r++, m++){
            mergesortstepresult[m] = remainingRArray[r];
        }

        console.log("mergesortstepresult");
        console.log(mergesortstepresult)

    
        
    }

    // if(currentstepcheck === mergestepcurrentstep && !hasHitStep) {
    //      //setting the left side of the numbers to compare
    //     for (let i =leftIndex,y=0; i <= middleIndex;y++,i++){
    //         compareLArray[y] = array[i];
    //     }
        

    //     //setting right side of the numbers to compare
    //     for (let j = (middleIndex + 1), k= 0;j <= rightIndex; k++ , j++){
    //         compareRArray[k] = array[j];
    //     }

    //     mergesortstepresulttosend = [];
        
     
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
   

    // //if its going down splitting the right side
    // if (middleIndex > middleIndextotal) {

    //     remainingLArray = [];

    //     for(let x = 0; x < (compareLArray.length); x++){
    //         remainingLArray[x] = compareLArray[x];
    //     }
        
    //     var tempRArray =[];

    //     for(let x = 0; x < remainingRArray.length; x++){
    //         tempRArray[x] = remainingRArray[x];
    //     }

    //     remainingRArray[0] = "split";

    //     for(let x = 0, r=1; x < compareRArray.length; r++,x++){
    //         remainingRArray[r] = compareRArray[x];
    //     }


    //     for(let x = 0, r=(compareRArray.length+1); x < tempRArray.length; r++,x++){
    //         remainingRArray[r] = tempRArray[x];
    //     }

    //     mergesortstepresult = [];

    //     for(let x = 0; x < remainingLArray.length; x++){
    //         mergesortstepresult[x] = remainingLArray[x];
    //     }


    //     for(let m = (mergesortstepresult.length), r = 0; r < remainingRArray.length; r++, m++){
    //         mergesortstepresult[m] = remainingRArray[r];
    //     }

    //     console.log("mergesortstepresult");
    //     console.log(mergesortstepresult)

    
        
    // }
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

    console.log("remainingLArray");
    console.log(remainingLArray);
    console.log("compareRArray");
    console.log(remainingRArray);

    var tempLArray =[];

    for(let x = 0; x < (remainingLArray.length); x++){
            tempLArray[x] = remainingLArray[x] 
    }

    var tempRArray =[];

    for(let x = 0; x < (remainingRArray.length); x++){
            tempRArray[x] = remainingRArray[x] 
    }

    for(let x = 0,l=1; x < 2; l++,x++){
        remainingLArray[l] = remainingRArray[x];
    }
    
    
    var tempLArray2 =[];

    for(let x = 0; x < (remainingLArray.length); x++){
            tempLArray2[x] = remainingLArray[x] 
    }

    remainingLArray = [];

    for(let x = 0, l=0; x < (tempLArray2.length-2) ;l++,x++){
        remainingLArray[x] = tempLArray2[x];
    }

    remainingLArray[tempLArray2.length-2] = tempLArray2[tempLArray2.length-1];


    var tempArraytocompareNumbers =[];

    for(let x = remainingLArray.length-2; x < (remainingLArray.length); x++){
        tempArraytocompareNumbers[x] = remainingLArray[x] 
    }

    if (tempArraytocompareNumbers[0] >tempArraytocompareNumbers[1]){
        remainingLArray[remainingLArray.length-2]= tempArraytocompareNumbers[1];
        remainingLArray[remainingLArray.length-1]= tempArraytocompareNumbers[0];

    }

    remainingRArray = [];

    for(let x = 0,r=2; r < tempRArray.length; r++,x++){
        remainingRArray[x] = tempRArray[r];
    }

    mergesortstepresult = [];

    for(let x = 0; x < remainingLArray.length; x++){
        mergesortstepresult[x] = remainingLArray[x];
    }

    for(let m = (mergesortstepresult.length), r = 0; r < remainingRArray.length; r++, m++){
        mergesortstepresult[m] = remainingRArray[r];
    }

    console.log("remainingLArray");
    console.log(remainingLArray);
    console.log("compareRArray");
    console.log(remainingRArray);
    console.log("\n\nmergesortstepresult-end of merge");
    console.log(mergesortstepresult);





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



    

    // console.log("mergesortstepresult");
    // console.log(mergesortstepresult);
    // console.log("remainingLArray");
    // console.log(remainingLArray);
    // console.log("compareLArray");
    // console.log(remainingLArray);
    
    console.log(" "); console.log(" "); process.stdout.write("This is the array after the merge: "); print(array, arraySize); console.log(" "); console.log(" "); console.log(" ");
}//end of the merge function

// var tempLArray =[];

//     for(let x = 0; x < (remainingLArray.length); x++){
//             tempLArray[x] = remainingLArray[x] 
//     }

//     var tempRArray =[];

//     for(let x = 0; x < (remainingRArray.length); x++){
//             tempRArray[x] = remainingRArray[x] 
//     }

//     for(let x = 0,l=1; x < 2; l++,x++){
//         remainingLArray[l] = remainingRArray[x];
//     }
    
    
//     var tempLArray2 =[];

//     for(let x = 0; x < (remainingLArray.length); x++){
//             tempLArray2[x] = remainingLArray[x] 
//     }

//     remainingLArray = [];

//     for(let x = 0, l=0; x < (tempLArray2.length-2) ;l++,x++){
//         remainingLArray[x] = tempLArray2[x];
//     }

//    remainingLArray[tempLArray2.length-2] = tempLArray2[tempLArray2.length-1];


//    var tempArraytocompareNumbers =[];

//     for(let x = remainingLArray.length-2; x < (remainingLArray.length); x++){
//         tempArraytocompareNumbers[x] = remainingLArray[x] 
//     }
 
//     if (tempArraytocompareNumbers[0] >tempArraytocompareNumbers[1]){
//         remainingLArray[remainingLArray.length-2]= tempArraytocompareNumbers[1];
//         remainingLArray[remainingLArray.length-1]= tempArraytocompareNumbers[0];

//     }

//     remainingRArray = [];

//     for(let x = 0,r=2; r < tempRArray.length; r++,x++){
//         remainingRArray[x] = tempRArray[r];
//     }





//     mergesortstepresult = [];

//     for(let x = 0; x < remainingLArray.length; x++){
//         mergesortstepresult[x] = remainingLArray[x];
//     }


//     for(let m = (mergesortstepresult.length), r = 0; r < remainingRArray.length; r++, m++){
//         mergesortstepresult[m] = remainingRArray[r];
//     }



//     console.log("\n\nmergesortstepresult-end of merge");
//     console.log(mergesortstepresult)