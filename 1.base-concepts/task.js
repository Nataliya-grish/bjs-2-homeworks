"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
      arr.push(-b / (2 * a));
  }
    else if (d > 0) {
      arr.push((-b + Math.sqrt(d)) / (2 * a));
      arr.push((-b - Math.sqrt(d)) / (2 * a));
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount

  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  if (percentTest != Number(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount
  } else if (contributionTest != Number(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount
  } else if (amountTest != Number(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount
  }
  
    let credit = amount - contribution;
    let dateMonth = date.getMonth();
    let dateYear = date.getFullYear();
    let dateNow = new Date(Date.now());
    let dateNowMonth = dateNow.getMonth();
    let dateNowYear = dateNow.getFullYear();
    let month = (dateYear - dateNowYear) * 12 + (dateMonth - dateNowMonth);

    let payment = credit * (percent / 12 / 100 + (percent / 12 / 100 / (((1 + percent / 12 / 100) ** month - 1))));
    totalAmount = payment * month;

    return Number(totalAmount.toFixed(2));
  
}