"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    // Один корень
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    // Два корня
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterestRate = percent / 100 / 12;
  let loanAmount = amount - contribution;

  let monthlyPayment = loanAmount * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  let totalPayment = monthlyPayment * countMonths;

  return parseFloat(totalPayment.toFixed(2));
}

// Примеры использования:
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52
