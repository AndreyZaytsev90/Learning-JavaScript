class Box {
  // создали класс
  constructor(name, age) {
    // вызывается сразу после создания класса
    console.log("Создаем класс");
    this.name = name; // переносим name и age в глобальную область видимости
    this.age = age;
  }
  hi() {
    // функция - это МЕТОД внутри класса
    console.log("Hello " + this.name); // this адресован к экземпляру класса Box
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
