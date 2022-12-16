// let weight;
// let height;

// console.log(alert("Здравствуйте! Вас приветствует калькулятор массы тела"));
// weight = prompt("Указите свой вес в килограммах:");
// height = prompt("Указите свой рост в метрах:");
// let bmi = weight / (height * height);
// const result =
//   bmi <= 24.9
//     ? "У вас нормальный вес"
//     : "У вас большой вес! Обратитесь к врачу!";

// alert(result);

//With If-Else statment

alert("Здравствуйте! Вас приветствует калькулятор массы тела");
const weight = prompt("Укажите свой вес в килограммах:");
const height = prompt("Укажите свой рост в метрах:");
let bmi = weight / Math.pow(height, 2);
// const result =
//   bmi <= 24.9
//     ? "У вас нормальный вес"
//     : "У вас большой вес! Обратитесь к врачу!";

if (bmi <= 24.9) {
  alert("У вас нормальный вес!");
  console.log("У вас нормальный вес!");
} else {
  alert(
    `У вас большой вес! Индекс BMI превышен на ${Math.round(
      bmi - 24.9
    )} Обратитесь к врачу!`
  );
  console.log(
    `У вас большой вес! Индекс BMI превышен на ${Math.round(
      bmi - 24.9
    )} Обратитесь к врачу!`
  );
}
