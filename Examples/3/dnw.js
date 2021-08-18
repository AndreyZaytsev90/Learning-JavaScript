let dogName;
let dogWeight;
const Nick1 = "Rover";
const Nick2 = "Spot";
const Nick3 = "Spike";

dogName = prompt("What is the name of the dog?");

if (dogName == Nick1) alert("Hello " + Nick1);
if (dogName == Nick2) alert("Hello " + Nick2);
if (dogName == Nick3) alert("Hello " + Nick3);

function weightOfDogs(dogName, dogWeight) {
  if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
  } else {
    console.log(dogName + " says woof woof");
  }
}

//dogWeight = prompt("what is the weight of the dog?");
//if (dogWeight < 0 || dogWeight > 100) {
// console.log(weightOfDogs);
//}
weightOfDogs("Rover", -1);
weightOfDogs("Spot", 13);
weightOfDogs("Spike", 53);
