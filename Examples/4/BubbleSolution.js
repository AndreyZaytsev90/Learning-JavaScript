//var i = 0;
let hasBubbleGum = [false, false, false, true];
let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

//while (i < hasBubbleGum.length) {
//  if (hasBubbleGum[i]) {
//    console.log(products[i] + " contains bubble gum");
//  }
//  i = i + 1;
//}
// с циклом for

for (let i = 0; i < hasBubbleGum.length; i = i + 1) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
}
