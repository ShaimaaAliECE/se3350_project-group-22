// import React from "react";

// export default class Example extends React.Component {}

function Random() {
  // var rnd = Math.floor(Math.random() * 20000000000);
  var rnd = Math.floor(Math.random() * 20) + 1;
  var rnd2 = Math.floor(Math.random() * 20) + 1;
  var rnd3 = Math.floor(Math.random() * 20) + 1;
  var rnd4 = Math.floor(Math.random() * 20) + 1;
  var rnd5 = Math.floor(Math.random() * 20) + 1;
  var rnd6 = Math.floor(Math.random() * 20) + 1;
  var rnd7 = Math.floor(Math.random() * 20) + 1;
  var rnd8 = Math.floor(Math.random() * 20) + 1;
  var rnd9 = Math.floor(Math.random() * 20) + 1;
  var rnd10 = Math.floor(Math.random() * 20) + 1;

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
  //
  step.classList.toggle("show");
  document.getElementById("step1").value =
    "Step1: A set of 10 numbers is randomly generated!";
}
function Next() {
  var step2 = document.getElementById("step2");
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

  step2.classList.toggle("show");
  step2.value = "Step 2: Split the selected array as evenly as possible";

  //   numbers.classList.toggle("show");
  //   n2.classList.toggle("show");
  //   n3.classList.toggle("show");
  //   n4.classList.toggle("show");
  //   n5.classList.toggle("show");
  //   n6.classList.toggle("show");
  //   n7.classList.toggle("show");
  //   n8.classList.toggle("show");
  //   n9.classList.toggle("show");
  //   n10.classList.toggle("show");

  //hide the button for step 2

  var next2 = document.getElementById("next");
  next2.classList.toggle("none");
}

function nextStep3() {
  //get step 3
  var step3 = document.getElementById("step3");
  step3.value =
    "Step 3: Continue splitting the selected array as evenly as possible";
  step3.classList.toggle("show");
}
