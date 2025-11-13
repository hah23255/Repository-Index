//need a funtion to demonstrate a varible number of arguments.

function num(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}

// Example usage:
console.log(num(1, 2, 3)); // returns 6
console.log(num(5, 10, 15, 20)); // returns 50
console.log(num()); // returns 0
