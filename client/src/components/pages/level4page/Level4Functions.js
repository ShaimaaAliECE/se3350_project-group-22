import sound from "./correct.mp3";
import wrong from "./wrong.mp3";

const wrongAudio = new Audio(wrong);
const correctaudio = new Audio(sound);
var counter = 0;
var countertwo = 0;
var counter3 = 0;


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

  var next10 = document.getElementById("next20");
  next10.style.display = "none";
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
  if (counter >= 2) {
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
  if (counter >= 2) {
    var next = document.getElementById("next3");
    next.style.display = "block";
    alert("Congratulations! You have splitted all the groups in this step");
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

  if (countertwo >= 4) {
    var next = document.getElementById("next4");
    next.style.display = "block";
    alert("Congratulations! You have splitted all the groups in this step");
  }
}

export function Next4() {
  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers

  var next = document.getElementById("next4");
  next.style.display = "none";

  var split3 = document.getElementById("split4");
  split3.style.display = "block";

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

  var space = document.getElementById("space14");

  space.addEventListener("click", function () {
    counter3 += 1;
  });

  var space2 = document.getElementById("space24");

  space2.addEventListener("click", function () {
    counter3 += 1;
  });
}

export function checkFeedbackCorrect5() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";

  if (counter3 >= 2) {
    var next = document.getElementById("next5");
    next.style.display = "block";
    alert("Congratulations! You have splitted all the groups in this step");
  }
}

export function Next5() {
  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers

  var next = document.getElementById("next5");
  next.style.display = "none";

  var split3 = document.getElementById("split5");
  split3.style.display = "block";
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

  //ask if merge or split

  var merge = document.getElementById("mergeInstructions");
  merge.style.display = "block";
}

export function checkFeedbackCorrect6() {
  var n1 = document.getElementById("n1Step5");
  var merge = document.getElementById("mergeInstructions");
  merge.style.display = "none";
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";
  var next6 = document.getElementById("next6");
  next6.style.display = "block";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  // console.log(n1.value);
  // alert(n1.value);
}

export function Next6() {
  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers

  var next = document.getElementById("next6");
  next.style.display = "none";

  var split3 = document.getElementById("chooseMerge");
  split3.style.display = "block";

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

  n1.value = document.getElementById("n1Step5").value;
  n2.value = document.getElementById("n2Step5").value;
  n3.value = document.getElementById("n3Step5").value;
  n4.value = document.getElementById("n4Step5").value;
  n5.value = document.getElementById("n5Step5").value;
  n6.value = document.getElementById("n6Step5").value;
  n7.value = document.getElementById("n7Step5").value;
  n8.value = document.getElementById("n8Step5").value;
  n9.value = document.getElementById("n9Step5").value;
  n10.value = document.getElementById("n10Step5").value;
}

export function checkFeedbackCorrect7() {
  // correctAudio.play();

  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";

  var next = document.getElementById("next7");
  next.style.display = "block";
}

export function Next7() {
  var feedback = document.getElementById("fedback1");
  feedback.style.display = "none";
  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.style.display = "none";
  //show numbers

  var next = document.getElementById("next7");
  next.style.display = "none";

  //show the merge 1 user input
  var merge = document.getElementById("merge1");
  merge.style.display = "block";

  var n1 = document.getElementById("n1Step7");
  var n2 = document.getElementById("n2Step7");

  //intialize the values
  n1.value = document.getElementById("n1Step6").value;
  n2.value = document.getElementById("n2Step6").value;

  //show the value

  //set the value of the answer ot correct answer after sorting
  var n1A = document.getElementById("n1Step7A");
  n1A.value = document.getElementById("n1Step6").value;

  var n2A = document.getElementById("n2Step7A");
  n2A.value = document.getElementById("n2Step6").value;
  //place them all in an array into groups
  var merge1 = [n1A.value, n2A.value];
  merge1.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n1A.value = merge1[1];
  n2A.value = merge1[0];

  //go to next step
  var next = document.getElementById("next8");
  next.style.display = "block";
  //if the user answer matches the
}
//verify
export function Next8() {
  var n1 = document.getElementById("n1Step7");
  var n2 = document.getElementById("n2Step7");
  console.log(n1.value);

  var n1A = document.getElementById("n1Step7A");
  n1A.value = document.getElementById("n1Step6").value;

  var n2A = document.getElementById("n2Step7A");
  n2A.value = document.getElementById("n2Step6").value;
  //place them all in an array into groups
  var merge1 = [n1A.value, n2A.value];
  merge1.sort(function (a, b) {
    return b - a;
  });
  console.log(merge1);

  n1A.value = merge1[1];
  n2A.value = merge1[0];
  console.log(n1A.value, n2A.value);

  console.log("n1 value" + n1.value);
  console.log("n1A.value" + n1A.value);

  console.log("n2 value" + n2.value);
  console.log("n2A.value" + n2A.value);
  if (n1.value == n1A.value && n2.value == n2A.value) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //hide verify button
    var next = document.getElementById("next8");
    next.style.display = "none";

    //show next button
    var next = document.getElementById("next9");
    next.style.display = "block";

    //show the next button
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next = document.getElementById("next8");
    next.style.display = "block";
  }
}

