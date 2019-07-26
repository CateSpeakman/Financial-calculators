"use strict";

//Description: This script will calculate the monthly payments for a given loan amount, 
//              interest rate and loan term.
//Author: Cate Speakman

function getLoan()
{
    let loanAmtField = document.getElementById("loanAmount").value;
    loanAmtField = Number(loanAmtField);

    let intRteField =document.getElementById("interestRate").value;
    intRteField =Number(intRteField);

    let loanTermField=document.getElementById("loanTerm").value;
    loanTermField=Number(loanTermField);

    let monthlyPymtField=(loanAmtField *(intRteField/1200))
                         /
                         (1-Math.pow(1+(intRteField/1200), -(12*loanTermField)));
    monthlyPymtField=parseFloat(monthlyPymtField.toFixed(2));
    document.getElementById("monthlyPayment").value=monthlyPymtField.toFixed(2);
    
    
    let totalLoanCstField= monthlyPymtField * (12*loanTermField);
    totalLoanCstField=parseFloat(totalLoanCstField.toFixed(2));
    document.getElementById("totalLoanCost").value=totalLoanCstField.toFixed(2);
}


function init()
{
    const calculateBtn =document.getElementById("calculateBtn")
    calculateBtn.onclick=getLoan;
}

window.onload = init;