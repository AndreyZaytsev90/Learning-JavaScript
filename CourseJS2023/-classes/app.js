class Box {
  // создали класс
  _age = 0;

  constructor(name, age) {
    // вызывается сразу после создания класса
    console.log("Создаем класс");
    this.name = name; // переносим name и age в глобальную область видимости
    this.age = age; // значение переменной age попадает в value сеттера
  }
  hi() {
    // функция - это МЕТОД внутри класса
    console.log("Hello " + this.name); // this адресован к экземпляру класса Box
  }

  set age(value) {
    //сеттер
    this._age = value;
    console.log(2023 - this._age);
  }
  get age() {
    // геттер
    return this._age;
  }
}
// Инициализируем класс (создаем его копию)

let myBox = new Box("Olga", 35); // экземпляр класса Box
//myBox.name = "Olga";
let myBox2 = new Box("Petr", 5);
//myBox2.name = "Petr";
let myBox3 = new Box("Andrey", 33);
//myBox3.name = "Andrey";

console.log(myBox.name);
console.log(myBox2.name);

myBox.hi();
myBox2.hi();
myBox3.hi();

class Example {
  constructor() {
    this.message = "Hello, World!";
  }

  get helloMessage() {
    return this.message;
  }
}

const example = new Example();
console.log(example.helloMessage);

console.log(myBox instanceof Box); // проверка, что экземпляр класс создан именно от класс Box
