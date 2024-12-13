var hobbies = [
  "coding",
  "brazillian jiujitsu",
  "wrestling",
  "spending time with my family",
  "travelling",
  "learning new things",
];

console.log(hobbies.length);

hobbies.push("cooking");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "karaoke", "board games");

console.log(hobbies);

hobbies.shift();

hobbies.unshift("drawing");

var goals = [
  "Learn more about coding",
  "Become a better programmer",
  "Start training jiujitsu again",
];

var allTheThings = [...hobbies, ...goals];

console.log(allTheThings);

console.log(allTheThings.indexOf("brazillian jiujitsu"));

allTheThings.splice(8, 1);

console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});

console.log(plans);
