// write a function to calculate a status
function calculateStats(...numbers) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (const num of numbers) {
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const average = sum / numbers.length;
    return { min, max, average, sum };
}

console.log(calculateStats(5, 10, 15, 20, 25)); // { min: 5, max: 25, average: 15, sum: 75 }
console.log(calculateStats(2.50, -7.25, 17500.00, 0.25, 400, -0.5)); // { min: -7.25, max: 17500, average: 2982.5, sum: 17895 }

