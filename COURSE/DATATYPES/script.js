//динамическая типизация
let a = "something";
console.log(a);
a = 3;
console.log(a);

//String

const someText = "SomeText";
console.log(typeof someText);

//Number

const someNum = 11;
console.log(typeof someNum);

//Boolean

const someBoolean = false;
console.log(typeof someBoolean);

//Null

const someNull = null; // -> object - bug JS
console.log(typeof someNull);

//Undefined

let someUndefined;
console.log(typeof someUndefined);

//Symbols

const someSymbol = Symbol();
console.log(typeof someSymbol);

//Reference data types

//Array

const someArray = [1, 2, 3, 4];
console.log(typeof someArray);

//Object Literal

const someObjectLiteral = {
  firstProperty: "12",
  secondProperty: 12,
};
console.log(typeof someObjectLiteral);

//Function

const someFunction = new Function();
console.log(typeof someFunction);

//Date

const someDate = new Date();
console.log(typeof someDate);
