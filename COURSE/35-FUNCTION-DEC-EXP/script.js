//Declaration - можно вызвать до того как она была определена
const myAge = getAge1(1990, 2022);
console.log(myAge);

function getAge1(birthYear, yearNow) {
  return yearNow - birthYear;
}

//const myAge = getAge1(1990, 2022);

//Arrow
const getAge2 = (birthYear, yearNow) => {
  return yearNow - birthYear;
};

const myAge2 = getAge2(1990, 2022);
console.log(myAge2);

//Expression

const getAge3 = function (birthYear, yearNow) {
  // anonymous
  return yearNow - birthYear;
};

const myAge3 = getAge3(1990, 2022);
console.log(myAge3);
