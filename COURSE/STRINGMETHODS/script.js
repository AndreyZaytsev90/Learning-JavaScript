let result;
const firstName = "Andrey";
const lastName = " Zaytsev";
const age = 32;
const greeting = "Hey here!";

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

result = firstName.concat(lastName);
result = greeting.concat(" ", "My name is ", firstName, lastName); // Hey here! My name is Andrey Zaytsev

result = result.toLocaleUpperCase();
result = result.toLocaleLowerCase();

result = firstName[1];

result = "hello".indexOf("e"); // номер индекса e -> 1
result = "hello".lastIndexOf("l");
result = firstName.indexOf("A"); // => 0
result = firstName.indexOf("v"); // -> -1 - не найден
result = firstName.charAt(0); // узнать символ по индексу

console.log(result);
