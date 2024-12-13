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

var filterStuff = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(filterStuff);

var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}
console.log(newArray);
