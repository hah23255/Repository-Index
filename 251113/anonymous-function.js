console.log(() => console.log("hello")); // [Function (anonymous)] (unnamed function)
const sum = (a, b, c) => a + b + c;
console.log(sum); // [Function: sum] (has name "sum", not anonymous)

// Anonymous function assigned to a variable
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply);
// [Function (anonymous)] (unnamed function)

// Named function expression
const divide = function div(a, b) {
  return a / b;
};
console.log(divide);
// [Function: div] (has name "div", not anonymous)

// Подаваме числото 5 като аргумент за 'x'
console.log(
  (function (x) {
    return x * x;
  })(5),
); // 25

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This is an IIFE");
})(); // This is an IIFE

// Arrow function IIFE
(() => {
  console.log("This is an arrow function IIFE");
})(); // This is an arrow function IIFE
