let result;
const firstName = "Andrey";
const lastName = " Zaytsev";
const age = 32;
const greeting = "Hey there!";

result = "Andrey";
result = "Andrey" + " Zaytsev";
result = firstName + lastName;
//Concatination
result =
  greeting +
  " My name is " +
  firstName +
  lastName +
  ". I'm " +
  age +
  " years old.";

//Escaping

result = "I'm 34 years old";
result = 'I\'m like "Star Wars" movie';

//Properties and methods
result = "Hello!".length; //6

//Concat()

result = firstName.concat(lastName);
result = greeting.concat(" ", "My name is ", firstName, lastName); // Hey here! My name is Andrey Zaytsev

result = result.toLocaleUpperCase();
result = result.toLocaleLowerCase();

//Arrays index

result = firstName[1];

result = "hello".indexOf("e"); // номер индекса e -> 1
result = "hello".lastIndexOf("l");
result = firstName.indexOf("A"); // => 0
result = firstName.indexOf("v"); // -> -1 - не найден

//charAt()
result = firstName.charAt(0); // узнать символ по индексу

const longString = 'Hello! I"m a long string';
result = longString.charAt(longString.length - 1); // последний символ длинной строки

//substring()
result = greeting.substring(4, 9); //начало и конеч по индексу -> there
//slice()
result = greeting.slice(4, 9);
result = greeting.slice(-6);

//split()
result = longString.split(" "); // разделение строки ->['Hello!', 'I"m', 'a', 'long', 'string']

//replace()
const colors = "blue, red, white, black";
result = colors.replace("blue", "yellow"); // замена

//includes()

result = colors.includes("blue"); // true
result = colors.includes("yellow"); //false
console.log(result);
