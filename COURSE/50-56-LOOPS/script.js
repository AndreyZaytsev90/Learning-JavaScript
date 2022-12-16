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

const user = personData = ["Andrey", "Zaytsev", 1990, "Lead engineer", ["Olga", "Petr"]];

for (let i = 0; i <= user.length-1; i++) {
    console.log(user[i], typeof user[i])
}