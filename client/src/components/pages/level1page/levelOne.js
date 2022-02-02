// import React from "react";

// export default class Example extends React.Component {}

function Random() {
  var size = 10;
  var max = 20;
  var min = 1;
  var numbersArray = new Array(size);
  numbersArray = RandomNumbersArray(size, max, min);

  //show the steps
  var show1 = document.getElementById("showStep1");
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

  //display the step
  var step = document.getElementById("step1");

  document.getElementById("step1").value =
    "Step1: A set of 10 numbers is randomly generated!";
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

function Next() {
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

  //hide the button for step 2
  var next = document.getElementById("next1");
  next.classList.toggle("none");
  next.style.display = "none";
  // next.replaceWith(next3.classList.toggle("show"));

  //show the button for step 3
  var next3 = document.getElementById("next3");
  next3.classList.toggle("show");
  next3.style.display = "show";
}

function nextStep3() {
  var show = document.getElementById("showStep3");
  show.classList.toggle("show");
  //hide the button for step 3
  var next3 = document.getElementById("next3");
  next3.classList.toggle("none");

  //hide the step 3 button
  next3.style.display = "hide";
  //get step 3
  var step3 = document.getElementById("step3");
  step3.value =
    "Step 3: Continue splitting the selected array as evenly as possible";
  step3.classList.toggle("show");

  // intialize the numbers value
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
  //first group
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  var num3 = document.getElementById("num3");
  num1.value = numbers.value;
  num2.value = n2.value;
  num3.value = n3.value;

  //second group
  var num4 = document.getElementById("num4");
  var num5 = document.getElementById("num5");
  num4.value = n4.value;
  num5.value = n5.value;

  //third group
  var num6 = document.getElementById("num6");
  var num7 = document.getElementById("num7");
  var num8 = document.getElementById("num8");
  num6.value = n6.value;
  num7.value = n7.value;
  num8.value = n8.value;

  //fourth group
  var num9 = document.getElementById("num9");
  var num10 = document.getElementById("num10");
  num9.value = n9.value;
  num10.value = n10.value;

  //show button for step 4
  var buttonStep4 = document.getElementById("step 4");
  buttonStep4.classList.toggle("show");
}

function nextStep4() {
  var show = document.getElementById("showStep4");
  show.classList.toggle("show");

  var step4 = document.getElementById("step4");
  step4.value =
    "Step 4: Continue splitting the selected array as evenly as possible";
  step4.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step4");
  var n2 = document.getElementById("n2Step4");
  var n3 = document.getElementById("n3Step4");
  var n4 = document.getElementById("n4Step4");
  var n5 = document.getElementById("n5Step4");
  var n6 = document.getElementById("n6Step4");
  var n7 = document.getElementById("n7Step4");
  var n8 = document.getElementById("n8Step4");
  var n9 = document.getElementById("n9Step4");
  var n10 = document.getElementById("n10Step4");
  //first group
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  n1.value = num1.value;
  n2.value = num2.value;

  var num3 = document.getElementById("num3");

  n3.value = num3.value;

  //second group
  var num4 = document.getElementById("num4");
  var num5 = document.getElementById("num5");
  n4.value = num4.value;
  n5.value = num5.value;

  //third group
  var num6 = document.getElementById("num6");
  var num7 = document.getElementById("num7");
  var num8 = document.getElementById("num8");
  n6.value = num6.value;
  n7.value = num7.value;
  n8.value = num8.value;

  //fourth group
  var num9 = document.getElementById("num9");
  var num10 = document.getElementById("num10");
  n9.value = num9.value;
  n10.value = num10.value;
}
