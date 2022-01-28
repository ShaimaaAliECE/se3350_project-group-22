// import React from "react";

// export default class Example extends React.Component {

// }

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
