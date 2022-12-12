myData = {
  firstName: "Andrey",
  lastName: "Zaytsev",
  birthYear: 1990,
  job: "Lead engineer",
  myFamily: ["Olga", "Petr", "Andrey"],
  hasDriverLicense: true,
  /*calcAge: function (birthYear) {
    return 2022-birthYear
  }*/
  /*calcAge: function () {
    //console.log(this)
    return 2022-this.birthYear
  }*/
  calcAge: function () {
    //console.log(this)
    return this.age = 2022-this.birthYear
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-olds ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
  }

};

//console.log(myData.age())
/*console.log(myData['calcAge'](1990))*/

//console.log(myData.calcAge())
//console.log(myData.calcAge())

console.log(myData.calcAge())
console.log(myData.age)
console.log(myData.getSummary())
//challenge
// getSummary return
// 'Andrey is a 32-year-olds Lead engineer, and he has a/no driver license'