var i = 0;
var hasBubbleGum = [false, false, false, true];
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i = i + 1;
}
