//variables can hold value of type "function"
//define a function expression demonstrating this

const greet = function (name) {
    return `Hello, ${name}!`;
};

// Example usage:
console.log(greet('Alice')); // Output: Hello, Alice!

const add = function (a, b) {
    return a + b;
};

console.log(add); // [Function: add]
console.log(add(2, 3)); // 5
const sum = add,
    sqrt = Math.sqrt;
console.log(sqrt(sum(8, 1))); // 3
