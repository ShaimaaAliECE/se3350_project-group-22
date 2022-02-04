/*
  use for sprint 2 dont look at this
*/

// import React, { useState } from "react";
// import './levelone.css';
// import RandomNumbersArray from "../../../randomNumberGenerator";

// // export default class LevelOneScreen extends Component{
// //     Random() {
// //         var size = 10;
// //         var max = 20;
// //         var min = 1;
// //         var numbersArray = RandomNumbersArray(size, max, min);

// //         let input = [];
// //         for (let num of numbersArray)
// //         {
// //             input.push(<input type="text" id={num} className="number" value={num} size={3} />)
// //         }
// //         ReactDOM.render(<>{input}</>, document.getElementById("numbers"));
// //         ReactDOM.render(<><h4>Step 1: A set of 10 numbers is randomly generated!</h4></>, document.getElementById("step1"));
// //       }

// //       next(){
// //         ReactDOM.render(<><h4>Step 2: Split the selected array as evenly as possible</h4></>, document.getElementById("step2"));

// //       }
// //       /*import React, { useState } from 'react';

// // function Example() {
// //   // Declare a new state variable, which we'll call "count"
// //   const [count, setCount] = useState(0);

// //   return (
// //     <div>
// //       <p>You clicked {count} times</p>
// //       <button onClick={() => setCount(count + 1)}>
// //         Click me
// //       </button>
// //     </div>
// //   );
// // }
// // Th*/

// //     render() {
// //         return (
// //                 <div>
// //                   <title>Level 1</title>
// //                   <div>
// //                     <h1>Level 1: MergeSort Algorithm</h1> 
// //                     <button className="home">Home</button>

// //                     <button className="back">Back</button>

// //                     <button className="next" value="Random Number!" onClick={this.next}>Next</button>

// //                     <button className="restart">Restart</button>

// //                     <button className="quit">Quit</button>
// //                   </div>
// //                   <h3> Click on the button to generate 10 random numbers</h3>
// //                   <form id="area" >
// //                     <div id = "numbers"></div>
// //                     <input type="button" defaultValue="Random Number!" onClick={this.Random} />
// //                     <div id="step1"></div>
// //                     {/* step 2 */}
// //                     <div id = "half1"></div>
// //                     <div id = "half2"></div>
// //                     <div id="step2"></div>
// //                     {/* 
// //                    <h1> &#129135</h1> */}
// //                     {/* Step 3:  */}

// //                   </form>
// //                 </div>
// //         );
// //       }
// // }

// export default function LevelOneScreen() {
//   const [step,setStep] = useState("");
//   const [count,setCount] = useState(0);
//   const [array,setArray] = useState();
//   const [split,setSplit] = useState(0);
//   const steps = [
//     "Step 1: A set of 10 numbers is randomly generated!", 
//     "Step 2: Split the selected array as evenly as possible",
//     "Step 3: Split the array even more"
//   ]
//   //function to increment the counter
//   function incrementCounter(){
//     var input =[];
//     setCount(count+1);
//     setStep(steps[count]);
//     alert(array[1].value);

//     //if count === 2
//     if(count == 1){
//       for(var i = 0; i < array.length/2; i++){
//           input.push(<input type="text" id= {i} value={array[i]} size={3} readOnly/>)
//       }
//       setSplit(1);
//       setArray(input);

//       for(var j = array.length/2; j > 0; j--){
//         input.push(<input type="text" id={j} value={array[j]} size={3} readOnly/>)
//       }
//       setSplit(2);
//       setArray(input);
//     }
//   }
//   //function to generate 10 numbers
//   function getRandomNumber() {
//     setCount(0);
//     var size = 10;
//     var max = 20;
//     var min = 1;
//     var numbersArray = RandomNumbersArray(size, max, min);

//     let input = [];
//     for (let num of numbersArray) {
//       input.push(<input type="text" id={num} className="number" value={num} size={3} readOnly/>)
//     }
//     setArray(input);
//   }
//   function decrementCounter(){
//     setCount(count-1);
//     setStep(steps[count]);
//   }
//   return (
//     <div>
//       <title>Level 1</title>
//       <div>
//         <h1>Level 1: MergeSort Algorithm</h1>
//         <button className="home">Home</button>

//         <button className="back" onClick={decrementCounter}>Back</button>

//         <button className="next" onClick={incrementCounter}>Next</button>

//         <button className="restart">Restart</button>

//         <button className="quit">Quit</button>
//       </div>
//       <h3> Click on the button to generate 10 random numbers</h3>
//       <form id="area" >
//         <input type="button" defaultValue="Random Number!" onClick={getRandomNumber} />
//         <div id="numbers">{array}</div>
//         <div id="step1">{count === 1 ? step: null}</div>
//         {/* step 2 */}
//         <div id="half1">{array}</div>
//         <div id="half2">{split === 1 ? {array}:null}</div>
//         <div>hiiii</div>
//         <div id="step2"> {count === 2 ? step: null}</div>
//         {/* Step 3:  */}
//         <div id="half1"></div>
//         <div id="half2"></div>
//         <div id="half3"></div>
//         <div id="half4">hiiii</div>
//         <div id="step2"> {count === 3 ? step: null}</div>
//         {/* Step 3:  */}
//         {/* Step 3:  */}
//         {/* Step 3:  */}
//         {/* Step 3:  */}
//         {/* Step 3:  */}
//         {/* Step 3:  */}
//         {/* Step 3:  */}

        

//       </form>
//     </div>
//   )
// }
