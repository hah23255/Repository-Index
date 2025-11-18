//demonstrate how Arrow functions (lambda) use the arrow operator => to provide
// a shorter syntax for function expressions:
const sum = (a, b) => a + b; //
const multi = (a, b) => a * b; // explain?
const average = (a, b) => (a + b) / 2; //
const sign = (x) => (x < 0 ? -1 : x > 0 ? 1 : 0); // explain

console.log(sum(2, 5), multi(2, 5)); // 7 10
console.log(average(sum(2, 5), multi(2, 5))); // 8.5
console.log(sign(3), sign(0), sign(-4)); // 1 0 -1

const distance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distance(100, 50, 250, 100));

const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};
console.log(factorial(5)); // 120
