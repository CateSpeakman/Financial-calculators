"use strict";

//Description: This script will calculate the the future value of a one time deposit along with 
//              the total interest earned.
//Author: Cate Speakman

function getValue()
{
    let initialDepositField = document.getElementById("initialDeposit").value;
    initialDepositField = Number(initialDepositField);

    let intRteField =document.getElementById("interestRate").value;
    intRteField =Number(intRteField);

    let depositTermField=document.getElementById("depositTerm").value;
    depositTermField=Number(depositTermField);

    let futureValueField= initialDepositField 
                           *
                           Math.pow ((1 + ((intRteField/100)/12)), 12*depositTermField);
    futureValueField=parseFloat(futureValueField.toFixed(2));
    document.getElementById("futureValue").value=futureValueField.toFixed(2);
    
    
    let totalInterestEarnedField= futureValueField - initialDepositField;
    totalInterestEarnedField=parseFloat(totalInterestEarnedField.toFixed(2));
    document.getElementById("totalInterestEarned").value=totalInterestEarnedField.toFixed(2);
}
function init()
{
    const calculateBtn =document.getElementById("calculateBtn")
    calculateBtn.onclick=getValue;
}

window.onload = init;