export function Next9() {
  //choose where to merge again
  //show next button
  var next = document.getElementById("next9");
  next.style.display = "none";
  var feedbackcorrect = document.getElementById("fedback1");
  feedbackcorrect.style.display = "none";
  var choose2 = document.getElementById("chooseMerg2");
  choose2.style.display = "block";
  var merge = document.getElementById("merge1");
  merge.style.display = "none";

  //first 2 merged groups
  var n1A = document.getElementById("n1Step7A");

  var n2A = document.getElementById("n2Step7A");

  var n1C = document.getElementById("n1CM2");
  var n2C = document.getElementById("n2CM2");
  var n3C = document.getElementById("n3CM2");
  var n4C = document.getElementById("n4CM2");
  var n5C = document.getElementById("n5CM2");
  var n6C = document.getElementById("n6CM2");
  var n7C = document.getElementById("n7CM2");
  var n8C = document.getElementById("n8CM2");
  var n9C = document.getElementById("n9CM2");
  var n10C = document.getElementById("n10CM2");

  n1C.value = n1A.value;
  n2C.value = n2A.value;
  n3C.value = document.getElementById("n3Step5").value;
  n4C.value = document.getElementById("n4Step5").value;
  n5C.value = document.getElementById("n5Step5").value;
  n6C.value = document.getElementById("n6Step5").value;
  n7C.value = document.getElementById("n7Step5").value;
  n8C.value = document.getElementById("n8Step5").value;
  n9C.value = document.getElementById("n9Step5").value;
  n10C.value = document.getElementById("n10Step5").value;
}

export function checkFeedbackCorrect8() {
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set teh value of the answer of merge 2
  var n1Answer = document.getElementById("n1A2");
  n1Answer.value = document.getElementById("n4CM2").value;
  var n2Answer = document.getElementById("n2A2");
  n2Answer.value = document.getElementById("n5CM2").value;
  console.log(n1Answer.value);
  console.log(n2Answer.value);
  var merge2 = [n1Answer.value, n2Answer.value];
  merge2.sort(function (a, b) {
    return b - a;
  });

  n1Answer.value = merge2[1];
  n2Answer.value = merge2[0];
  console.log("merge 2 sort" + n1Answer.value, n2Answer.value);
  //show step 10 block
  var next10 = document.getElementById("next10");
  next10.style.display = "block";
}

export function Next10() {
  //hide the nest button
  var next10 = document.getElementById("next10");
  next10.style.display = "none";
  //hide the feedback:
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "none";

  //show merge2 option
  var merge2 = document.getElementById("merge2");
  merge2.style.display = "block";

  //intialize the merge 2 buttons
  var n1Merge2 = document.getElementById("n1Input");
  var n2Merge2 = document.getElementById("n2Input");

  //previous n4 and n5 values and intialize
  n1Merge2.value = document.getElementById("n4CM2").value;
  n2Merge2.value = document.getElementById("n5CM2").value;
}

//check response of the numbers again here
export function VerifyAnswer() {
  var n1Merge2 = document.getElementById("n1Input");
  var n2Merge2 = document.getElementById("n2Input");

  var n1Answer = document.getElementById("n1A2");

  var n2Answer = document.getElementById("n2A2");

  if (n1Merge2.value == n1Answer.value && n2Merge2.value == n2Answer.value) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //hide verify button
    var next = document.getElementById("next8");
    next.style.display = "none";

    //show the next button
    var next11 = document.getElementById("next11");
    next11.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
  }
}
export function Next11() {
  //delete the feddback correct
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge2");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge3 = document.getElementById("chooseMerge3");
  chooseMerge3.style.display = "block";

  //intialize the values
  var n1C = document.getElementById("n1CM3");
  var n2C = document.getElementById("n2CM3");
  var n3C = document.getElementById("n3CM3");
  var n4C = document.getElementById("n4CM3");
  var n5C = document.getElementById("n5CM3");
  var n6C = document.getElementById("n6CM3");
  var n7C = document.getElementById("n7CM3");
  var n8C = document.getElementById("n8CM3");
  var n9C = document.getElementById("n9CM3");
  var n10C = document.getElementById("n10CM3");

  //first sorted ones
  //first 2 merged groups
  n1C.value = document.getElementById("n1Step7A").value;
  n2C.value = document.getElementById("n2Step7A").value;

  //second merged ones
  n4C.value = document.getElementById("n1A2").value;

  n5C.value = document.getElementById("n2A2").value;

  //the rest
  n3C.value = document.getElementById("n3Step5").value;

  //need to be grouped
  n6C.value = document.getElementById("n6Step5").value;
  n7C.value = document.getElementById("n7Step5").value;
  //rest alone
  n8C.value = document.getElementById("n8Step5").value;
  n9C.value = document.getElementById("n9Step5").value;
  n10C.value = document.getElementById("n10Step5").value;
}

//sort the correct answer + show the merge 3
export function checkFeedbackCorrect9() {
  //show the next button
  var next11 = document.getElementById("next11");
  next11.style.display = "none";
  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set teh value of the answer of merge 2
  //get the answers
  var n1A = document.getElementById("n1A3");
  n1A.value = document.getElementById("n6CM3").value;
  var n2A = document.getElementById("n2A3");
  n2A.value = document.getElementById("n7CM3").value;

  console.log(n1A.value);
  console.log(n2A.value);
  var merge3 = [n1A.value, n2A.value];
  merge3.sort(function (a, b) {
    return b - a;
  });

  n1A.value = merge3[1];
  n2A.value = merge3[0];
  console.log("merge 3 sort" + n1A.value, n2A.value);
  //show step 10 block
  var next10 = document.getElementById("next12");
  next10.style.display = "block";
}

export function Next12() {
  var next10 = document.getElementById("next12");
  next10.style.display = "none";
  //delete the feddback correct
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge3");
  merge2.style.display = "block";

  //intialize it
  var n1I = document.getElementById("n1Input3");
  var n2I = document.getElementById("n2Input3");
  //need to be grouped
  n1I.value = document.getElementById("n6CM3").value;
  n2I.value = document.getElementById("n7CM3").value;
}

//verify the answer
export function VerifyAnswer2() {
  //the user input
  var n1Merge3 = document.getElementById("n1Input3");
  var n2Merge3 = document.getElementById("n2Input3");

  var n1Answer = document.getElementById("n1A3");

  var n2Answer = document.getElementById("n2A3");

  if (n1Merge3.value == n1Answer.value && n2Merge3.value == n2Answer.value) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next12");
    next11.style.display = "none";

    //show the next button
    var next11 = document.getElementById("next13");
    next11.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next11 = document.getElementById("next13");
    next11.style.display = "block";
  }
}

