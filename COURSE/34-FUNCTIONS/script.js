//Don't Repeat Youself DRY - неповторяй себя

function printText() {
  console.log("Hello to everyone!");
}

printText(); // вызов/запуск функции
printText();
printText();
printText();

function colorizer(item, color, colorCode) {
  console.log(item, color);
  const colorisedItem = `The ${item} is ${color}. The code of color is ${colorCode}`;
  //console.log(colorisedItem);
  return colorisedItem;
}

colorizer("box", "green", 932);

const messageFromColorizer = colorizer("desk", "black", 95656);

console.log(`We hane the following message: ${messageFromColorizer}`);

const messageFromColorizer2 = colorizer("board", "yellow", 164166);
console.log(`We have the following message: ${messageFromColorizer2}`);
