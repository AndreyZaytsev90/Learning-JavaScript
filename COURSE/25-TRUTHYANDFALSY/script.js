// JavaScript falsy values:
// 0, '', undefined, null , NaN

console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean("hello")); //true
console.log(Boolean(32)); //true
console.log(Boolean([])); //true
console.log(Boolean({})); //true
console.log(Boolean(3.5)); //true

const age = 0;

if (age) {
  //true
  console.log("Ребенок родился");
} else {
  //false
  console.log("Ребенок не родился");
}

let weigth = 0;

if (weigth || weigth >= 0) {
  //true
  console.log("Вес определен");
} else {
  //false
  console.log("Вес не определен");
}