//fourth merge
export function Next13() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge3");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge3 = document.getElementById("chooseMerge4");
  chooseMerge3.style.display = "block";

  //initalize the values
  //intialize the values
  var n1C = document.getElementById("n1CM4");
  var n2C = document.getElementById("n2CM4");
  var n3C = document.getElementById("n3CM4");
  var n4C = document.getElementById("n4CM4");
  var n5C = document.getElementById("n5CM4");
  var n6C = document.getElementById("n6CM4");
  var n7C = document.getElementById("n7CM4");
  var n8C = document.getElementById("n8CM4");
  var n9C = document.getElementById("n9CM4");
  var n10C = document.getElementById("n10CM4");

  n1C.value = document.getElementById("n1Step7A").value;
  n2C.value = document.getElementById("n2Step7A").value;

  //second merged ones
  n4C.value = document.getElementById("n1A2").value;

  n5C.value = document.getElementById("n2A2").value;

  //the rest
  n3C.value = document.getElementById("n3CM3").value;

  //thirdmerged ones
  n6C.value = document.getElementById("n1A3").value;
  n7C.value = document.getElementById("n2A3").value;
  //rest alone
  n8C.value = document.getElementById("n8CM3").value;
  //to be merged
  n9C.value = document.getElementById("n9CM3").value;
  n10C.value = document.getElementById("n10CM3").value;
}

//check the choice of user and sort the real anser of 9 and 10
export function checkFeedbackCorrect10() {
  //show the next button
  var next11 = document.getElementById("next13");
  next11.style.display = "none";

  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set the values of the answer
  //set teh value of the answer of merge 4
  //get the answers
  var n1A = document.getElementById("n1A4");
  n1A.value = document.getElementById("n9CM4").value;
  var n2A = document.getElementById("n2A4");
  n2A.value = document.getElementById("n10CM4").value;

  console.log(n1A.value);
  console.log(n2A.value);
  var merge4 = [n1A.value, n2A.value];
  merge4.sort(function (a, b) {
    return b - a;
  });

  n1A.value = merge4[1];
  n2A.value = merge4[0];
  console.log("merge 4 sort" + n1A.value, n2A.value);
  //show step 10 block
  var next10 = document.getElementById("next14");
  next10.style.display = "block";
}

export function Next14() {
  //show merge 4
  var next10 = document.getElementById("next12");
  next10.style.display = "none";
  var next11 = document.getElementById("next14");
  next11.style.display = "none";
  var merge4 = document.getElementById("merge4");
  merge4.style.display = "block";
  //intialize it
  var n1I = document.getElementById("n1Input4");
  var n2I = document.getElementById("n2Input4");
  //need to be grouped
  n1I.value = document.getElementById("n9CM4").value;
  n2I.value = document.getElementById("n10CM4").value;
}

export function VerifyAnswer3() {
  //the user input
  var n1Merge4 = document.getElementById("n1Input4");
  var n2Merge4 = document.getElementById("n2Input4");

  var n1Answer = document.getElementById("n1A4");

  var n2Answer = document.getElementById("n2A4");

  if (n1Merge4.value == n1Answer.value && n2Merge4.value == n2Answer.value) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next14");
    next11.style.display = "none";

    //show the next button
    var next113 = document.getElementById("next15");
    next113.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next11 = document.getElementById("next14");
    next11.style.display = "block";
  }
}

//show the four merged groups
export function Next15() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge4");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge3 = document.getElementById("chooseMerge5");
  chooseMerge3.style.display = "block";
  var next11 = document.getElementById("next14");
  next11.style.display = "none";
  var next113 = document.getElementById("next15");
  next113.style.display = "none";

  //intialize
  //intialize the values
  var n1C = document.getElementById("n1CM5");
  var n2C = document.getElementById("n2CM5");
  var n3C = document.getElementById("n3CM5");
  var n4C = document.getElementById("n4CM5");
  var n5C = document.getElementById("n5CM5");
  var n6C = document.getElementById("n6CM5");
  var n7C = document.getElementById("n7CM5");
  var n8C = document.getElementById("n8CM5");
  var n9C = document.getElementById("n9CM5");
  var n10C = document.getElementById("n10CM5");

  n1C.value = document.getElementById("n1Step7A").value;
  n2C.value = document.getElementById("n2Step7A").value;

  //second merged ones
  n4C.value = document.getElementById("n1A2").value;

  n5C.value = document.getElementById("n2A2").value;

  //the rest
  n3C.value = document.getElementById("n3CM4").value;

  //thirdmerged ones
  n6C.value = document.getElementById("n1A3").value;
  n7C.value = document.getElementById("n2A3").value;
  //rest alone
  n8C.value = document.getElementById("n8CM3").value;
  //to be merged
  n9C.value = document.getElementById("n1A4").value;
  n10C.value = document.getElementById("n2A4").value;
}

export function checkFeedbackCorrect11() {
  //show the next button
  var next11 = document.getElementById("next14");
  next11.style.display = "none";

  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set the values of the answer
  //set teh value of the answer of merge 4
  //get the answers
  var n1A = document.getElementById("n1A5");
  n1A.value = document.getElementById("n1CM5").value;
  var n2A = document.getElementById("n2A5");
  n2A.value = document.getElementById("n2CM5").value;
  var n3A = document.getElementById("n3A5");
  n3A.value = document.getElementById("n3CM5").value;

  //merge the 3 numbers together
  var merge5 = [n1A.value, n2A.value, n3A.value];
  merge5.sort(function (a, b) {
    return b - a;
  });

  n1A.value = merge5[2];
  n2A.value = merge5[1];
  n3A.value = merge5[0];
  console.log("merge 5 sort" + n1A.value, n2A.value, n3A.value);
  //show step 10 block
  var next10 = document.getElementById("next16");
  next10.style.display = "block";
  var next10 = document.getElementById("next15");
  next10.style.display = "none";
}

