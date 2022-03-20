import React, { Component } from "react";
import styles from "./levelone.css";
import {
  Random,
  Next,
  nextStep3,
  nextStep3C,
  nextStep3C2,
  nextStep3C3,
  nextStep3C4,
  nextStep3C5,
  nextStep3C6,
  nextStep3C7,
  nextStep3C9,
  nextStep3C10,
  nextStep3C8,
  nextStep4C1,
  nextStep4C2,
  nextStep4C3,
  nextStep4C4,
  nextStep4C5,
  nextStep4C6,
  nextStep4C7,
  nextStep4C8,
  nextStep4C9,
  nextStep4C10,
  nextStep4,
  nextStep5,
  nextStep6,
  nextStep6Group2,
  nextStep6Group3,
  nextStep6Group4,
  nextStep7Group2,
  nextStep7,
  nextStep8,
  nextStep8Group2,
  nextStep9,
} from "./levelOne";

export default class levelPage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header1">
            <h1>Level 1: MergeSort Algorithm</h1>
          </div>
          <div className="btnNav">
            <button className="home">Home</button>
            <span style={{ display: "inline-block", width: "20px" }}></span>

            <button className="back">Back</button>
            <span style={{ display: "inline-block", width: "20px" }}></span>

            {/* <!-- button for first step  --> */}
            <button
              id="next"
              className="home"
              value="Random Number!"
              onClick={Random}
            >
              Next
            </button>
            <span style={{ display: "inline-block", width: "20px" }}></span>

            <button className="restart">Restart</button>
            <span style={{ display: "inline-block", width: "20px" }}></span>

            <button className="quit">Quit</button>
          </div>
        </div>
        <div className="instruction1">
          <h3> Click on the button to generate 10 random numbers</h3>
        </div>

        <div className="randomdiv">
          <input
            type="button"
            className="random"
            value="Random Number!"
            onClick={Random}
          />
        </div>
        <form name="rn">
          {/* <!--step1 --> */}
          <div className="hide" id="showStep1">
            <input
              type="text"
              id="step1"
              name="step1"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              <input type="number" id="tb" value="Random Number!" readOnly />
              <input type="number" id="tb2" value="Random Number!" readOnly />
              <input type="number" id="tb3" value="Random Number!" readOnly />
              <input type="number" id="tb4" value="Random Number!" readOnly />
              <input type="number" id="tb5" value="Random Number!" readOnly />
              <input type="number" id="tb6" value="Random Number!" readOnly />
              <input type="number" id="tb7" value="Random Number!" readOnly />
              <input type="number" id="tb8" value="Random Number!" readOnly />
              <input type="number" id="tb9" value="Random Number!" readOnly />
              <input type="number" id="tb10" value="Random Number!" readOnly />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={Next}
            />
          </div>

          {/* //   < !--step 2 -- > */}
          <div className="hide" id="showStep2">
            <input
              type="text"
              id="step2"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              <input type="number" id="n1" name="n1" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n2" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n3" name="n3" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n4" name="n4" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n5" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />

       
       <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n6" name="n2" size="1" readOnly />
              <input type="number" id="n7" name="n2" size="1" readOnly />
              <input type="number" id="n8" name="n2" size="1" readOnly />
              <input type="number" id="n9" name="n2" size="1" readOnly />
              <input type="number" id="n10" name="n2" size="1" readOnly />

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C}
            />
          </div>

          {/* step 3 comparison  */}
          {/* // < !--Step 3: --> */}
          
          <div className="hide" id="showStep3Comparison">
      
            <input
              type="text"
              id="step3c"
              name="step3c"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">

              <input type="number" id="num1c" name="num1c" size="1" style={{ backgroundColor: "red" }}readOnly />
              <input type="number" id="num2c" name="num2c" size="1" style={{ backgroundColor: "red" }}readOnly />
              <input type="number" id="num3c" name="num3c" size="1" style={{ backgroundColor: "red" }}readOnly />

              <span style={{ display: "inline-block", width: "70px" }}></span>

              <input type="number" id="num4c" name="num4c" size="1" readOnly />
              <input type="number" id="num5c" name="num5c" size="1" readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>


                 
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C2}
            />
          </div>
          {/* next step 3 comparison 2 */}
            <div className="hide" id="showstep3c2">
                 <input
              type="text"
              id="step3c2"
              name="step3c2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
              <div className="blockofnum">
              <input type="number" id="num1c2" name="num1c2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="num2c2" name="num2c2" size="1"style={{ backgroundColor: "red" }} readOnly />
               <span style={{ display: "inline-block", width: "60px" }}></span>
              <input type="number" id="num3c2" name="num3c2" size="1"  readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>
                 <span style={{ display: "inline-block", width: "100px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>
              
               <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C3}
                />
                </div>
            </div>
            
            {/* //step 3 c 3 */}
            <div className="hide" id="showstep3c3">
               <input
              type="text"
              id="step3c3"
              name="step3c3"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            /> 
              <div className="blockofnum">
                <input type="number" id="num1c3" name="num1c2" size="1" style={{ backgroundColor: "green" }} readOnly />
                <span style={{ display: "inline-block", width: "30px" }}></span>
              <input type="number" id="num2c3" name="num2c2" size="1" style={{ backgroundColor: "green" }} readOnly />
              
<span style={{ display: "inline-block", width: "100px" }}></span>
               
         <span style={{ display: "inline-block", width: "100px" }}></span>
                <span style={{ display: "inline-block", width: "100px" }}></span>
                         <span style={{ display: "inline-block", width: "100px" }}></span>
<span style={{ display: "inline-block", width: "100px" }}></span>
                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>
              
               <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C4}
                />
                </div>
            </div>
   
            {/* step 3 c four  */}
           <div className="hide" id="showstep3c4">
                 <input
              type="text"
              id="step3c4"
              name="step3c4"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
              <div className="blockofnum">
              <input type="number" id="num1c4" name="num1c2" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="num2c4" name="num2c2" size="1"style={{ backgroundColor: "green" }} readOnly />
               <span style={{ display: "inline-block", width: "60px" }}></span>
              <input type="number" id="num3c4" name="num3c2" size="1" style={{ backgroundColor: "red" }} readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>
                 <span style={{ display: "inline-block", width: "100px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>
              
               <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C5}
                />
                </div>
            </div>
            
            {/* step 3 c5 */}
             <div className="hide" id="showstep3c5">
                 <input
              type="text"
              id="step3c5"
              name="step3c5"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
              <div className="blockofnum">
              <input type="number" id="num1c5" name="num1c2" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="num2c5" name="num2c2" size="1"style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="num3c5" name="num3c2" size="1" style={{ backgroundColor: "green" }} readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>
                 <span style={{ display: "inline-block", width: "100px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>
              
               <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C6}
                />
                </div>
            </div>
            {/* // step c 6  */}
            <div className="hide" id="showStep3c6">
      
            <input
              type="text"
              id="step3c6"
              name="step3c6"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">

              <input type="number" id="num1c6" name="num1c6" size="1" readOnly />
              <input type="number" id="num2c6" name="num2c6" size="1" readOnly />
              <input type="number" id="num3c6" name="num3c6" size="1" readOnly />

              <span style={{ display: "inline-block", width: "70px" }}></span>

              <input type="number" id="num4c6" name="num4c6" size="1" style={{ backgroundColor: "red" }}readOnly />
              <input type="number" id="num5c6" name="num5c6" size="1" style={{ backgroundColor: "red" }}readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>


                 
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C7}
            />
              </div>
            </div>
            
            {/* step c 7 */}
            <div className="hide" id="showStep3c7">
      
            <input
              type="text"
              id="step3c7"
              name="step3c7"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">
 <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>
              
              <span style={{ display: "inline-block", width: "70px" }}></span>

              <input type="number" id="num4c7" name="num4c6" size="1" readOnly />
               <span style={{ display: "inline-block", width: "70px" }}></span>
                <input type="number" id="num5c7" name="num5c6" size="1"  readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>


                 
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C8}
            />
              </div>
            </div>

            {/* step c8 */}
            <div className="hide" id="showStep3c8">
      
            <input
              type="text"
              id="step3c8"
              name="step3c8"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">
 <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>
              
              <span style={{ display: "inline-block", width: "70px" }}></span>

              <input type="number" id="num4c8" name="num4c8" size="1" style={{ backgroundColor: "green" }}readOnly />
                <input type="number" id="num5c8" name="num5c8" size="1" style={{ backgroundColor: "green" }} readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>


                 
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C9}
            />
              </div>
            </div>
            
            {/* step c 9  */}
            <div className="hide" id="showStep3c9">
      
            <input
              type="text"
              id="step3c9"
              name="step3c9"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">

              <input type="number" id="num1c9" name="num1c6" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="num2c9" name="num2c6" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="num3c9" name="num3c6" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="num4c9" name="num4c6" size="1" style={{ backgroundColor: "green" }}readOnly />
              <input type="number" id="num5c9" name="num5c6" size="1" style={{ backgroundColor: "green" }}readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

               <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "100px" }}></span>

                 <span style={{ display: "inline-block", width: "50px" }}></span>


                 
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep3C10}
            />
              </div>
               {/* //step c10 */}
               <div className="hide" id="showStep3c10">
            <input
              type="text"
              id="step3c10"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              <input type="number" id="n1c10" name="n1" size="1"  readOnly />
              <input type="number" id="n2c10" name="n2" size="1"  readOnly />
              <input type="number" id="n3c10" name="n3" size="1" readOnly />
              <input type="number" id="n4c10" name="n4" size="1"  readOnly />
              <input type="number" id="n5c10" name="n2" size="1" readOnly />

       
       <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n6c10" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n7c10" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n8c10" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n9c10" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n10c10" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C1}
            />
              </div>
                 {/* step 4 c 1 */}
                <div className="hide" id="showStep4c1">
            <input
              type="text"
              id="step4c1"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
       <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n6c41" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n7c42" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n8c43" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <input type="number" id="n9c44" name="n2" size="1"  readOnly />
              <input type="number" id="n10c45" name="n2" size="1" readOnly />

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C2}
            />
          </div>
        
              {/* step 4 c2 */}
              <div className="hide" id="showStep4c2">
            <input
              type="text"
              id="step4c2"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
       <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n46c2" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
                  <input type="number" id="n47c2" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
                  <span style={{ display: "inline-block", width: "50px" }}></span>
              <input type="number" id="n48c2" name="n2" size="1"  readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
  <span style={{ display: "inline-block", width: "100px" }}></span>

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C3}
            />
              </div>

              {/* step 4c3 */}
                      
              <div className="hide" id="showStep4c3">
            <input
              type="text"
              id="step4c3"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
              <span style={{ display: "inline-block", width: "200px" }}></span>
                  <input type="number" id="n46c3" name="n2" size="1" readOnly />
                  <span style={{ display: "inline-block", width: "30px" }}></span>
              <input type="number" id="n47c3" name="n2" size="1"  readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C4}
            />
              </div>

              {/* 4 c4  */}
               <div className="hide" id="showStep4c4">
            <input
              type="text"
              id="step4c4"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
              <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n46c4" name="n2" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="n47c4" name="n2" size="1" style={{ backgroundColor: "green" }} readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C5}
            />
              </div>


              {/* 4 c5  */}
               <div className="hide" id="showStep4c5">
            <input
              type="text"
              id="step4c5"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
              <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n46c5" name="n2" size="1"  readOnly />
                  <input type="number" id="n47c5" name="n2" size="1"  readOnly />
                        <span style={{ display: "inline-block", width: "50px" }}></span>
              <input type="number" id="n48c5" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C6}
            />
              </div>
              
               {/* 4 c6  */}
               <div className="hide" id="showStep4c6">
            <input
              type="text"
              id="step4c6"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
              <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n46c6" name="n2" size="1" style={{ backgroundColor: "green" }}  readOnly />
                  <input type="number" id="n47c6" name="n2" size="1" style={{ backgroundColor: "green" }} readOnly />
              <input type="number" id="n48c6" name="n2" size="1" style={{ backgroundColor: "green" }} readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <span style={{ display: "inline-block", width: "100px" }}></span>

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C7}
            />
              </div>

                            
               {/* 4 c7  */}
               <div className="hide" id="showStep4c7">
            <input
              type="text"
              id="step4c7"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                         <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
       <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n46c7" name="n2" size="1"  readOnly />
              <input type="number" id="n47c7" name="n2" size="1"  readOnly />
              <input type="number" id="n48c7" name="n2" size="1"  readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <input type="number" id="n49c7" name="n2" size="1"  style={{ backgroundColor: "red" }}readOnly />
              <input type="number" id="n410c7" name="n2" size="1" style={{ backgroundColor: "red" }}readOnly />
              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C8}
            />
              </div>


              {/* 4 c8  */}
               <div className="hide" id="showStep4c8">
            <input
              type="text"
              id="step4c8"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                         <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
       <span style={{ display: "inline-block", width: "200px" }}></span>
      <span style={{ display: "inline-block", width: "180px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
                  <input type="number" id="n49c8" name="n2" size="1"  readOnly />
                  <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n410c8" name="n2" size="1" readOnly />
              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C9}
            />
              </div>

              {/* 4 c9  */}
               <div className="hide" id="showStep4c9">
            <input
              type="text"
              id="step4c9"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                         <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
       <span style={{ display: "inline-block", width: "200px" }}></span>
      <span style={{ display: "inline-block", width: "180px" }}></span>
              <span style={{ display: "inline-block", width: "50px" }}></span>
                  <input type="number" id="n49c9" name="n2" size="1" style={{ backgroundColor: "green" }} readOnly />
 
              <input type="number" id="n410c9" name="n2" size="1" style={{ backgroundColor: "green" }} readOnly />
              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C10}
            />
              </div>

              {/* step c10 merge the five all together  */}
                  <div className="hide" id="showStep4c10">
            <input
              type="text"
              id="step4c1"
              name="step2"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "100px" }}></span>
                  <span style={{ display: "inline-block", width: "80px" }}></span>


       
       <span style={{ display: "inline-block", width: "200px" }}></span>
              <input type="number" id="n6c41" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n7c42" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <input type="number" id="n8c43" name="n2" size="1" style={{ backgroundColor: "red" }} readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              <input type="number" id="n9c44" name="n2" size="1"  readOnly />
              <input type="number" id="n10c45" name="n2" size="1" readOnly />

              
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4C2}
            />
              </div>
              
            </div>

         
            
          {/* // < !--Step 3: --> */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="showStep3">
            <span style={{ display: "inline-block", width: "100px" }}></span>
            <input
              type="text"
              id="step3"
              name="step3"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              size="80"
              readOnly
            />
            <div className="blockofnum">
              <input type="number" id="num1" name="n1" size="1" readOnly />
              <input type="number" id="num2" name="n2" size="1" readOnly />
              <input type="number" id="num3" name="n3" size="1" readOnly />

              <span style={{ display: "inline-block", width: "70px" }}></span>

              <input type="number" id="num4" name="n4" size="1" readOnly />
              <input type="number" id="num5" name="n4" size="1" readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

              <input type="number" id="num6" name="n1" size="1" readOnly />
              <input type="number" id="num7" name="n2" size="1" readOnly />
              <input type="number" id="num8" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "100px" }}></span>

              <input type="number" id="num9" name="n2" size="1" readOnly />
              <input type="number" id="num10" name="n2" size="1" readOnly />
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep4}
            />
          </div>

          {/* < !--  step 4 button-- > < !--step4 --> */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="showStep4">
            <input
              type="text"
              id="step4"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              {/* <!-- group 1 -- > */}
              <input type="number" id="n1Step4" name="n1" size="1" readOnly />
              <input type="number" id="n2Step4" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "60px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step4" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step4" name="n4" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n5Step4" name="n4" size="1" readOnly />
              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "80px" }}></span>
              <input type="number" id="n6Step4" name="n1" size="1" readOnly />
              <input type="number" id="n7Step4" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--   group 4 -- > */}
              <input type="number" id="n8Step4" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step4" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step4" name="n2" size="1" readOnly />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep5}
            />
          </div>

          {/* < !--step5 --> */}

          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="showStep5">
            <input
              type="text"
              id="step5"
              size="80"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            <div className="blockofnum">
              {/* <!--
            group 1 -- > */}
              <input type="number" id="n1Step5" name="n1" size="1" readOnly />
              <span style={{ display: "inline-block", width: "15px" }}></span>
              <input type="number" id="n2Step5" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "60px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step5" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "50px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step5" name="n4" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n5Step5" name="n4" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "60px" }}></span>
              <input type="number" id="n6Step5" name="n1" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              <input type="number" id="n7Step5" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step5" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step5" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "20px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step5" name="n2" size="1" readOnly />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep6}
            />
          </div>

          {/* < !--step6 --> */}

          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="showStep6">
            <input
              type="text"
              id="step6"
              size="100"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">
              {/* <!--group 1 -- > */}
              <input
                type="number"
                id="n1Step6"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step6"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step6" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>

              <input type="number" id="n4Step6" name="n4" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              <input type="number" id="n5Step6" name="n5" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "90px" }}></span>
              <input type="number" id="n6Step6" name="n1" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              <input type="number" id="n7Step6" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "90px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step6" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step6" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step6" name="n2" size="1" readOnly />
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep6Group2}
            />
          </div>
          {/* step 6 group2 */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="step6Group2">
            <input
              type="text"
              id="step62"
              value="Step 7: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="100"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">
              {/* <!--group 1 -- > */}
              <input
                type="number"
                id="n1Step62"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step62"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step62" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>

              <input
                type="number"
                id="n4Step62"
                name="n4"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n5Step62"
                name="n5"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "90px" }}></span>
              <input type="number" id="n6Step62" name="n1" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              <input type="number" id="n7Step62" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "90px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step62" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step62" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step62" name="n2" size="1" readOnly />
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep6Group3}
            />
          </div>

          {/* step 6 group 3 */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="step6Group3">
            <input
              type="text"
              value="Step 8: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="100"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">
              {/* <!--group 1 -- > */}
              <input
                type="number"
                id="n1Step63"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step63"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step63" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>

              <input
                type="number"
                id="n4Step63"
                name="n4"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n5Step63"
                name="n5"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "90px" }}></span>
              <input
                type="number"
                id="n6Step63"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n7Step63"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "90px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step63" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step63" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step63" name="n2" size="1" readOnly />
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep6Group4}
            />
          </div>

          {/* step 6 group 4 */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="step6Group4">
            <input
              type="text"
              value="Step 9: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="100"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />
            <div className="blockofnum">
              {/* <!--group 1 -- > */}
              <input
                type="number"
                id="n1Step64"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step64"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 2 -- > */}
              <input type="number" id="n3Step64" name="n3" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>

              <input
                type="number"
                id="n4Step64"
                name="n4"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n5Step64"
                name="n5"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "90px" }}></span>
              <input
                type="number"
                id="n6Step64"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n7Step64"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "90px" }}></span>
              {/* <!--
            group 4 -- > */}
              <input type="number" id="n8Step64" name="n2" size="1" readOnly />

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input
                type="number"
                id="n9Step64"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              {/* <!--group 7 -- > */}
              <input
                type="number"
                id="n10Step64"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
            </div>

            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep7}
            />
          </div>
          {/* < !--step 7 -- > */}
          <span style={{ display: "inline-block", width: "100px" }}></span>

          <div className="hide" id="showStep7">
            <input
              type="text"
              value="Step 10: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="125"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}

            <div className="blockofnum">
              <input
                type="number"
                id="n1Step7"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step7"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n3Step7"
                name="n3"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              {/* <!--group 2 -- > */}

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step7" name="n4" size="1" readOnly />
              <input type="number" id="n5Step7" name="n5" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "100px" }}></span>
              <input type="number" id="n6Step7" name="n1" size="1" readOnly />
              <input type="number" id="n7Step7" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "80px" }}></span>
              <input type="number" id="n8Step7" name="n2" size="1" readOnly />
              <span style={{ display: "inline-block", width: "40px" }}></span>
              {/* <!--
            group 4 -- > */}

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step7" name="n2" size="1" readOnly />
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step7" name="n2" size="1" readOnly />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep7Group2}
            />
          </div>

          {/* step 7 group 2 */}
          <span style={{ display: "inline-block", width: "100px" }}></span>

          <div className="hide" id="showStep7Group2">
            <input
              type="text"
              value="Step 11: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="125"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}

            <div className="blockofnum">
              <input
                type="number"
                id="n1Step72"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step72"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n3Step72"
                name="n3"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              {/* <!--group 2 -- > */}

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 3 -- > */}
              <input type="number" id="n4Step72" name="n4" size="1" readOnly />
              <input type="number" id="n5Step72" name="n5" size="1" readOnly />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "100px" }}></span>
              <input
                type="number"
                id="n6Step72"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n7Step72"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n8Step72"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <span style={{ display: "inline-block", width: "40px" }}></span>
              {/* <!--
            group 4 -- > */}

              <span style={{ display: "inline-block", width: "80px" }}></span>
              {/* <!--group 5 -- > */}
              <input type="number" id="n9Step72" name="n2" size="1" readOnly />
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step72" name="n2" size="1" readOnly />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep8}
            />
          </div>

          {/* < !--step 8 -- > */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="showStep8">
            <input
              type="text"
              value="Step 12: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="125"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}

            <div className="blockofnum">
              <input
                type="number"
                id="n1Step8"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n2Step8"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n3Step8"
                name="n3"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n4Step8"
                name="n4"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n5Step8"
                name="n5"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "180px" }}></span>
              <input type="number" id="n6Step8" name="n1" size="1" readOnly />
              <input type="number" id="n7Step8" name="n2" size="1" readOnly />
              <input type="number" id="n8Step8" name="n2" size="1" readOnly />

              <input type="number" id="n9Step8" name="n2" size="1" readOnly />
              {/* <!--group 7 -- > */}
              <input type="number" id="n10Step8" name="n2" size="1" readOnly />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep8Group2}
            />
          </div>

          {/* step 8 group 2 */}
          <span style={{ display: "inline-block", width: "100px" }}></span>
          <div className="hide" id="showStep8Group2">
            <input
              type="text"
              value="Step 13: Merge the numbers that are ready to be merged into pairs while recusively ordering them in ascending order. The merged numbers are in green."
              size="125"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}

            <div className="blockofnum">
              <input
                type="number"
                id="n1Step82"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n2Step82"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n3Step82"
                name="n3"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n4Step82"
                name="n4"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n5Step82"
                name="n5"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              {/* <!--group 3 -- > */}
              <span style={{ display: "inline-block", width: "180px" }}></span>
              <input
                type="number"
                id="n6Step82"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n7Step82"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n8Step82"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n9Step82"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              {/* <!--group 7 -- > */}
              <input
                type="number"
                id="n10Step82"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
            </div>
            <input
              type="button"
              className="nextStep"
              value="Next Step"
              onClick={nextStep9}
            />
          </div>

          {/* // < !--step 9 -- > */}

          <div className="hide" id="showStep9">
            <input
              type="text"
              id="step9"
              size="120"
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "#FFF",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              readOnly
            />

            {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}

            <div className="blockofnum">
              <input
                type="number"
                id="n1Step9"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n2Step9"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n3Step9"
                name="n3"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n4Step9"
                name="n4"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n5Step9"
                name="n5"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n6Step9"
                name="n1"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n7Step9"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              <input
                type="number"
                id="n8Step9"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />

              <input
                type="number"
                id="n9Step9"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
              {/* //    <!--group 7 -- > */}
              <input
                type="number"
                id="n10Step9"
                name="n2"
                size="1"
                style={{ backgroundColor: "green" }}
                readOnly
              />
            </div>
            {/* <input type="button" value="Restart" onClick={Next} /> */}
            </div>
               </div>
        </form>
        <div className="footer"></div>
      </div>
        
    );
  }
}
