const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("HIT!");
    } else {
      alert("MISS!");
    }
    if (hits == 3) {
      isSunk = true;
      alert("You sank my battleship!");
    }
  }
}
let stars =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stars);
