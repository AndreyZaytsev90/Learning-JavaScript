personData = ["Andrey", "Zaytsev", 32, "Lead engineer", ["Olga", "Petr"]];

myData = {
  firstName: "Andrey",
  lastName: "Zaytsev",
  age: 32,
  job: "Lead engineer",
  myFamily: ["Olga", "Petr", "Andrey"],
};

console.log(myData.age);
console.log(myData.myFamily[1]);
console.log(myData);
console.log(myData.lastName); // Dot notation
console.log(myData["job"]); //Bracket Notation

const baseName = "name";
console.log(myData["last" + baseName]);

const userInput = prompt("What do yoy want to know about Andrey? age, job, firstName");
//console.log(myData[userInput]); //32

/*myData[userInput] ? console.log(myData[userInput]) : console.log(`Error, ${userInput} does not exist!`)*/


//create new properties:

myData.location = 'Moscow'
const telega = 'telegram'
myData[telega] = '@Zaytsev90'


myData[userInput] ? console.log(myData[userInput]) : console.log(`Error, ${userInput} does not exist!`)


console.log(`${myData.firstName} has ${myData.myFamily.length} family members and first one is ${myData.myFamily[0]}`)