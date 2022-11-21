const money = 100;
const cost = 150;

money >= cost ? console.log("you can buy it") : console.log("you can't buy it");

const canYouButIt = money >= cost ? "you can buy it" : "you can't buy it";

console.log(canYouButIt);

console.log(`You can ${money >= cost ? "" : "not "}buy it`);