//
export function Next16() {
  //show merge 4
  var next10 = document.getElementById("next15");
  next10.style.display = "none";

  var next11 = document.getElementById("next16");
  next11.style.display = "none";

  //intialize it
  var merge5 = document.getElementById("merge5");
  merge5.style.display = "block";
  var n1I = document.getElementById("n1Input5");
  var n2I = document.getElementById("n2Input5");

  var n3I = document.getElementById("n3Input5");

  //need to be grouped
  n1I.value = document.getElementById("n1CM5").value;
  n2I.value = document.getElementById("n2CM5").value;
  n3I.value = document.getElementById("n3CM5").value;
}

//verify answer 4
export function VerifyAnswer4() {
  //the user input
  var n1Merge5 = document.getElementById("n1Input5");
  var n2Merge5 = document.getElementById("n2Input5");
  var n3Merge5 = document.getElementById("n3Input5");

  var n1Answer = document.getElementById("n1A5");
  var n2Answer = document.getElementById("n2A5");
  var n3Answer = document.getElementById("n3A5");

  if (
    n1Merge5.value == n1Answer.value &&
    n2Merge5.value == n2Answer.value &&
    n3Merge5.value == n3Answer.value
  ) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next16");
    next11.style.display = "none";
    //show next button
    var next17 = document.getElementById("next17");
    next17.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next11 = document.getElementById("next16");
    next11.style.display = "block";
  }
}

//the three grouped
export function Next17() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge5");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge3 = document.getElementById("chooseMerge6");
  chooseMerge3.style.display = "block";
  var next11 = document.getElementById("next16");
  next11.style.display = "none";
  var next113 = document.getElementById("next17");
  next113.style.display = "none";

  //intialize
  //intialize the values
  var n1C = document.getElementById("n1CM6");
  var n2C = document.getElementById("n2CM6");
  var n3C = document.getElementById("n3CM6");
  var n4C = document.getElementById("n4CM6");
  var n5C = document.getElementById("n5CM6");
  var n6C = document.getElementById("n6CM6");
  var n7C = document.getElementById("n7CM6");
  var n8C = document.getElementById("n8CM6");
  var n9C = document.getElementById("n9CM6");
  var n10C = document.getElementById("n10CM6");

  //3 merged together
  n1C.value = document.getElementById("n1A5").value;
  n2C.value = document.getElementById("n2A5").value;
  n3C.value = document.getElementById("n3A5").value;
  //second merged ones
  n4C.value = document.getElementById("n1A2").value;

  n5C.value = document.getElementById("n2A2").value;

  //thirdmerged ones
  n6C.value = document.getElementById("n1A3").value;
  n7C.value = document.getElementById("n2A3").value;
  //rest alone
  n8C.value = document.getElementById("n8CM3").value;
  //to be merged
  n9C.value = document.getElementById("n1A4").value;
  n10C.value = document.getElementById("n2A4").value;
}

//check the feedbac and sort the correct answers
export function checkFeedbackCorrect12() {
  //show the next button
  var next11 = document.getElementById("next17");
  next11.style.display = "none";

  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set the values of the answer
  //set teh value of the answer of merge 4
  //get the answers
  var n1A = document.getElementById("n1A6");
  n1A.value = document.getElementById("n6CM6").value;
  var n2A = document.getElementById("n2A6");
  n2A.value = document.getElementById("n7CM6").value;
  var n3A = document.getElementById("n3A6");
  n3A.value = document.getElementById("n8CM6").value;

  //merge the 3 numbers together
  var merge6 = [n1A.value, n2A.value, n3A.value];
  merge6.sort(function (a, b) {
    return b - a;
  });

  n1A.value = merge6[2];
  n2A.value = merge6[1];
  n3A.value = merge6[0];
  console.log("merge 6 sort" + n1A.value, n2A.value, n3A.value);
  //show step 10 block
  var next10 = document.getElementById("next18");
  next10.style.display = "block";
  var next10 = document.getElementById("next16");
  next10.style.display = "none";
}

export function Next18() {
  //show merge 4
  var next10 = document.getElementById("next17");
  next10.style.display = "none";

  var next11 = document.getElementById("next18");
  next11.style.display = "none";

  //intialize it
  var merge6 = document.getElementById("merge6");
  merge6.style.display = "block";
  var n1I = document.getElementById("n1Input6");
  var n2I = document.getElementById("n2Input6");

  var n3I = document.getElementById("n3Input6");

  //need to be grouped
  n1I.value = document.getElementById("n6CM6").value;
  n2I.value = document.getElementById("n7CM6").value;
  n3I.value = document.getElementById("n8CM6").value;
}
//make a verify button
export function VerifyAnswer5() {
  //the user input
  var n1Merge6 = document.getElementById("n1Input6");
  var n2Merge6 = document.getElementById("n2Input6");
  var n3Merge6 = document.getElementById("n3Input6");

  var n1Answer = document.getElementById("n1A6");
  var n2Answer = document.getElementById("n2A6");
  var n3Answer = document.getElementById("n3A6");

  if (
    n1Merge6.value == n1Answer.value &&
    n2Merge6.value == n2Answer.value &&
    n3Merge6.value == n3Answer.value
  ) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next17");
    next11.style.display = "none";
    var next115 = document.getElementById("next18");
    next115.style.display = "none";
    //show next button
    var next19 = document.getElementById("next19");
    next19.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next11 = document.getElementById("next18");
    next11.style.display = "block";
  }
}

