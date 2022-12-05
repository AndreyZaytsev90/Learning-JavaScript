personData = ["Andrey", "Zaytsev", 32, "Lead engineer", ["Olga", "Petr"]];

myData = {
  firstName: "Andrey",
  lastName: "Zaytsev",
  age: 32,
  job: "Lead engineer",
  myFamily: ["Olga", "Petr"],
};

console.log(myData.age);
console.log(myData.myFamily[1]);
console.log(myData);
console.log(myData.lastName); // Dot notation
console.log(myData["job"]); //Bracket Notation

const baseName = "name";
console.log(myData["last" + baseName]);

const userInput = prompt("What do yoy want to know about Andrey? age");
console.log(myData[userInput]); //32
