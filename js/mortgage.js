"use strict";

//Description: This script will calculate the monthly payments for a given loan amount, 
//              interest rate and loan term.
//Author: Cate Speakman

/* This function calculates the monthly payment and total loan amount based on loan amount, interest rate,
* and length of term for the loan.
* 
*@param loanAmtField (number) - the amount of the loan
*@param intRteField (number) - the annual interest rate
*@param loanTermField (number) - the length in time of the loan
*...
*@param monthlyPymtField (number) - the monthly payment for the loan;
*@param totalLoanCstField - the total cost of the loan for the entire loan term
*/

function getLoan()
{
    let loanAmtField = document.getElementById("loanAmount").value;
    loanAmtField = Number(loanAmtField);

    let intRteField = document.getElementById("interestRate").value;
    intRteField = Number(intRteField);

    let loanTermField = document.getElementById("loanTerm").value;
    loanTermField = Number(loanTermField);

    let monthlyPymtField = (loanAmtField *(intRteField/1200))
                         /
                         (1-Math.pow(1+(intRteField/1200), -(12*loanTermField)));
    monthlyPymtField = parseFloat(monthlyPymtField.toFixed(2));
    document.getElementById("monthlyPayment").value=monthlyPymtField.toFixed(2);
    
    
    let totalLoanCstField = monthlyPymtField * (12*loanTermField);
    totalLoanCstField = parseFloat(totalLoanCstField.toFixed(2));
    document.getElementById("totalLoanCost").value=totalLoanCstField.toFixed(2);
}

/* this fucntion will call the getLoan function to execute upon the click of the calculate button*/

function init()
{
    const calculateBtn = document.getElementById("calculateBtn")
    calculateBtn.onclick=getLoan;
}

window.onload = init;