export function Next19() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge6");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge7 = document.getElementById("chooseMerge7");
  chooseMerge7.style.display = "block";
  var next11 = document.getElementById("next17");
  next11.style.display = "none";
  var next113 = document.getElementById("next18");
  next113.style.display = "none";
  var next113 = document.getElementById("next19");
  next113.style.display = "none";

  //intialize
  //intialize the values
  var n1C = document.getElementById("n1CM7");
  var n2C = document.getElementById("n2CM7");
  var n3C = document.getElementById("n3CM7");
  var n4C = document.getElementById("n4CM7");
  var n5C = document.getElementById("n5CM7");
  var n6C = document.getElementById("n6CM7");
  var n7C = document.getElementById("n7CM7");
  var n8C = document.getElementById("n8CM7");
  var n9C = document.getElementById("n9CM7");
  var n10C = document.getElementById("n10CM7");

  //3 merged together
  n1C.value = document.getElementById("n1A5").value;
  n2C.value = document.getElementById("n2A5").value;
  n3C.value = document.getElementById("n3A5").value;
  //second merged ones
  n4C.value = document.getElementById("n1A2").value;

  n5C.value = document.getElementById("n2A2").value;

  //thirdmerged ones
  n6C.value = document.getElementById("n1A6").value;
  n7C.value = document.getElementById("n2A6").value;
  //rest alone
  n8C.value = document.getElementById("n3A6").value;
  //to be merged
  n9C.value = document.getElementById("n1A4").value;
  n10C.value = document.getElementById("n2A4").value;
}

//check th feedback and sort the 5 numbers
export function checkFeedbackCorrect13() {
  //show the next button
  var next11 = document.getElementById("next19");
  next11.style.display = "none";

  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set the values of the answer
  //set teh value of the answer of merge 4
  //get the answers
  var n1A = document.getElementById("n1A7");
  n1A.value = document.getElementById("n1CM7").value;
  var n2A = document.getElementById("n2A7");
  n2A.value = document.getElementById("n2CM7").value;
  var n3A = document.getElementById("n3A7");
  n3A.value = document.getElementById("n3CM7").value;
  var n4A = document.getElementById("n4A7");
  n4A.value = document.getElementById("n4CM7").value;
  var n5A = document.getElementById("n5A7");
  n5A.value = document.getElementById("n5CM7").value;

  //merge the 3 numbers together
  //merge the 5 numbers together
  var merge7 = [n1A.value, n2A.value, n3A.value, n4A.value, n5A.value];
  merge7.sort(function (a, b) {
    return b - a;
  });
  console.log(merge7);

  n1A.value = merge7[4];
  n2A.value = merge7[3];
  n3A.value = merge7[2];
  n4A.value = merge7[1];
  n5A.value = merge7[0];
  console.log(
    "merge 7 sort" + n1A.value,
    n2A.value,
    n3A.value,
    n4A.value,
    n5A.value
  );
  //show step 10 block
  var next10 = document.getElementById("next19");
  next10.style.display = "none";
  var next10 = document.getElementById("next20");
  next10.style.display = "block";
}

export function Next20() {
  //show merge 4
  var next10 = document.getElementById("next18");
  next10.style.display = "none";

  var next11 = document.getElementById("next19");
  next11.style.display = "none";
  var next11 = document.getElementById("next20");
  next11.style.display = "none";

  //intialize it
  var merge7 = document.getElementById("merge7");
  merge7.style.display = "block";
  var n1I = document.getElementById("n1Input7");
  var n2I = document.getElementById("n2Input7");

  var n3I = document.getElementById("n3Input7");
  var n4I = document.getElementById("n4Input7");

  var n5I = document.getElementById("n5Input7");
  //need to be grouped
  n1I.value = document.getElementById("n1CM7").value;
  n2I.value = document.getElementById("n2CM7").value;
  n3I.value = document.getElementById("n3CM7").value;
  n4I.value = document.getElementById("n4CM7").value;
  n5I.value = document.getElementById("n5CM7").value;
}

//make a verify button
export function VerifyAnswer6() {
  //the user input
  var n1Merge7 = document.getElementById("n1Input7");
  var n2Merge7 = document.getElementById("n2Input7");
  var n3Merge7 = document.getElementById("n3Input7");
  var n4Merge7 = document.getElementById("n4Input7");
  var n5Merge7 = document.getElementById("n5Input7");

  var n1Answer = document.getElementById("n1A7");
  var n2Answer = document.getElementById("n2A7");
  var n3Answer = document.getElementById("n3A7");
  var n4Answer = document.getElementById("n4A7");
  var n5Answer = document.getElementById("n5A7");
  if (
    n1Merge7.value == n1Answer.value &&
    n2Merge7.value == n2Answer.value &&
    n3Merge7.value == n3Answer.value &&
    n4Merge7.value == n4Answer.value &&
    n5Merge7.value == n5Answer.value
  ) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next18");
    next11.style.display = "none";
    var next115 = document.getElementById("next19");
    next115.style.display = "none";
    var next20 = document.getElementById("next20");
    next20.style.display = "none";
    //show next button
    var next21 = document.getElementById("next21");
    next21.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next11 = document.getElementById("next20");
    next11.style.display = "block";
  }
}

//show the 5 grouped numbers
export function Next21() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge7");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge7 = document.getElementById("chooseMerge8");
  chooseMerge7.style.display = "block";
  var next11 = document.getElementById("next17");
  next11.style.display = "none";
  var next113 = document.getElementById("next18");
  next113.style.display = "none";
  var next113 = document.getElementById("next19");
  next113.style.display = "none";
  var next20 = document.getElementById("next20");
  next113.style.display = "none";
  var next21 = document.getElementById("next21");
  next113.style.display = "none";

  //intialize
  //intialize the values
  var n1C = document.getElementById("n1CM8");
  var n2C = document.getElementById("n2CM8");
  var n3C = document.getElementById("n3CM8");
  var n4C = document.getElementById("n4CM8");
  var n5C = document.getElementById("n5CM8");
  var n6C = document.getElementById("n6CM8");
  var n7C = document.getElementById("n7CM8");
  var n8C = document.getElementById("n8CM8");
  var n9C = document.getElementById("n9CM8");
  var n10C = document.getElementById("n10CM8");

  //3 merged together
  n1C.value = document.getElementById("n1A7").value;
  n2C.value = document.getElementById("n2A7").value;
  n3C.value = document.getElementById("n3A7").value;
  //second merged ones
  n4C.value = document.getElementById("n4A7").value;

  n5C.value = document.getElementById("n5A7").value;

  //thirdmerged ones
  n6C.value = document.getElementById("n1A6").value;
  n7C.value = document.getElementById("n2A6").value;
  //rest alone
  n8C.value = document.getElementById("n3A6").value;
  //to be merged
  n9C.value = document.getElementById("n1A4").value;
  n10C.value = document.getElementById("n2A4").value;
}

