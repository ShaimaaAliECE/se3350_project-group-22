export function Random() {
    var size = 10;
    var max = 20;
    var min = 1;
    var numbersArray = new Array(size);
    numbersArray = RandomNumbersArray(size, max, min);
  
    //show the steps
    var show1 = document.getElementById("StartLevel");
    show1.classList.toggle("show");
    //random assign stuff
    var rnd = numbersArray[0];
    var rnd2 = numbersArray[1];
    var rnd3 = numbersArray[2];
    var rnd4 = numbersArray[3];
    var rnd5 = numbersArray[4];
    var rnd6 = numbersArray[5];
    var rnd7 = numbersArray[6];
    var rnd8 = numbersArray[7];
    var rnd9 = numbersArray[8];
    var rnd10 = numbersArray[9];
  
    document.getElementById("tb").value = rnd;
    document.getElementById("tb2").value = rnd2;
    document.getElementById("tb3").value = rnd3;
    document.getElementById("tb4").value = rnd4;
    document.getElementById("tb5").value = rnd5;
    document.getElementById("tb6").value = rnd6;
    document.getElementById("tb7").value = rnd7;
    document.getElementById("tb8").value = rnd8;
    document.getElementById("tb9").value = rnd9;
    document.getElementById("tb10").value = rnd10;
  
  }
  
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
      if (numbersArray[j] == randomNum) {
        return true;
      }
    }
    return false;
  }

  export function Next() {
    var show = document.getElementById("showStep2");
    show.classList.toggle("show");
  
    var step2 = document.getElementById("step2");
    step2.value = "Step2: Evenly split the array as much as possible.";
  
    var numbers = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var n5 = document.getElementById("n5");
    var n6 = document.getElementById("n6");
    var n7 = document.getElementById("n7");
    var n8 = document.getElementById("n8");
    var n9 = document.getElementById("n9");
    var n10 = document.getElementById("n10");
  
    numbers.value = document.getElementById("tb").value;
    n2.value = document.getElementById("tb2").value;
    n3.value = document.getElementById("tb3").value;
    n4.value = document.getElementById("tb4").value;
    n5.value = document.getElementById("tb5").value;
    n6.value = document.getElementById("tb6").value;
    n7.value = document.getElementById("tb7").value;
    n8.value = document.getElementById("tb8").value;
    n9.value = document.getElementById("tb9").value;
    n10.value = document.getElementById("tb10").value;
  }