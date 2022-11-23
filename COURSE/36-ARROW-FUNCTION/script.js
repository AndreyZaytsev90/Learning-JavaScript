//Arrow
const getAge2 = (birthYear, yearNow) => {
  return yearNow - birthYear;
};

const getAgeArrow = (birthYear, yearNow) => yearNow - birthYear;

const myAge2 = getAge2(1990, 2022);
console.log(myAge2);

const myAgeArrow = getAgeArrow(1990, 2022);
console.log(myAgeArrow);

const canBuyAlcohol1 = (age) =>
  age >= 21
    ? console.log("yes, you can buy the alcohol")
    : console.log("no, you can not buy the alcohol");

canBuyAlcohol1(21);

const canBuyAlcohol2 = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  age >= 21
    ? console.log("yes, you can buy the alcohol")
    : console.log("no, you can not buy the alcohol");
};

canBuyAlcohol2(1990, 2022);