//check the feedback  correct and sort the correct answers
export function checkFeedbackCorrect14() {
  //show the next button
  var next11 = document.getElementById("next21");
  next11.style.display = "none";

  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set the values of the answer
  //set teh value of the answer of merge 4
  //get the answers
  var n1A = document.getElementById("n1A8");
  n1A.value = document.getElementById("n6CM8").value;
  var n2A = document.getElementById("n2A8");
  n2A.value = document.getElementById("n7CM8").value;
  var n3A = document.getElementById("n3A8");
  n3A.value = document.getElementById("n8CM8").value;
  var n4A = document.getElementById("n4A8");
  n4A.value = document.getElementById("n9CM8").value;
  var n5A = document.getElementById("n5A8");
  n5A.value = document.getElementById("n10CM8").value;

  //merge the 3 numbers together
  //merge the 5 numbers together
  var merge8 = [n1A.value, n2A.value, n3A.value, n4A.value, n5A.value];
  merge8.sort(function (a, b) {
    return b - a;
  });
  console.log(merge8);

  n1A.value = merge8[4];
  n2A.value = merge8[3];
  n3A.value = merge8[2];
  n4A.value = merge8[1];
  n5A.value = merge8[0];
  console.log(
    "merge 8 sort" + n1A.value,
    n2A.value,
    n3A.value,
    n4A.value,
    n5A.value
  );
  //show step 10 block
  var next10 = document.getElementById("next19");
  next10.style.display = "none";
  var next10 = document.getElementById("next20");
  next10.style.display = "none";
  var next21 = document.getElementById("next21");
  next21.style.display = "none";

  //show next button
  var next22 = document.getElementById("next22");
  next22.style.display = "block";
}

//fucntion to show merge 8 and assign values
export function Next22() {
  //show merge 4
  var next10 = document.getElementById("next18");
  next10.style.display = "none";

  var next11 = document.getElementById("next19");
  next11.style.display = "none";
  var next11 = document.getElementById("next20");
  next11.style.display = "none";
  var next11 = document.getElementById("next22");
  next11.style.display = "none";

  //intialize it
  var merge7 = document.getElementById("merge8");
  merge7.style.display = "block";
  var n1I = document.getElementById("n1Input8");
  var n2I = document.getElementById("n2Input8");

  var n3I = document.getElementById("n3Input8");
  var n4I = document.getElementById("n4Input8");

  var n5I = document.getElementById("n5Input8");
  //need to be grouped
  n1I.value = document.getElementById("n6CM8").value;
  n2I.value = document.getElementById("n7CM8").value;
  n3I.value = document.getElementById("n8CM8").value;
  n4I.value = document.getElementById("n9CM8").value;
  n5I.value = document.getElementById("n10CM8").value;
}

//make a verify button
export function VerifyAnswer7() {
  //the user input
  var n1Merge8 = document.getElementById("n1Input8");
  var n2Merge8 = document.getElementById("n2Input8");
  var n3Merge8 = document.getElementById("n3Input8");
  var n4Merge8 = document.getElementById("n4Input8");
  var n5Merge8 = document.getElementById("n5Input8");

  var n1Answer = document.getElementById("n1A8");
  var n2Answer = document.getElementById("n2A8");
  var n3Answer = document.getElementById("n3A8");
  var n4Answer = document.getElementById("n4A8");
  var n5Answer = document.getElementById("n5A8");
  if (
    n1Merge8.value == n1Answer.value &&
    n2Merge8.value == n2Answer.value &&
    n3Merge8.value == n3Answer.value &&
    n4Merge8.value == n4Answer.value &&
    n5Merge8.value == n5Answer.value
  ) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next18");
    next11.style.display = "none";
    var next115 = document.getElementById("next19");
    next115.style.display = "none";
    var next20 = document.getElementById("next20");
    next20.style.display = "none";
    var next21 = document.getElementById("next21");
    next21.style.display = "none";
    var next22 = document.getElementById("next22");
    next22.style.display = "none";
    //show next button
    var next23 = document.getElementById("next23");
    next23.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
    //hide verify button
    var next22 = document.getElementById("next22");
    next22.style.display = "block";
  }
}

//show the 2 groups sorted and only 1 connection to merge it all
export function Next23() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge8");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge7 = document.getElementById("chooseMerge9");
  chooseMerge7.style.display = "block";
  var next11 = document.getElementById("next17");
  next11.style.display = "none";
  var next113 = document.getElementById("next18");
  next113.style.display = "none";
  var next113 = document.getElementById("next19");
  next113.style.display = "none";
  var next20 = document.getElementById("next20");
  next113.style.display = "none";
  var next21 = document.getElementById("next21");
  next113.style.display = "none";
  var next21 = document.getElementById("next22");
  next113.style.display = "none";
  var next21 = document.getElementById("next23");
  next113.style.display = "none";

  //intialize
  //intialize the values
  var n1C = document.getElementById("n1CM9");
  var n2C = document.getElementById("n2CM9");
  var n3C = document.getElementById("n3CM9");
  var n4C = document.getElementById("n4CM9");
  var n5C = document.getElementById("n5CM9");
  var n6C = document.getElementById("n6CM9");
  var n7C = document.getElementById("n7CM9");
  var n8C = document.getElementById("n8CM9");
  var n9C = document.getElementById("n9CM9");
  var n10C = document.getElementById("n10CM9");

  //3 merged together
  n1C.value = document.getElementById("n1A7").value;
  n2C.value = document.getElementById("n2A7").value;
  n3C.value = document.getElementById("n3A7").value;
  //second merged ones
  n4C.value = document.getElementById("n4A7").value;

  n5C.value = document.getElementById("n5A7").value;

  //thirdmerged ones
  n6C.value = document.getElementById("n1A8").value;
  n7C.value = document.getElementById("n2A8").value;
  //rest alone
  n8C.value = document.getElementById("n3A8").value;
  //to be merged
  n9C.value = document.getElementById("n4A8").value;
  n10C.value = document.getElementById("n5A8").value;
}

