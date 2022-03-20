// import React from "react";

// export default class Example extends React.Component {}

export function Random() {
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

export function Next() {
  var show = document.getElementById("showStep2");
  show.classList.toggle("show");

  var step2 = document.getElementById("step2");
  step2.value = "Step2: Evenly split the array as much as possible. Select the first group";

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

export function nextStep3C()
{
   var show = document.getElementById("showStep3Comparison");
  show.classList.toggle("show");

  var step2 = document.getElementById("step3c");
  step2.value = "Continue splitting as evenly as possible. Select the left subarray.";
  //get teh numbers 
  var n1 = document.getElementById("n1");
  var n2 = document.getElementById("n2");
  var n3 = document.getElementById("n3");
  var n4 = document.getElementById("n4");
  var n5 = document.getElementById("n5");

  //initialize the numbers 
  var n1c = document.getElementById("num1c");
  var n2c = document.getElementById("num2c");
  var n3c = document.getElementById("num3c");
  var n4c = document.getElementById("num4c");
  var n5c = document.getElementById("num5c");

  n1c.value = n1.value; 
  n2c.value = n2.value; 
  n3c.value = n3.value; 
  n4c.value = n4.value; 
  n5c.value = n5.value; 


}

export function nextStep3C2() {

  var show = document.getElementById("showstep3c2");
  show.classList.toggle("show");
 
   var step2 = document.getElementById("step3c2");
  step2.value = "Continue splitting as evenly as possible. Select left subarray";
   //initialize the numbers 
  var n1c = document.getElementById("num1c2");
  var n2c = document.getElementById("num2c2");
  var n3c = document.getElementById("num3c2");
  
  //values 
   //initialize the numbers 
 n1c.value = document.getElementById("num1c").value;
  n2c.value = document.getElementById("num2c").value;
  n3c.value = document.getElementById("num3c").value;
 

}

export function nextStep3C3() {
 var step2 = document.getElementById("step3c3");
  step2.value = "Since we no longer can split the array. Merge the array in sorted order.";
  var show = document.getElementById("showstep3c3");
  show.classList.toggle("show");
 
   //initialize the numbers 
  var n1c = document.getElementById("num1c3");
  var n2c = document.getElementById("num2c3");
  

  //values 
   //initialize the numbers 
 n1c.value = document.getElementById("num1c2").value;
  n2c.value = document.getElementById("num2c2").value;


}

//function 3c4 
export function nextStep3C4()
{
   var step2 = document.getElementById("step3c4");
  step2.value = "Since we no longer can split the array. Merge the array in sorted order. Select the right subarray. Since we no longer split the array, start merging.";
  var show = document.getElementById("showstep3c4");
  show.classList.toggle("show");

    //initialize the numbers 
  var n1c4 = document.getElementById("num1c4");
  var n2c4 = document.getElementById("num2c4");
  var n3c4 = document.getElementById("num3c4"); 

  var n1c = document.getElementById("num1c2");
 var n2c = document.getElementById("num2c2");
 var n3c = document.getElementById("num3c2");
   //place them all in an array into groups
  var merge1 = [n1c.value, n2c.value];
  merge1.sort(function (a, b) {
    return b - a;
  });

  n1c4.value = merge1[1]; 
  n2c4.value = merge1[0]; 
  n3c4.value = n3c.value; 
  console.log("sorted:" + merge1[1], merge1[0]); 

}

// next step c5
export function nextStep3C5()
{
   var step2 = document.getElementById("step3c5");
  step2.value = "Merge the array in sorted order.";
  var show = document.getElementById("showstep3c5");
  show.classList.toggle("show");

    //initialize the numbers 
  var n1c4 = document.getElementById("num1c4");
  var n2c4 = document.getElementById("num2c4");
  var n3c4 = document.getElementById("num3c4"); 

  var n1c = document.getElementById("num1c5");
 var n2c = document.getElementById("num2c5");
 var n3c = document.getElementById("num3c5");
   //place them all in an array into groups
  var merge1 = [n1c4.value, n2c4.value, n3c4.value];
  merge1.sort(function (a, b) {
    return b - a;
  });

  n1c.value = merge1[2]; 
  n2c.value = merge1[1]; 
  n3c.value = merge1[0]; 
  console.log("sorted:" + merge1[2], merge1[1],merge1[0] ); 

}

//next step c6 (slect right subarray)
export function nextStep3C6()
{
   var step2 = document.getElementById("step3c5");
  step2.value = "Merge the array in sorted order.";
  var show = document.getElementById("showstep3c5");
  show.classList.toggle("show");

    //initialize the numbers 
  var n1c4 = document.getElementById("num1c4");
  var n2c4 = document.getElementById("num2c4");
  var n3c4 = document.getElementById("num3c4"); 

  var n1c = document.getElementById("num1c5");
 var n2c = document.getElementById("num2c5");
 var n3c = document.getElementById("num3c5");
   //place them all in an array into groups
  var merge1 = [n1c4.value, n2c4.value, n3c4.value];
  merge1.sort(function (a, b) {
    return b - a;
  });

  n1c.value = merge1[2]; 
  n2c.value = merge1[1]; 
  n3c.value = merge1[0]; 
  console.log("sorted:" + merge1[2], merge1[1],merge1[0] ); 

}

export function nextStep3() {
  var show = document.getElementById("showStep3");
  show.classList.toggle("show");
  //hide the button for step 3

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

export function nextStep4() {
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

export function nextStep5() {
  var show = document.getElementById("showStep5");
  show.classList.toggle("show");

  var step5 = document.getElementById("step5");
  step5.value =
    "Step 5: Continue splitting the selected array as evenly as possible";
  step5.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step5");
  var n2 = document.getElementById("n2Step5");
  var n3 = document.getElementById("n3Step5");
  var n4 = document.getElementById("n4Step5");
  var n5 = document.getElementById("n5Step5");
  var n6 = document.getElementById("n6Step5");
  var n7 = document.getElementById("n7Step5");
  var n8 = document.getElementById("n8Step5");
  var n9 = document.getElementById("n9Step5");
  var n10 = document.getElementById("n10Step5");
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

//function 6
export function nextStep6() {
  var show = document.getElementById("showStep6");
  show.classList.toggle("show");

  var step6 = document.getElementById("step6");
  step6.value =
    "Step 6: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green.";
  step6.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step6");
  var n2 = document.getElementById("n2Step6");
  var n3 = document.getElementById("n3Step6");
  var n4 = document.getElementById("n4Step6");
  var n5 = document.getElementById("n5Step6");
  var n6 = document.getElementById("n6Step6");
  var n7 = document.getElementById("n7Step6");
  var n8 = document.getElementById("n8Step6");
  var n9 = document.getElementById("n9Step6");
  var n10 = document.getElementById("n10Step6");
  //first group
  var n15 = document.getElementById("n1Step5");

  var n25 = document.getElementById("n2Step5");

  var n35 = document.getElementById("n3Step5");
  var n45 = document.getElementById("n4Step5");
  var n55 = document.getElementById("n5Step5");
  var n65 = document.getElementById("n6Step5");
  var n75 = document.getElementById("n7Step5");
  var n85 = document.getElementById("n8Step5");
  var n95 = document.getElementById("n9Step5");
  var n105 = document.getElementById("n10Step5");

  //place them all in an array into groups
  var merge1 = [n15.value, n25.value];
  merge1.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n1.value = merge1[1];
  n2.value = merge1[0];

  //leave the alone one alone
  n3.value = n35.value;

  //merge the second group together
  //merge the second group together
  var merge2 = [n45.value, n55.value];
  merge2.sort(function (a, b) {
    return b - a;
  });
  console.log(merge2);

  n4.value = merge2[1];
  n5.value = merge2[0];

  //merge the third group together
  var merge3 = [n65.value, n75.value];
  merge3.sort(function (a, b) {
    return b - a;
  });
  console.log(merge3);

  n6.value = merge3[1];
  n7.value = merge3[0];

  //leave the alone one alone
  n8.value = n85.value;

  //merge the fourth group together
  var merge4 = [n95.value, n105.value];
  merge4.sort(function (a, b) {
    return b - a;
  });
  console.log(merge4);

  n9.value = merge4[1];
  n10.value = merge4[0];
}

export function nextStep6Group2() {
  var next = document.getElementById("step6Group2");
  next.style.display = "block";

  //group 2 values
  // intialize the numbers value
  var n1 = document.getElementById("n1Step62");
  var n2 = document.getElementById("n2Step62");
  var n3 = document.getElementById("n3Step62");
  var n4 = document.getElementById("n4Step62");
  var n5 = document.getElementById("n5Step62");
  var n6 = document.getElementById("n6Step62");
  var n7 = document.getElementById("n7Step62");
  var n8 = document.getElementById("n8Step62");
  var n9 = document.getElementById("n9Step62");
  var n10 = document.getElementById("n10Step62");

  //intialize the values to step 6 stuff
  // intialize the numbers value
  n1.value = document.getElementById("n1Step6").value;
  n2.value = document.getElementById("n2Step6").value;
  n3.value = document.getElementById("n3Step6").value;
  n4.value = document.getElementById("n4Step6").value;
  n5.value = document.getElementById("n5Step6").value;
  n6.value = document.getElementById("n6Step6").value;
  n7.value = document.getElementById("n7Step6").value;
  n8.value = document.getElementById("n8Step6").value;
  n9.value = document.getElementById("n9Step6").value;
  n10.value = document.getElementById("n10Step6").value;
}

export function nextStep6Group3() {
  var next = document.getElementById("step6Group3");
  next.style.display = "block";

  //group 2 values
  // intialize the numbers value
  var n1 = document.getElementById("n1Step63");
  var n2 = document.getElementById("n2Step63");
  var n3 = document.getElementById("n3Step63");
  var n4 = document.getElementById("n4Step63");
  var n5 = document.getElementById("n5Step63");
  var n6 = document.getElementById("n6Step63");
  var n7 = document.getElementById("n7Step63");
  var n8 = document.getElementById("n8Step63");
  var n9 = document.getElementById("n9Step63");
  var n10 = document.getElementById("n10Step63");

  //intialize the values to step 6 stuff
  // intialize the numbers value
  n1.value = document.getElementById("n1Step6").value;
  n2.value = document.getElementById("n2Step6").value;
  n3.value = document.getElementById("n3Step6").value;
  n4.value = document.getElementById("n4Step6").value;
  n5.value = document.getElementById("n5Step6").value;
  n6.value = document.getElementById("n6Step6").value;
  n7.value = document.getElementById("n7Step6").value;
  n8.value = document.getElementById("n8Step6").value;
  n9.value = document.getElementById("n9Step6").value;
  n10.value = document.getElementById("n10Step6").value;
}

//step 6 group 4
export function nextStep6Group4() {
  var next = document.getElementById("step6Group4");
  next.style.display = "block";

  //group 2 values
  // intialize the numbers value
  var n1 = document.getElementById("n1Step64");
  var n2 = document.getElementById("n2Step64");
  var n3 = document.getElementById("n3Step64");
  var n4 = document.getElementById("n4Step64");
  var n5 = document.getElementById("n5Step64");
  var n6 = document.getElementById("n6Step64");
  var n7 = document.getElementById("n7Step64");
  var n8 = document.getElementById("n8Step64");
  var n9 = document.getElementById("n9Step64");
  var n10 = document.getElementById("n10Step64");

  //intialize the values to step 6 stuff
  // intialize the numbers value
  n1.value = document.getElementById("n1Step6").value;
  n2.value = document.getElementById("n2Step6").value;
  n3.value = document.getElementById("n3Step6").value;
  n4.value = document.getElementById("n4Step6").value;
  n5.value = document.getElementById("n5Step6").value;
  n6.value = document.getElementById("n6Step6").value;
  n7.value = document.getElementById("n7Step6").value;
  n8.value = document.getElementById("n8Step6").value;
  n9.value = document.getElementById("n9Step6").value;
  n10.value = document.getElementById("n10Step6").value;
}

export function nextStep7() {
  var show = document.getElementById("showStep7");
  show.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step7");
  var n2 = document.getElementById("n2Step7");
  var n3 = document.getElementById("n3Step7");
  var n4 = document.getElementById("n4Step7");
  var n5 = document.getElementById("n5Step7");
  var n6 = document.getElementById("n6Step7");
  var n7 = document.getElementById("n7Step7");
  var n8 = document.getElementById("n8Step7");
  var n9 = document.getElementById("n9Step7");
  var n10 = document.getElementById("n10Step7");
  // intialize the numbers value
  var n16 = document.getElementById("n1Step6");
  var n26 = document.getElementById("n2Step6");
  var n36 = document.getElementById("n3Step6");
  var n46 = document.getElementById("n4Step6");
  var n56 = document.getElementById("n5Step6");
  var n66 = document.getElementById("n6Step6");
  var n76 = document.getElementById("n7Step6");
  var n86 = document.getElementById("n8Step6");
  var n96 = document.getElementById("n9Step6");
  var n106 = document.getElementById("n10Step6");

  //merge the 3 numbers together
  var merge1 = [n16.value, n26.value, n36.value];
  merge1.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n1.value = merge1[2];
  n2.value = merge1[1];
  n3.value = merge1[0];

  //leave the 2 numbers together
  n4.value = n46.value;
  n5.value = n56.value;

  //merge the other 3 numbers together
  var merge2 = [n66.value, n76.value, n86.value];
  merge2.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n6.value = merge2[2];
  n7.value = merge2[1];
  n8.value = merge2[0];

  //leave the other 2 numbers
  n9.value = n96.value;
  n10.value = n106.value;
}

export function nextStep7Group2() {
  var show = document.getElementById("showStep7Group2");
  show.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step72");
  var n2 = document.getElementById("n2Step72");
  var n3 = document.getElementById("n3Step72");
  var n4 = document.getElementById("n4Step72");
  var n5 = document.getElementById("n5Step72");
  var n6 = document.getElementById("n6Step72");
  var n7 = document.getElementById("n7Step72");
  var n8 = document.getElementById("n8Step72");
  var n9 = document.getElementById("n9Step72");
  var n10 = document.getElementById("n10Step72");

  //intialize according to step 7 that sorts them
  // intialize the numbers value
  n1.value = document.getElementById("n1Step7").value;
  n2.value = document.getElementById("n2Step7").value;
  n3.value = document.getElementById("n3Step7").value;
  n4.value = document.getElementById("n4Step7").value;
  n5.value = document.getElementById("n5Step7").value;
  n6.value = document.getElementById("n6Step7").value;
  n7.value = document.getElementById("n7Step7").value;
  n8.value = document.getElementById("n8Step7").value;
  n9.value = document.getElementById("n9Step7").value;
  n10.value = document.getElementById("n10Step7").value;
}

export function nextStep8() {
  var show = document.getElementById("showStep8");
  show.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step8");
  var n2 = document.getElementById("n2Step8");
  var n3 = document.getElementById("n3Step8");
  var n4 = document.getElementById("n4Step8");
  var n5 = document.getElementById("n5Step8");
  var n6 = document.getElementById("n6Step8");
  var n7 = document.getElementById("n7Step8");
  var n8 = document.getElementById("n8Step8");
  var n9 = document.getElementById("n9Step8");
  var n10 = document.getElementById("n10Step8");

  // intialize the numbers value
  var n17 = document.getElementById("n1Step7");
  var n27 = document.getElementById("n2Step7");
  var n37 = document.getElementById("n3Step7");
  var n47 = document.getElementById("n4Step7");
  var n57 = document.getElementById("n5Step7");
  var n67 = document.getElementById("n6Step7");
  var n77 = document.getElementById("n7Step7");
  var n87 = document.getElementById("n8Step7");
  var n97 = document.getElementById("n9Step7");
  var n107 = document.getElementById("n10Step7");

  //merge the 5 numbers together
  var merge1 = [n17.value, n27.value, n37.value, n47.value, n57.value];
  merge1.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n1.value = merge1[4];
  n2.value = merge1[3];
  n3.value = merge1[2];
  n4.value = merge1[1];
  n5.value = merge1[0];

  //merge the other 5 numbers together
  var merge2 = [n67.value, n77.value, n87.value, n97.value, n107.value];
  merge2.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n6.value = merge2[4];
  n7.value = merge2[3];
  n8.value = merge2[2];
  n9.value = merge2[1];
  n10.value = merge2[0];
}

//group 2 for step 8
export function nextStep8Group2() {
  var show = document.getElementById("showStep8Group2");
  show.classList.toggle("show");

  // intialize the numbers value
  var n1 = document.getElementById("n1Step82");
  var n2 = document.getElementById("n2Step82");
  var n3 = document.getElementById("n3Step82");
  var n4 = document.getElementById("n4Step82");
  var n5 = document.getElementById("n5Step82");
  var n6 = document.getElementById("n6Step82");
  var n7 = document.getElementById("n7Step82");
  var n8 = document.getElementById("n8Step82");
  var n9 = document.getElementById("n9Step82");
  var n10 = document.getElementById("n10Step82");

  // intialize the numbers value
  n1.value = document.getElementById("n1Step8").value;
  n2.value = document.getElementById("n2Step8").value;
  n3.value = document.getElementById("n3Step8").value;
  n4.value = document.getElementById("n4Step8").value;
  n5.value = document.getElementById("n5Step8").value;
  n6.value = document.getElementById("n6Step8").value;
  n7.value = document.getElementById("n7Step8").value;
  n8.value = document.getElementById("n8Step8").value;
  n9.value = document.getElementById("n9Step8").value;
  n10.value = document.getElementById("n10Step8").value;
}

export function nextStep9() {
  var show = document.getElementById("showStep9");
  show.classList.toggle("show");

  var step7 = document.getElementById("step9");
  step7.value =
    "Step 14: Merge the 2 groups together in ascending order. This is the end of the algorithm";

  // intialize the numbers value
  var n1 = document.getElementById("n1Step9");
  var n2 = document.getElementById("n2Step9");
  var n3 = document.getElementById("n3Step9");
  var n4 = document.getElementById("n4Step9");
  var n5 = document.getElementById("n5Step9");
  var n6 = document.getElementById("n6Step9");
  var n7 = document.getElementById("n7Step9");
  var n8 = document.getElementById("n8Step9");
  var n9 = document.getElementById("n9Step9");
  var n10 = document.getElementById("n10Step9");

  // intialize the numbers value
  var n19 = document.getElementById("n1Step8");
  var n29 = document.getElementById("n2Step8");
  var n39 = document.getElementById("n3Step8");
  var n49 = document.getElementById("n4Step8");
  var n59 = document.getElementById("n5Step8");
  var n69 = document.getElementById("n6Step8");
  var n79 = document.getElementById("n7Step8");
  var n89 = document.getElementById("n8Step8");
  var n99 = document.getElementById("n9Step8");
  var n109 = document.getElementById("n10Step8");

  //merge the 10 numbers together
  var merge1 = [
    n19.value,
    n29.value,
    n39.value,
    n49.value,
    n59.value,
    n69.value,
    n79.value,
    n89.value,
    n99.value,
    n109.value,
  ];
  merge1.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n1.value = merge1[9];
  n2.value = merge1[8];
  n3.value = merge1[7];
  n4.value = merge1[6];
  n5.value = merge1[5];
  n6.value = merge1[4];
  n7.value = merge1[3];
  n8.value = merge1[2];
  n9.value = merge1[1];
  n10.value = merge1[0];
}
