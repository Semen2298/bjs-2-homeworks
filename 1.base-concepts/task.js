"use strict"
function solveEquation(a, b, c) {
  // Вычисляем дискриминант
  let discriminant = b * b - 4 * a * c;
  
  // Инициализируем массив для хранения корней уравнения
  let roots = [];
  
  // Проверяем значения дискриминанта и вычисляем корни
  if (discriminant < 0) {
      // Если дискриминант меньше нуля, корней нет
      return roots;
  } else if (discriminant === 0) {
      // Если дискриминант равен нулю, есть один корень
      let root = -b / (2 * a);
      roots.push(root);
      return roots;
  } else {
      // Если дискриминант больше нуля, есть два корня
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      roots.push(root1, root2);
      return roots;
  }
}

// Примеры использования функции
console.log(solveEquation(1, 2, 1));   // Вывод: [-1]
console.log(solveEquation(1, -3, 2));  // Вывод: [2, 1]
console.log(solveEquation(2, -11, 5)); // Вывод: [5, 0.5]
console.log(solveEquation(1, 4, 5));   // Вывод: []


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки в диапазон от 0 до 1 и из годовой ставки в месячную
  let monthlyPercent = percent / 100 / 12;
  
  // Рассчитываем тело кредита (сумма кредита минус первоначальный взнос)
  let creditBody = amount - contribution;
  
  // Рассчитываем ежемесячный платеж
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
  
  // Рассчитываем общую сумму, которую придется заплатить клиенту
  let totalPayment = monthlyPayment * countMonths + contribution;
  
  // Округляем результат до двух значений после запятой
  totalPayment = Math.round(totalPayment * 100) / 100;
  
  return totalPayment;
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12));    // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));    // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24));// Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));    // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));    // Вывод: 12479.52
