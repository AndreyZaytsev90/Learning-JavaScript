const brand = "Renault";
const model = "Fluence";
const color = "brown";
const year = "2014";

let carHtml;

//Old approach(before ES6)

// carHtml =
//   "<h3>" +
//   "Car Description" +
//   "</h3>" +
//   "<ul>" +
//   "<li>Brand: " +
//   brand +
//   "</li>" +
//   "<li>Model: " +
//   model +
//   "</li>" +
//   "<li>Color: " +
//   color +
//   "</li>" +
//   "<li>Year: " +
//   year +
//   "</li>" +
//   "</ul>";

//carHtml = document.body.innerHTML = carHtml;

//New approach

carHtml = `
<h3>Car Description</h3>
<ul>
<li>Brand: ${brand}</li>
<li>Model: ${model}</li>
<li>Color: ${color}</li>
<li>Year: ${year}</li>
<li>Doors: ${getDoors()}</li>
<li>Tax: ${year > 2014 ? "1000$" : "0$"}</li>
</ul>
`;

function getDoors() {
  return 5;
}

carHtml = document.body.innerHTML = carHtml;
