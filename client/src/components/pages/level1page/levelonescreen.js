import React, { Component } from "react";
import './levelone.css';

export default class LevelOneScreen extends Component{
    

    render() {
        return (
                <div>
                  <title>Level 1</title>
                  <div>
                    <h1>Level 1: MergeSort Algorithm</h1> 
                    <button className="home">Home</button>
                    <span style={{display: 'inline-block', width: '20px'}} />
                    <button className="back">Back</button>
                    <span style={{display: 'inline-block', width: '20px'}} />
                    <button className="next" value="Random Number!" onclick="Next();">Next</button>
                    <span style={{display: 'inline-block', width: '20px'}} />
                    <button className="restart">Restart</button>
                    <span style={{display: 'inline-block', width: '20px'}} />
                    <button className="quit">Quit</button>
                  </div>
                  <br />
                  <br />
                  <br />
                  <h3> Click on the button to generate 10 random numbers</h3>
                  <form name="rn">
                    <input type="text" id="tb" name="tb" size={3} /> 
                    <input type="text" defaultValue={1} id="index" name="index1" size={1} className="hide" /> 
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb2" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb3" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb4" name="tb" size={1} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb5" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb6" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb7" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb8" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb9" name="tb" size={3} />
                    <span style={{display: 'inline-block', width: '0px'}} />
                    <input type="text" id="tb10" name="tb" size={3} />
                    <br />
                    <br />
                    <input type="button" defaultValue="Random Number!" onclick="Random();" />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <br />
                    <br />
                    <input type="text" id="step1" name="step1" size={40} className="hide" />
                    <br />
                    <br />
                    {/* step 2 */}
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <input type="text" id="step2" name="step2" size={60} className="hide2" />
                    <br />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} /> 
                    <input type="text" id="n1" name="n1" size={3} /> 
                    <input type="text" id="n2" name="n2" size={3} /> 
                    <input type="text" id="n3" name="n3" size={3} /> 
                    <input type="text" id="n4" name="n4" size={3} /> 
                    <input type="text" id="n5" name="n2" size={3} /> 
                    <span style={{display: 'inline-block', width: '100px'}} />
                    <span style={{display: 'inline-block', width: '100px'}} />
                    <input type="text" id="n6" name="n2" size={3} /> 
                    <input type="text" id="n7" name="n2" size={3} /> 
                    <input type="text" id="n8" name="n2" size={3} /> 
                    <input type="text" id="n9" name="n2" size={3} /> 
                    <input type="text" id="n10" name="n2" size={3} /> 
                    <span style={{display: 'inline-block', width: '100px'}} />
                    {/* 
                   <h1> &#129135</h1> */}
                    {/* Step 3:  */}
                    <input type="text" id="step2" name="step3" size={60} className="hide2" />
                    <br />
                    <br />
                    <br />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <input type="text" id="num1" name="n1" size={3} /> 
                    <input type="text" id="num 2" name="n2" size={3} /> 
                    <input type="text" id="num2" name="n3" size={3} /> 
                    <span style={{display: 'inline-block', width: '120px'}} />
                    <input type="text" id="num4" name="n4" size={3} /> 
                    <input type="text" id="num5" name="n4" size={3} /> 
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <span style={{display: 'inline-block', width: '40px'}} />
                    <input type="text" id="num6" name="n1" size={3} /> 
                    <input type="text" id="num7" name="n2" size={3} /> 
                    <input type="text" id="num8" name="n2" size={3} /> 
                    <span style={{display: 'inline-block', width: '130px'}} />
                    <input type="text" id="num9" name="n2" size={3} /> 
                    <input type="text" id="num10" name="n2" size={3} /> 
                  </form>
                  <br />
                  <br />
                  <br />
                </div>
        );
      }
}