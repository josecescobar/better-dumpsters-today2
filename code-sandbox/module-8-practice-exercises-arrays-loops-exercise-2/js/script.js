var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books",
];

var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`Sorry, no such item in the array.`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "tea");
console.log(stuff);
