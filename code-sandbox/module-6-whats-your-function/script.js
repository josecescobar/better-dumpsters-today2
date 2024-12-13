var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie());
console.log(favoriteCookie("chocolate chip"));

var introduce = function (name, occupation) {
  return `Hello, my name is ${name} and I am a ${occupation}. Glad to meet you!`;
};
console.log(introduce("Jose", "developer"));
console.log(introduce("Escobar", "designer"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses >= 8) {
    console.log("Great job! You have had enough water!");
  } else if (numGlasses < 8) {
  }
  {
    console.log("Not bad! Try to be more hydrated tomorrow!");
  }
};

hydrationFeedback();
