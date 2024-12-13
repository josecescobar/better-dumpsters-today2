var hourlyWage = prompt("What is the hourly wage? (ex. 20.00)");
var hoursWorkedWeek = prompt(
  "How many hours have you worked in a week? (ex. 40)"
);

console.log(
  `Weekly pay before taxes is $${(hourlyWage * hoursWorkedWeek).toFixed(2)}`
);
