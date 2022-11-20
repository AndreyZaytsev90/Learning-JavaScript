// AND , OR, NOT

// AND - и
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// OR - или
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// NOT - нет
// console.log(!true);// false
// console.log(!false);// true

// const hasMoney = true;
// const isAdult = true;

// if (hasMoney && isAdult) {
//   console.log("yes, you can buy alcohol");
// } else {
//   console.log("no, you can't buy alcohol ");
// }

// const hasMoney = false;
// const isWithParent = false;

// if (hasMoney || isWithParent) {
//   console.log("yes, you can buy apple");
// } else {
//   console.log("no, you can't buy apple ");
// }

const hasMoney = true;
const isAdult = true;
const isCompleteDrink = false;

// console.log(!hasMoney);
// console.log(!isAdult);

if (hasMoney && isAdult && !isCompleteDrink) {
  console.log("yes, you can buy alcohol");
} else {
  console.log("no, you can't buy alcohol ");
}
