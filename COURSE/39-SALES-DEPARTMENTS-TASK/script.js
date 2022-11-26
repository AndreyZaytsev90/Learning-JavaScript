let dept1;
let dept2;
//The first quarter
let dept1_january = 35467;
let dept1_february = 29842;
let dept1_march = 38501;

let dept2_january = 70533;
let dept2_february = 51221;
let dept2_march = 32555;

const getAverage = (month1, month2, month3) => (month1 + month2 + month3) / 3;

const dept1AverSales = getAverage(dept1_january, dept1_february, dept1_march);
console.log(dept1AverSales);

const dept2AverSales = getAverage(dept2_january, dept2_february, dept2_march);
console.log(dept2AverSales);

function printBonus(dept1AverSales, dept2AverSales) {
  const notBonus = `Unfortunately, there's no bonus this month`;
  if (dept1AverSales > dept2AverSales) {
    const difference = dept1AverSales - dept2AverSales;
    const percent = (difference / dept2AverSales) * 100;
    console.log(
      percent >= 30
        ? `Department 1 will get a bonus of ${Math.round(Math.round(percent))}%`
        : notBonus
    );
  } else if (dept2AverSales > dept1AverSales) {
    const difference = dept2AverSales - dept1AverSales;
    const percent = (difference / dept1AverSales) * 100;
    console.log(
      percent >= 30
        ? `Department 2 will get a bonus of ${Math.round(percent)}%`
        : notBonus
    );
  } else {
    console.log(notBonus);
  }
}

printBonus(dept1AverSales, dept2AverSales);
