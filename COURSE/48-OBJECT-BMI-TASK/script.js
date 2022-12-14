
const jack = {
    firstName: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70
}

const mike = {
    firstName: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93
}

function bmiCalc () {
    return +(this.weight / Math.pow(this.height, 2)).toFixed(1)
}
jack.bmi = bmiCalc
mike.bmi = bmiCalc

console.log(
    jack.bmi() > mike.bmi()
    ?`${jack.firstName} ${jack.lastName} BMI (${jack.bmi()}) is higher than ${mike.firstName} ${mike.lastName} BMI (${mike.bmi()})`
        :`${mike.firstName} ${mike.lastName} BMI (${mike.bmi()}) is higher than ${jack.firstName} ${jack.lastName} BMI (${jack.bmi()})`)
