import sound from "./correct.mp3";
import wrong from "./wrong.mp3";

const wrongAudio = new Audio(wrong);
const audio = new Audio(sound);

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

  const wrongAudio = document.getElementById("wrong-audio");
  wrongAudio.play();
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

export function Wrong() {
  var show = document.getElementById("wrong");
  show.classList.toggle("show");
  document.getElementById("wrong").value = "Wrong answer please try again";
  wrongAudio.play();
  //   alert("Wrong answer please try again!");
}
//    <div className="footer"></div>
//         <h1>
//           Hello
//           <button onClick={this.playSound}>Play Audio Feedback Sample</button>
//         </h1>

export function Next1() {
  var show = document.getElementById("right");
  show.classList.toggle("show");
  var show = document.getElementById("wrong");
  show.classList.toggle("none");

  // var correctAudio = document.getElementById("correct-audio");
  // correctAudio.play();
  audio.play();
}
