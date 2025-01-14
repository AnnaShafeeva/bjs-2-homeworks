"use strict";

function solveEquation(a, b, c) {
  "use strict";
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

console.log(solveEquation(1,2,10))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  "use strict";
  let a = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let paymentMonth = loanBody * (a + (a / (((1 + a) ** countMonths) - 1)));
  let totalLoanAmount = Number((paymentMonth * countMonths).toFixed(2));
  return totalLoanAmount;
}
