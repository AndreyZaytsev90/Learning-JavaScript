//const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
//const solution2 = scores[8];
//alert("Solution 2 produced " + solution2 + " bubbles.");

////const numScores = scores.length;
//alert(numScores);
//console.log(numScores);

//var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
//var last = products.length - 1;
//var recent = products[last];

//let number = Math.random();
//console.log(number);

function makePhrases() {
  var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);
  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  alert(phrase);
}
makePhrases();
