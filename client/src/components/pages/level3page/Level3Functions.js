import sound from "./correct.mp3";
import wrong from "./wrong.mp3";

const wrongAudio = new Audio(wrong);
const correctaudio = new Audio(sound);
var counter = 0;
var countertwo = 0;
export function Random() {
  var size = 10;
  var max = 20;
  var min = 1;
  var numbersArray = new Array(size);
  numbersArray = RandomNumbersArray(size, max, min);

  //show the steps
  var show1 = document.getElementById("showStep1");
  show1.classList.toggle("show");
  document.getElementById("step1").value =
    "Step1: A set of 10 numbers is randomly generated!";
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

//check if user choice i correct or wrong
export function checkFeedbackCorrect() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";

  var next = document.getElementById("Next");
  next.style.display = "block";
}

export function Next1() {
  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers
  var values = document.getElementById("Split1");
  values.classList.toggle("show");
  var next = document.getElementById("Next");
  next.style.display = "none";
  //display the array
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

//user choice is wrong
export function checkFeedbackWrong() {
  var feedback = document.getElementById("fedback2");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackcorrect = document.getElementById("fedback1");
  feedbackcorrect.style.display = "none";

  document.getElementById("feedbackwrong").value =
    "Wrong Answer Please try again!";

  //play wrong audio
  wrongAudio.play();

  var next = document.getElementById("Next");
  next.style.display = "none";
}

//where to split the first number

//check if user choice i correct or wrong
//first split
export function checkFeedbackCorrect1() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //get the two balues that you are supposed to click on

  //go to next step
  var next = document.getElementById("next2");

  next.style.display = "block";
}

//the second split
export function Next2() {
  var split2 = document.getElementById("split2");
  split2.style.display = "block";

  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers

  var next = document.getElementById("next2");
  next.style.display = "none";

  //intialize the numbers

  //those numbers
  var n12 = document.getElementById("n12");
  var n22 = document.getElementById("n22");
  var n32 = document.getElementById("n32");
  var n42 = document.getElementById("n42");
  var n52 = document.getElementById("n52");
  var n62 = document.getElementById("n62");
  var n72 = document.getElementById("n72");
  var n82 = document.getElementById("n82");
  var n92 = document.getElementById("n92");
  var n102 = document.getElementById("n102");

  //previous numbers
  n12.value = document.getElementById("n1").value;
  n22.value = document.getElementById("n2").value;
  n32.value = document.getElementById("n3").value;
  n42.value = document.getElementById("n4").value;
  n52.value = document.getElementById("n5").value;
  n62.value = document.getElementById("n6").value;
  n72.value = document.getElementById("n7").value;
  n82.value = document.getElementById("n8").value;
  n92.value = document.getElementById("n9").value;
  n102.value = document.getElementById("n10").value;

  var space1 = document.getElementById("n32space");
  space1.addEventListener("click", function () {
    counter += 1;
  });

  var space2 = document.getElementById("n82space");
  space2.addEventListener("click", function () {
    counter += 1;
  });
}

export function checkFeedbackCorrect2() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //get the two balues that you are supposed to click on
  if (counter == 2) {
    var next = document.getElementById("next3");
    next.style.display = "block";
  }
}

export function checkFeedbackCorrect3() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";

  //get the two balues that you are supposed to click on

  //go to next step
  // var next = document.getElementById("next2");
  // next.style.display = "block";
  //go to next step
  if (counter == 2) {
    var next = document.getElementById("next3");
    next.style.display = "block";
  }
}

export function Next3() {
  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers

  var next = document.getElementById("next3");
  next.style.display = "none";

  var split3 = document.getElementById("split3");
  split3.style.display = "block";
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  var n3 = document.getElementById("num3");
  var n4 = document.getElementById("num4");
  var n5 = document.getElementById("num5");
  var n6 = document.getElementById("num6");
  var n7 = document.getElementById("num7");
  var n8 = document.getElementById("num8");
  var n9 = document.getElementById("num9");
  var n10 = document.getElementById("num10");

  n1.value = document.getElementById("n12").value;
  n2.value = document.getElementById("n22").value;
  n3.value = document.getElementById("n32").value;
  n4.value = document.getElementById("n42").value;
  n5.value = document.getElementById("n52").value;
  n6.value = document.getElementById("n62").value;
  n7.value = document.getElementById("n72").value;
  n8.value = document.getElementById("n82").value;
  n9.value = document.getElementById("n92").value;
  n10.value = document.getElementById("n102").value;

  var space = document.getElementById("space13");
  var space1 = document.getElementById("space23");
  var space2 = document.getElementById("space33");
  var space3 = document.getElementById("space43");

  space.addEventListener("click", function () {
    countertwo += 1;
  });

  space1.addEventListener("click", function () {
    countertwo += 1;
  });
  space2.addEventListener("click", function () {
    countertwo += 1;
  });

  space3.addEventListener("click", function () {
    countertwo += 1;
  });
}

export function checkFeedbackCorrect4() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";

  if (countertwo == 4) {
    var next = document.getElementById("next4");
    next.style.display = "block";
  }
}
