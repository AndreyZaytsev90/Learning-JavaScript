const location1 = 3
const location2 = 4
const location3 = 5

let guess
let hits = 0
let guesses = 0

let isSunk = false

// if (guess == location1) {
//     hits = hits + 1
//     } else if (guess == location2) {
//     hits = hits + 1
//     } else if (guess == location3) {
//     hits = hits + 1
//     }

if (guess == location1 || guess == location2 || guess == location3 ) {
    hits = hits + 1
}