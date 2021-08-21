// function whatShallIWear(temp) {
//   if (temp < 60) {
//     console.log("Wear a sweater");
//   } else if (temp < 70) {
//     console.log("Wear a jacket");
//   } else {
//     console.log("Wear t-shirt");
//   }
// }

// whatShallIWear(60);
// whatShallIWear(80);
// whatShallIWear(50);

// function makeTea(cups, tea) {
//   console.log("Brewing " + cups + " cups of " + tea);
// }
// makeTea(3);

// function makeTea(cups, tea) {
//   console.log("Brewing " + cups + " cups of " + tea);
// }
// makeTea(3, "Earl Grey", "hey ma!", 42);

// function barkAtTheMoon() {
//   console.log("Woooooooooooooo!");
// }
// barkAtTheMoon();

function bake(degrees) {
  let message;
  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me.";
    //setMode("bake");
    //setTemp(degrees);
  }
  return message;
}
let status = bake(350);
console.log(status);