//check the feedback  + sort all 10
export function checkFeedbackCorrect15() {
  var next11 = document.getElementById("next23");
  next11.style.display = "none";

  // correctAudio.play();
  correctaudio.play();
  var feedback = document.getElementById("fedback1");
  feedback.classList.toggle("show");
  feedback.style.display = "block";

  var feedbackwrong = document.getElementById("fedback2");
  feedbackwrong.classList.toggle("none");
  feedbackwrong.style.display = "none";

  document.getElementById("feedbackcorrect").value = "Correct Answer";
  //set the values of the answer
  //set teh value of the answer of merge 4
  //get the answers
  var n1A = document.getElementById("n1A9");
  n1A.value = document.getElementById("n1CM9").value;
  var n2A = document.getElementById("n2A9");
  n2A.value = document.getElementById("n2CM9").value;
  var n3A = document.getElementById("n3A9");
  n3A.value = document.getElementById("n3CM9").value;
  var n4A = document.getElementById("n4A9");
  n4A.value = document.getElementById("n4CM9").value;
  var n5A = document.getElementById("n5A9");
  n5A.value = document.getElementById("n5CM9").value;

  var n6A = document.getElementById("n6A9");
  n6A.value = document.getElementById("n6CM9").value;
  var n7A = document.getElementById("n7A9");
  n7A.value = document.getElementById("n7CM9").value;
  var n8A = document.getElementById("n8A9");
  n8A.value = document.getElementById("n8CM9").value;
  var n9A = document.getElementById("n9A9");
  n9A.value = document.getElementById("n9CM9").value;
  var n10A = document.getElementById("n10A9");
  n10A.value = document.getElementById("n10CM9").value;

  //merge the 3 numbers together
  //merge the 5 numbers together
  var merge9 = [
    n1A.value,
    n2A.value,
    n3A.value,
    n4A.value,
    n5A.value,
    n6A.value,
    n7A.value,
    n8A.value,
    n9A.value,
    n10A.value,
  ];
  merge9.sort(function (a, b) {
    return b - a;
  });

  n1A.value = merge9[9];
  n2A.value = merge9[8];
  n3A.value = merge9[7];
  n4A.value = merge9[6];
  n5A.value = merge9[5];
  n6A.value = merge9[4];
  n7A.value = merge9[3];
  n8A.value = merge9[2];
  n9A.value = merge9[1];
  n10A.value = merge9[0];
  console.log(
    "merge 9 sort" + n1A.value,
    n2A.value,
    n3A.value,
    n4A.value,
    n5A.value,
    n6A.value,
    n7A.value,
    n8A.value,
    n9A.value,
    n10A.value
  );
  //show step 10 block
  var next10 = document.getElementById("next19");
  next10.style.display = "none";
  var next10 = document.getElementById("next20");
  next10.style.display = "none";
  var next21 = document.getElementById("next23");
  next21.style.display = "none";

  //show next button
  var next24 = document.getElementById("next24");
  next24.style.display = "block";
}

//show the merge 9 and intialize IT
export function Next24() {
  //show merge 4
  var next10 = document.getElementById("next18");
  next10.style.display = "none";

  var next11 = document.getElementById("next19");
  next11.style.display = "none";
  var next11 = document.getElementById("next20");
  next11.style.display = "none";
  var next11 = document.getElementById("next24");
  next11.style.display = "none";

  //intialize it
  var merge7 = document.getElementById("merge9");
  merge7.style.display = "block";

  var n1I = document.getElementById("n1Input9");
  var n2I = document.getElementById("n2Input9");
  var n3I = document.getElementById("n3Input9");
  var n4I = document.getElementById("n4Input9");
  var n5I = document.getElementById("n5Input9");

  var n6I = document.getElementById("n6Input9");
  var n7I = document.getElementById("n7Input9");
  var n8I = document.getElementById("n8Input9");
  var n9I = document.getElementById("n9Input9");
  var n10I = document.getElementById("n10Input9");
  //need to be grouped
  n1I.value = document.getElementById("n1CM9").value;
  n2I.value = document.getElementById("n2CM9").value;
  n3I.value = document.getElementById("n3CM9").value;
  n4I.value = document.getElementById("n4CM9").value;
  n5I.value = document.getElementById("n5CM9").value;
  n6I.value = document.getElementById("n6CM9").value;
  n7I.value = document.getElementById("n7CM9").value;
  n8I.value = document.getElementById("n8CM9").value;
  n9I.value = document.getElementById("n9CM9").value;
  n10I.value = document.getElementById("n10CM9").value;
}

