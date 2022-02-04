import React, { Component } from 'react';
import "./levelone.css";
import { Random, Next, nextStep3, nextStep4, nextStep5, nextStep6, nextStep7, nextStep8, nextStep9 } from './levelOne';

export default class levelPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className='header'>
                        <h1>Level 1: MergeSort Algorithm</h1>
                    </div>
                    <div className='btnNav'>
                        <button className="home">Home</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        <button className="back">Back</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        {/* <!-- button for first step  --> */}
                        <button id="next" className="home" value="Random Number!" onClick={Random}>Next</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        <button className="restart">Restart</button>
                        <span style={{ display: "inline-block", width: "20px" }}></span>

                        <button className="quit">Quit</button>
                    </div>
                </div>
                <div className='instruction1'>
                <h3> Click on the button to generate 10 random numbers</h3>
                </div>
                
                <div className='randomdiv'><input type="button" className="random" value="Random Number!" onClick={Random} /></div>
                <form name="rn">
                    {/* <!--step1 --> */}
                    <div className="hide" id="showStep1">
                        <input type="text" id="step1" name="step1" size="80" readOnly />
                        
                        <div className='blockofnum'>
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
                        <input type="button" className="nextStep" value="Next Step" onClick={Next} />
                    </div >

                    {/* //   < !--step 2 -- > */}
                    <div className="hide" id="showStep2">
                        <input type="text" id="step2" name="step2" size="80" readOnly />

                        <div className='blockofnum'>
                        <input type="number" id="n1" name="n1" size="1" readOnly />
                        <input type="number" id="n2" name="n2" size="1" readOnly />
                        <input type="number" id="n3" name="n3" size="1" readOnly />
                        <input type="number" id="n4" name="n4" size="1" readOnly />
                        <input type="number" id="n5" name="n2" size="1" readOnly />

                        <span style={{ display: "inline-block", width: "200px" }}></span>

                        <input type="number" id="n6" name="n2" size="1" readOnly />
                        <input type="number" id="n7" name="n2" size="1" readOnly />
                        <input type="number" id="n8" name="n2" size="1" readOnly />
                        <input type="number" id="n9" name="n2" size="1" readOnly />
                        <input type="number" id="n10" name="n2" size="1" readOnly />
                        </div>
    
                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep3} />

                    </div >
                    {/* // < !--Step 3: --> */}
                    <div className="hide" id="showStep3">
                        <input type="text" id="step3" name="step3" size="80" readOnly />
                        <div className='blockofnum'>

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

                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep4} />
                    </div >

                    {/* < !--  step 4 button-- > < !--step4 --> */}
                    <div className="hide" id="showStep4">
                        <input type="text" id="step4" size="80" readOnly />

                        
                        <div className='blockofnum'>
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
                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep5} />
                    </div >


                    {/* < !--step5 --> */}

                    <div className="hide" id="showStep5">
                        <input type="text" id="step5" size="80" readOnly />


                      
                        <div className='blockofnum'>
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
                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep6} />
                    </div >

                    {/* < !--step6 --> */}

                    <div className="hide" id="showStep6">
                        <input type="text" id="step6" size="100" readOnly />
                        <div className='blockofnum'>
                        {/* <!--group 1 -- > */}
                        <input type="number" id="n1Step6" name="n1" size="1" readOnly />
                        <input type="number" id="n2Step6" name="n2" size="1" readOnly />
                        <span style={{ display: "inline-block", width: "80px" }}></span>
                        {/* <!--group 2 -- > */}
                        <input type="number" id="n3Step6" name="n3" size="1" readOnly />
                        <span style={{ display: "inline-block", width: "80px" }}></span>
                        {/* <!--group 3 -- > */}
                        <input type="number" id="n4Step6" name="n4" size="1" readOnly />
                        <input type="number" id="n5Step6" name="n5" size="1" readOnly />


                        {/* <!--group 3 -- > */}
                        <span style={{ display: "inline-block", width: "90px" }}></span>
                        <input type="number" id="n6Step6" name="n1" size="1" readOnly />
                        <input type="number" id="n7Step6" name="n2" size="1" readOnly />
                        <span style={{ display: "inline-block", width: "90px" }}></span>
                        {/* <!--
            group 4 -- > */}
                        <input type="number" id="n8Step6" name="n2" size="1" readOnly />

                        <span style={{ display: "inline-block", width: "80px" }}></span>
                        {/* <!--group 5 -- > */}
                        <input type="number" id="n9Step6" name="n2" size="1" readOnly />
                        {/* <!--group 7 -- > */}
                        <input type="number" id="n10Step6" name="n2" size="1" readOnly />
                        </div>

                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep7} />
                    </div >

                    {/* < !--step 7 -- > */}


                    <div className="hide" id="showStep7">
                        <input type="text" id="step7" size="125" readOnly />



                        {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}
                        
                        <div className='blockofnum'>
                        <input type="number" id="n1Step7" name="n1" size="1" readOnly />
                        <input type="number" id="n2Step7" name="n2" size="1" readOnly />
                        <input type="number" id="n3Step7" name="n3" size="1" readOnly />
                        {/* <!--group 2 -- > */}

                        <span style={{ display: "inline-block", width: "80px" }}></span>
                        {/* <!--group 3 -- > */}
                        <input type="number" id="n4Step7" name="n4" size="1" readOnly />
                        <input type="number" id="n5Step7" name="n5" size="1" readOnly />


                        {/* <!--group 3 -- > */}
                        <span style={{ display: "inline-block", width: "100px" }}></span>
                        <input type="number" id="n6Step7" name="n1" size="1" readOnly />
                        <input type="number" id="n7Step7" name="n2" size="1" readOnly />
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
                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep8} />
                    </div >

                    {/* < !--step 8 -- > */}


                    <div className="hide" id="showStep8">
                        <input type="text" id="step8" size="125" readOnly />



                        {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}
                        
                        <div className='blockofnum'>
                        <input type="number" id="n1Step8" name="n1" size="1" readOnly />
                        <input type="number" id="n2Step8" name="n2" size="1" readOnly />
                        <input type="number" id="n3Step8" name="n3" size="1" readOnly />
                        <input type="number" id="n4Step8" name="n4" size="1" readOnly />
                        <input type="number" id="n5Step8" name="n5" size="1" readOnly />


                        {/* <!--group 3 -- > */}
                        <span style={{ display: "inline-block", width: "180px" }}></span>
                        <input type="number" id="n6Step8" name="n1" size="1" readOnly />
                        <input type="number" id="n7Step8" name="n2" size="1" readOnly />
                        <input type="number" id="n8Step8" name="n2" size="1" readOnly />

                        <input type="number" id="n9Step8" name="n2" size="1" readOnly />
                        {/* <!--group 7 -- > */}
                        <input type="number" id="n10Step8" name="n2" size="1" readOnly />

                        </div>
                        <input type="button" className="nextStep" value="Next Step" onClick={nextStep9} />
                    </div >

                    {/* // < !--step 9 -- > */}

                    <div className="hide" id="showStep9">
                        <input type="text" id="step9" size="120" readOnly />



                        {/* < !-- 
   < span style = "display:inline-block; width: 50px;" ></span >
            group 1 -- > */}
                        
                        <div className='blockofnum'>
                        <input type="number" id="n1Step9" name="n1" size="1" readOnly />
                        <input type="number" id="n2Step9" name="n2" size="1" readOnly />
                        <input type="number" id="n3Step9" name="n3" size="1" readOnly />
                        <input type="number" id="n4Step9" name="n4" size="1" readOnly />
                        <input type="number" id="n5Step9" name="n5" size="1" readOnly />
                        <input type="number" id="n6Step9" name="n1" size="1" readOnly />
                        <input type="number" id="n7Step9" name="n2" size="1" readOnly />
                        <input type="number" id="n8Step9" name="n2" size="1" readOnly />

                        <input type="number" id="n9Step9" name="n2" size="1" readOnly />
                        {/* //    <!--group 7 -- > */}
                        <input type="number" id="n10Step9" name="n2" size="1" readOnly />

                        </div>
                        <input type="button" value="Restart" onClick={Next} />
                    </div >
                </form >
                <div className='footer'></div>
            </div >);
    }
}
