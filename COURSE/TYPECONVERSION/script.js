// Conversion to string
//let a = 111;

//String()
let a = String(11122);
a = String(2 + 12);
a = String(false);
a = String(new Date());
a = String(["one", "two", "three"]);

//to String()

a = (35).toString();
a = true.toString();

console.log(a);

console.log(typeof a);

console.log(a.length);

//Conversion to Number
// Number()
let b = Number("5.04656756");
b = Number(false); // 0, true -> 1
b = Number(null); // 0
b = Number("text"); // NaN
b = Number([12, 165]); // NaN
// parseInt
b = parseInt("123.32456"); // распознает десятичное число
b = parseFloat("123.32456"); // распознает дробные число
console.log(b);

console.log(typeof b);

console.log(b.toPrecision(6)); // округляет

//Неявное преобразование типов
const x = "5";
const y = "3";
const z = x - y;
console.log(z);
console.log(typeof z);
