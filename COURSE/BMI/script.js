let weight;
let height;

console.log(alert("Здравствуйте! Вас преветствует калькулятор массы тела"));
weight = prompt("Указите свой вес в килограммах:");
height = prompt("Указите свой рост в метрах:");
let bmi = weight / (height * height);
const result =
  bmi <= 24.9
    ? "У вас нормальный вес"
    : "У вас большой вес! Обратитесь ко врачу!";

alert(result);
