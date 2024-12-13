var multipy = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `You need to provide this function with two numbers.`;
  } else if (typeof num2 !== "number") {
    return `You need to provide this function with two numbers.`;
  }
  return num1 * num2;
};

console.log(multipy(3, 5));
console.log(multipy(3.4, -99.3));

console.log(multipy("mama", "mia"));
