var hoursOfSleep = Number(
  prompt("How many hours of sleep did you get last night? (0-12)")
);

if (hoursOfSleep > 12) {
  console.log("You should be well rested!");
} else if (hoursOfSleep >= 8) {
  console.log("You should be well rested!");
} else if (hoursOfSleep >= 5) {
  console.log("Consider going to bed earlier.");
} else {
  console.log("I hope you're not driving home!");
}