//verigy button
export function VerifyAnswer8() {
  //the user input
  var n1Merge9 = document.getElementById("n1Input9");
  var n2Merge9 = document.getElementById("n2Input9");
  var n3Merge9 = document.getElementById("n3Input9");
  var n4Merge9 = document.getElementById("n4Input9");
  var n5Merge9 = document.getElementById("n5Input9");
  var n6Merge9 = document.getElementById("n6Input9");
  var n7Merge9 = document.getElementById("n7Input9");
  var n8Merge9 = document.getElementById("n8Input9");
  var n9Merge9 = document.getElementById("n9Input9");
  var n10Merge9 = document.getElementById("n10Input9");

  var n1Answer = document.getElementById("n1A9");
  var n2Answer = document.getElementById("n2A9");
  var n3Answer = document.getElementById("n3A9");
  var n4Answer = document.getElementById("n4A9");
  var n5Answer = document.getElementById("n5A9");

  var n6Answer = document.getElementById("n6A9");
  var n7Answer = document.getElementById("n7A9");
  var n8Answer = document.getElementById("n8A9");
  var n9Answer = document.getElementById("n9A9");
  var n10Answer = document.getElementById("n10A9");
  if (
    n1Merge9.value == n1Answer.value &&
    n2Merge9.value == n2Answer.value &&
    n3Merge9.value == n3Answer.value &&
    n4Merge9.value == n4Answer.value &&
    n5Merge9.value == n5Answer.value &&
    n6Merge9.value == n6Answer.value &&
    n7Merge9.value == n7Answer.value &&
    n8Merge9.value == n8Answer.value &&
    n9Merge9.value == n9Answer.value &&
    n10Merge9.value == n10Answer.value
  ) {
    // correctAudio.play();
    correctaudio.play();
    var feedback = document.getElementById("fedback1");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackwrong = document.getElementById("fedback2");
    feedbackwrong.classList.toggle("none");
    feedbackwrong.style.display = "none";

    document.getElementById("feedbackcorrect").value = "Correct Answer";

    //show the next button
    var next11 = document.getElementById("next18");
    next11.style.display = "none";
    var next115 = document.getElementById("next19");
    next115.style.display = "none";
    var next20 = document.getElementById("next20");
    next20.style.display = "none";
    var next21 = document.getElementById("next21");
    next21.style.display = "none";
    var next22 = document.getElementById("next24");
    next22.style.display = "none";

    //view sorted array button
    var next25 = document.getElementById("next25");
    next25.style.display = "block";
  } else {
    var feedback = document.getElementById("fedback2");
    feedback.classList.toggle("show");
    feedback.style.display = "block";

    var feedbackcorrect = document.getElementById("fedback1");
    feedbackcorrect.style.display = "none";

    document.getElementById("feedbackwrong").value =
      "Wrong Answer Please try again!";

    //play wrong audio
    wrongAudio.play();
  }
}

//button to show the entire merged thing and congratulations
export function Next25() {
  var feedback = document.getElementById("fedback1");

  feedback.style.display = "none";

  //hide merge 2
  //show merge2 option
  var merge2 = document.getElementById("merge9");
  merge2.style.display = "none";

  //show the third merge choice
  var chooseMerge7 = document.getElementById("sortedArray");
  chooseMerge7.style.display = "block";
  var next11 = document.getElementById("next17");
  next11.style.display = "none";
  var next113 = document.getElementById("next18");
  next113.style.display = "none";
  var next113 = document.getElementById("next19");
  next113.style.display = "none";
  var next20 = document.getElementById("next20");
  next113.style.display = "none";
  var next21 = document.getElementById("next21");
  next113.style.display = "none";
  var next21 = document.getElementById("next22");
  next113.style.display = "none";
  var next21 = document.getElementById("next23");
  next113.style.display = "none";

  var next21 = document.getElementById("next25");
  next113.style.display = "none";
  //intialize
  //intialize the values
  var n1C = document.getElementById("n1CM10");
  var n2C = document.getElementById("n2CM10");
  var n3C = document.getElementById("n3CM10");
  var n4C = document.getElementById("n4CM10");
  var n5C = document.getElementById("n5CM10");
  var n6C = document.getElementById("n6CM10");
  var n7C = document.getElementById("n7CM10");
  var n8C = document.getElementById("n8CM10");
  var n9C = document.getElementById("n9CM10");
  var n10C = document.getElementById("n10CM10");

  //3 merged together
  n1C.value = document.getElementById("n1A9").value;
  n2C.value = document.getElementById("n2A9").value;
  n3C.value = document.getElementById("n3A9").value;

  n4C.value = document.getElementById("n4A9").value;

  n5C.value = document.getElementById("n5A9").value;

  n6C.value = document.getElementById("n6A9").value;
  n7C.value = document.getElementById("n7A9").value;

  n8C.value = document.getElementById("n8A9").value;

  n9C.value = document.getElementById("n9A9").value;
  n10C.value = document.getElementById("n10A9").value;
}
// function dragStart(e) {
//   console.log("merged");
//   e.dataTransfer.setData("text/plain", e.target.id);
//   setTimeout(() => {
//     e.target.classList.add("hide");
//   }, 0);

//   var n1 = document.getElementById("n1Step7");
//   console.log(n1.value);
// }

// function dragEnter(e) {
//   e.preventDefault();
//   e.target.classList.add("drag-over");

//   var n1 = document.getElementById("n1Step7");
//   console.log(n1.value);
// }

// function dragOver(e) {
//   e.preventDefault();
//   e.target.classList.add("drag-over");

//   var n1 = document.getElementById("n1Step7");
//   n1.value = e.value;
//   console.log(n1.value);
// }

// function dragLeave(e) {
//   e.target.classList.remove("drag-over");

//   var n1 = document.getElementById("n1Step7");

//   console.log(n1.textContent);
// }

// function drop(e) {
//   e.target.classList.remove("drag-over");

//   // get the draggable element
//   const id = e.dataTransfer.getData("text/plain");
//   const draggable = document.getElementById(id);

//   // add it to the drop target
//   e.target.appendChild(draggable);

//   // display the draggable element
//   draggable.classList.remove("hide");

//   console.log(e.dataTransfer.getData("text").value);
// }

//   <div className="drop-targets">
//     <div className="box">
//       {/* <!--
//   group 1 -- > */}
//       <input
//         type="number"
//         id="n1Step7"
//         name="n1"
//         draggable="true"
//         size="1"
//         readOnly
//       />
//     </div>
//     {/* end of box */}
//     <div className="box" value="">
//       <input
//         type="number"
//         id="n2Step7"
//         draggable="true"
//         name="n2"
//         size="1"
//         readOnly
//       />
//     </div>
//     <div class="box" id="box3">
//       {/* <!--group 2 -- > */}
//       <input
//         type="number"
//         id="n3Step7"
//         draggable="true"
//         name="n3"
//         size="1"
//         readOnly
//       />

//       {/* end of drop-targets */}
//     </div>
//   </div>
