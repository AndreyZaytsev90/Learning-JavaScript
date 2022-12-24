//50 For
/*console.log('Push 1')
console.log('Push 2')
console.log('Push 3')
console.log('Push 4')
console.log('Push 5')*/

/*for (let push = 5; push <= 10; push+=2) {
    console.log(`Push ${push}`)
}*/

//51 Loops and Arrays

//Итерация (перебирание) элементов массива
/*
const user = personData = ["Andrey", "Zaytsev", 1990, "Lead engineer", ["Olga", "Petr"]];

const types = []


for (let i = 0; i <= user.length-1; i++) {
    console.log(user[i], typeof user[i])
   // types[i] = typeof user[i]
    types.push(typeof user[i]) // заполнение массива типами элементов другого массива
}

console.log(types)*/

// -------------------------------------------------

/*
const birthYears = [1990, 1988, 2018]
const ages = []

for (let i = 0; i < birthYears.length; i++) {
    ages.push(2022 - birthYears[i])
}

console.log(ages)
*/

/////-------------------------------------
//continue & break -- продолжение и прирывание цикла


/*const user = personData = ["Andrey", "Zaytsev", 1990, "Lead engineer", ["Olga", "Petr"], false];

for (let i = 0; i <= user.length-1; i++) {
    if (typeof user[i] !== 'string') continue
    console.log(user[i], typeof user[i])
}

for (let i = 0; i <= user.length-1; i++) {
    if (typeof user[i] === 'number') break
    console.log(user[i], typeof user[i])
}*/

//Итерация в обратном порядке. Циклы в циклах
/*

const user = personData = ["Andrey", "Zaytsev", 1990, "Lead engineer", ["Olga", "Petr"], false];

for (let i = user.length-1; i >= 0; i--){
    console.log(i, user[i])
}

console.log('-----LOOP IN LOOP-----')

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Exercise ${exercise}`)
    for (let rep = 1; rep <= 5; rep++){
        console.log(`Ex ${exercise} Rep ${rep}`)
    }
    console.log('Out of inner loop')
}
console.log('Out of outer loop')

*/

//Loop While ----------------------------------
/*console.log('Loop FOR:')
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Push ups repetition ${rep}`)
}

console.log('Loop WHILE:')
let rep = 1

while (rep <= 10) {
    console.log(`Push ups repetition ${rep}`)
    rep++
}

let diceNumber = Math.trunc((Math.random()*6)+1)
console.log(diceNumber)

while (diceNumber !== 6){
    console.log('in game!')
    diceNumber = Math.trunc((Math.random()*6)+1)
}*/


//Final Task

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

const tips = []
const total = []

for (let i = 0; i < bills.length; i++) {
    calculateTips = (bill) => (bill < 20 ? bill * 0.2 : bill * 0.15)
    tips.push(Number(calculateTips(bills[i]).toFixed(2)))
    total.push(bills[i] + tips[i])
}
console.log(tips)
console.log(total)

function calculateAverage(arr) {
    let sum = 0
    let average = 0

    for (let i = 0; i < arr.length; i++) {
        average = sum += arr[i]/arr.length
    }
    return Number(average.toFixed(1))
}

console.log(calculateAverage(bills))
console.log(calculateAverage(total))




