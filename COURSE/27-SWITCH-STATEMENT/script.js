const color = "green";

// if (color === "green") {
//   console.log("GO!");
// } else if (color === "yellow") {
//   console.log("GET READY!");
// } else if (color === "red") {
//   console.log("STOP!");
// } else {
//   console.log("Incorrect color!");
// }

switch (color) {
  case "green":
    console.log("GO!");
    break;
  case "yellow":
    console.log("GET READY!");
    break;
  case "red":
    console.log("STOP!");
    break;
  default:
    console.log("Incorrect color!");
}

const weekday = "Среда";

switch (weekday) {
  case "Понедельник":
    console.log("Понедельник!");
    break;
  case "Вторник":
    console.log("Вторник!");
    break;
  case "Среда":
    console.log("Среда!");
    break;
  case "Четверг":
    console.log("Четверг!");
    break;
  case "Пятница":
    console.log("Пятница!");
    break;
  case "Суббота":
    console.log("Суббота!");
    break;
  case "Воскресение":
    console.log("Воскресение!");
    break;
  default:
    console.log("Нет такого дня!!");
    break;
}
