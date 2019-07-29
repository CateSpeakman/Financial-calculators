"use strict";

//Description: This script will calculate the the future value of a one time deposit along with 
//              the total interest earned.
//Author: Cate Speakman


/* This function calculates the future value of a one time deposit assuming compound interest.
* 
*@param initialDepositField (number) - the amount of the deposit
*@param intRteField (number) - the annual interest rate
*@param depositTermField (number) - the length in time of the deposit
*...
*@param futureValueField (number) - the future value of the deposit;
*@param totalInterestedEarnedField - the total interest earned on the deposit
*/

function getFutureValue()
{
    let initialDepositField = document.getElementById("initialDeposit").value;
    initialDepositField = Number(initialDepositField);

    let intRteField = document.getElementById("interestRate").value;
    intRteField = Number(intRteField);

    let depositTermField = document.getElementById("depositTerm").value;
    depositTermField = Number(depositTermField);

    let futureValueField = initialDepositField 
                           *
                           Math.pow ((1 + ((intRteField/100)/12)), 12*depositTermField);
    futureValueField = parseFloat(futureValueField.toFixed(2));
    document.getElementById("futureValue").value=futureValueField.toFixed(2);
    
    
    let totalInterestEarnedField = futureValueField - initialDepositField;
    totalInterestEarnedField = parseFloat(totalInterestEarnedField.toFixed(2));
    document.getElementById("totalInterestEarned").value=totalInterestEarnedField.toFixed(2);
}

/* this fucntion will call the getFutureValue function to execute upon the click of the calculate button*/
function init()
{
    const calculateBtn = document.getElementById("calculateBtn")
    calculateBtn.onclick=getFutureValue;
}

window.onload = init;