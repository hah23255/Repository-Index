//write a js function for calculating n! (factorial)
//ensure it works with large numbers by using BigInt

function factorial(n) {
    if (n == 0 || n == 1) return BigInt(1);

    return BigInt(n) * BigInt(factorial(n - 1).toString());
}

// Example usage:
console.log(factorial(50).toString());
