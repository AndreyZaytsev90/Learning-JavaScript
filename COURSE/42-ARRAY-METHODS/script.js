const numbers = [23, 54, 4, 31, 11];

let result;

result = numbers.length; //5

result = Array.isArray(numbers); // array? true

result = numbers.indexOf(54); //1

//push()  pop()

result = numbers.push(7);

result = numbers.pop(); //возвращает удаленный элемент из массива 7

//unshift() shift()

result = numbers.unshift(3); // Добавляет в начало массива и возвращает длину

result = numbers.shift(); // Удаляет из начала массива и возвращает элемент

result = numbers.push(54, 653, 342, 2, 2); // Добавляет в конец массива и возвращает длину

result = numbers.unshift(1, 32, 78); // Добавляет в начало массива и возвращает длину

result = numbers.splice(1, 1) // первый парамет - индекс с которого начинается удаление из массива, второй параметр - кол-во удаляемых значений. Зозвращает удаленные значения 
result = numbers.splice(1, 4)

result = numbers.reverse() // переворачивает массив

result = numbers.slice(1, 4) // вырезает кусочек массива. В параметрах границы индексов

result = numbers.concat(result)// сложение массивов



console.log(result);
console.log(numbers);
