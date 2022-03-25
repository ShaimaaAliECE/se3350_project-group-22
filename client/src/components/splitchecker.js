var arraySize = 5;
var arrayMax = 20;
var arrayMin = 1;



var leftIndex = 0;
var rightIndex = arraySize-1;
var middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);

const middleIndextotal = middleIndex;

var array = [1,2,3,4,5];

var isonleft = true;

var isfirst = true;

var splits = [[]];

var stepnum = 0;

var rightsideSave = [];
var leftsideSave = [];

var numoflsplits = 0;

splitcheck();

function splitcheck () {
    var lengths = findDim(splits);

    if (middleIndextotal % 2 === 0) {
        numoflsplits = middleIndextotal ;
    }
    else {
        numoflsplits = middleIndextotal + 1;
    }
    
    
    if(isfirst) {
        
        for (let x=0;x <= middleIndex;x++){
            splits[stepnum][x] = array[x];
        }
       
        splits[stepnum][middleIndex+1] = "split";

        for (let x = middleIndex+1, y = 0;x< array.length;y++,x++){
            rightsideSave[y] = array[x];
        }
    
        for (let x = middleIndex+1, y = middleIndex+2;x< array.length;y++,x++){
            splits[stepnum][y] = array[x];
        }

        isfirst = false;
    }

    lengths = findDim(splits);
    
    splits.push([]);

    for(let x = 0; x < lengths[1]; x++){
        
        splits[stepnum+1][x] = splits[stepnum][x];
    }
    
    while(numoflsplits > 0) {
        
        lengths = findDim(splits);
        var lengthx = lengths[1]+1;
        stepnum++;
        splits.push([]);
        
        rightIndex = middleIndex;
        leftIndex = 0;
        middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
       
        for(let x = 0; x < lengths[1]; x++){
        
            array[x] = splits[stepnum][x];
        }

     
    
        for (let x=0 ;x <= middleIndex; x++){
            
            splits[stepnum][x] = array[x];

        }
        
        splits[stepnum][middleIndex+1] = "split";
    
        for (let x = middleIndex+1, y = middleIndex+2;x< array.length;y++,x++){
    
            splits[stepnum][y] = array[x];
        }

        numoflsplits--;
        
        for(let x = 0; x < lengthx; x++){
        
            splits[stepnum+1][x] = splits[stepnum][x];
        }
    }

    console.log(splits);

return splits;
}

function findDim(a){
    var mainLen = 0;
    var subLen = 0;

    mainLen = a.length;

    for(var i=0; i < mainLen; i++){
        var len = a[i].length;
        subLen = (len > subLen ? len : subLen);
    }

    return [mainLen, subLen];
};

