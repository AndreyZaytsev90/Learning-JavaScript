const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(colors);

console.log(`The sky is ${colors[4]}`);
console.log("The sky is " + colors[4]);

colors[5] = "dark blue";
console.log(colors);

colors[colors.length] = "indigo";

console.log(colors);

const stringNumbers = [];

stringNumbers[0] = "one";
stringNumbers[1] = "two";
stringNumbers[2] = "three";

console.log(stringNumbers);

const newStringArray = new Array("one", "two", "three");
console.log(newStringArray);

const numbers = [24, 54, 232, 5, 5462];
console.log(numbers);

const anyItems = [34, true, new Date(), "something"];
console.log(anyItems);
