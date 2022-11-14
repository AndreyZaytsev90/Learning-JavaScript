const firstNum = 50;
const secondNum = 10;
let result;

//Simple
result = firstNum + secondNum;
result = firstNum - secondNum;
result = firstNum * secondNum;
result = firstNum / secondNum;
result = firstNum % secondNum;

//Math object
result = Math.PI;
result = Math.round(3.8); // округление -> 4
result = Math.ceil(3.3); // округление в большую
result = Math.floor(3.3); // округление в меньшую
result = Math.sqrt(9); // корень
result = Math.abs(-7); // по модулю
result = Math.pow(2, 4); // в степень -> 16
result = Math.min(2, 54, 54, 223, -5, 6); // минимальное число
result = Math.max(33432, 33, 234, 5, 2, 3 - 2);
result = Math.random() * 1000; // рандом от 0 до 1000

console.log(result);
