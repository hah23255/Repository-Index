// Write a function getPrice(product, location) to return
// product price according to this pricing table:
// Location|coffee|water|sweets|nuts
// Sofia|0.50|0.80|1.20|1.45
// Plovdiv|0.40|0.70|1.30|1.50
// Varna|0.45|0.70|1.35|1.55

function getPrice(location, product) {
    const prices = {
        Sofia: {
            coffee: 0.5,
            water: 0.8,
            sweets: 1.45,
            peanuts: 1.6,
        },
        Plovdiv: {
            coffee: 0.4,
            water: 0.7,
            sweets: 1.3,
            peanuts: 1.5,
        },
        Varna: {
            coffee: 0.45,
            water: 0.7,
            sweets: 1.35,
            peanuts: 1.55,
        },
    };

    if (prices[location] && prices[location][product] !== undefined) {
        return prices[location][product];
    } else {
        return undefined; // or throw an error if preferred
    }
}

console.log(getPrice('Sofia', 'water')); // 0.8
console.log(getPrice('Varna', 'sweets')); // 1.35
console.log(getPrice('London', 'water')); // undefined
