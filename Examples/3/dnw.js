let dogName;
let dogWeight;
const Nick1 = "Rover";
const Nick2 = "Spot";
const Nick3 = "Spike";

dogName = prompt("What is the name of the dog?");

if (dogName == Nick1) alert("Hello " + Nick1);
if (dogName == Nick2) alert("Hello " + Nick2);
if (dogName == Nick3) alert("Hello " + Nick3);

function weightOfDogs(dogWeight, dogName) {
  if (dogWeight > 20) {
    alert(dogName + " says WOOF WOOF");
  } else {
    alert(dogName + " says woof woof");
  }
}

dogWeight = prompt("what is the weight of the dog?");
if (dogWeight < 0 || dogWeight > 100) {
  alert(weightOfDogs);
}
