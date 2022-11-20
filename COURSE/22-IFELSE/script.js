const age = 17;
const isAdult = age >= 18;

if (isAdult) {
  console.log("You can watch this video");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are too young. You can watch this video after ${yearsLeft} years later`
  );
}

const color = "green";

if (color === "green") {
  console.log("GO!");
} else if (color === "yellow") {
  console.log("GET READY!");
} else if (color === "red") {
  console.log("STOP!");
} else {
  console.log("Incorrect color!");
}
