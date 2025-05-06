
import { useState } from "react";

export default function EMIcla() {

    const [amount,setAmount] = useState(0);
    const [year,setYear] = useState(0);
    const [rate,setRate] = useState(0);
    const [emi,setEmi] = useState(0);
    const [extra,setExtra] = useState(0);
    const [total,setTotal] = useState(0);

    function inputAmount(e) {
        setAmount(e.target.value);
        document.getElementById("txtAmount").value = e.target.value;
        document.getElementById("rangeAmount").value = e.target.value;
    }

    function inputYear(e) {
        setYear(e.target.value);
        document.getElementById("txtYear").value =year;
        document.getElementById("rangeYear").value = year;
    }
    
    function inputRate(e) {
        setRate(e.target.value);
        document.getElementById("txtRate").value = e.target.value;
        document.getElementById("rangeRate").value = e.target.value; 
    }


    function AmountChange(e)
    {
        setAmount(e.target.value);
        document.getElementById("txtAmount").value = e.target.value;
        document.getElementById("rangeAmount").value = e.target.value;
    }
    
    function YearChange(e)
    {
        setYear(e.target.value);
        document.getElementById("txtYear").value = year;
        document.getElementById("rangeYear").value = year;
    }

    function RateChange(e)
    {
        setRate(e.target.value);
        document.getElementById("txtRate").value = e.target.value;
        document.getElementById("rangeRate").value = e.target.value;
    }


    function  calutulate()
    {
        let p = amount;
        let n = year*12;
        let r = parseFloat(rate)/(12 * 100);
        let emi = p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(emi.toFixed(2));
        setExtra((emi*n - amount).toFixed(2));
        setTotal((emi*n).toFixed(2));
    }


        return(
<div className="container fluid m-4 m-4 justity-content-center">

<div className="row mt-5">
<div className="col">
     <div className="input-group">
        <span className="input-group-text">Amount you need ₹</span>
        <input type="number"  onChange={inputAmount} className="form-control" id="txtAmount" min="20000" max="200000" step="1000"/>
      </div>
</div>
<div className="col">
            <div className="input-group">
                <span  className="input-group-text">for</span>
                <input  className="form-control"  onChange={inputYear} type="number" min="1" max="5" id="txtYear" />
                <span  className="input-group-text">year</span>
             </div>
</div>
<div  className="col">
            <div  className="input-group">
                <span  className="input-group-text">Intrest Rate</span>
                <input  className="form-control"   onChange={inputRate}  type="number" min="10" max="21" step="0.1" id="txtRate"/>
                <span  className="input-group-text">%</span>
</div>

</div>
</div>
  
        <div  className="row mt-5">

            <div  className="col"> 
                 <div  className="input-group">
                           <div  className="col">
                              
                                <span  className="input-group-text">₹ 20,000</span>
                              
                            </div>
                            <div  className="col">
                               
                                    <input  className="form-range  input-group-text " id="rangeAmount"  onChange={AmountChange} type="range" min="20000" max="200000" step="1000" />
                               
                            </div>
                            <div  className="col">
                                <span  className="input-group-text">₹ 2,00,000</span>
                            </div>
                  </div>
            </div>
            <div  className="col">
                <div  className="row">
                <div  className="input-group">
                    <div  className="col">
                    <span  className="input-group-text">1</span>
                    </div>
                    <div  className="col">
                    <input  className="form-range  input-group-text "  onChange={YearChange} id="rangeYear" type="range" min="1" max="5" step="1" />
                    </div>
                    <div  className="col">
                    <span  className="input-group-text">5</span>
                    </div>
                  </div>
                </div>
            </div>
            <div  className="col">
                <div  className="input-group">
                    <div  className="col">
                    <span  className="input-group-text">10%</span>
                    </div>
                    <div  className="col">
                    <input  className="form-range  input-group-text "  onChange={RateChange} type="range"  min="10" max="21" step="0.01" id="rangeRate" />
                    </div>
                    <div  className="col">
                    <span  className="input-group-text">21%</span>
                    </div>
                  </div>
            </div>
        </div>

        <button  className="btn btn-danger mt-5 justify-content-center align-item-center"  onClick={calutulate}>
            <span>Calculate</span>
        </button>

        <div id="display"  className="mt-5 text-center ">
         {
           
               <h1>YOUR  MONTHLT EMI ₹ {emi} <br></br>
               
               Year:{year} <br></br>
               Rate:{rate} <br></br>
               Amount:{amount} <br></br>
               Total:  {total} <br></br>
               Extra:  {extra}
              </h1>
            
         }
        </div>
</div>

        )
    }
