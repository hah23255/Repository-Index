// Write a function to return all numbers in range [start ... end]
// • Divisible to 3
// • Containing digit 2
// • Use higher-order function: iterate over the range in a loop
// and filter the range with arrow function

// function specialNumbers(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         if ((i % 3 === 0) && i.toString().includes('2')) {
//             result.push(i);
//         }
//     }
//     return `Nums: ${result.join(' ')}`;
// }

// // Example usage:   
// console.log(specialNumbers(20, 30)); // Nums: 21 24 27
// console.log(specialNumbers(100, 200)); // Nums: 102 120 123 126 129 132 162 192

function specialNumbers(start, end) {
    function generateRange(start, end, filter) {
        let result = '';
        for (let num = start; num <= end; num++)
            if (filter(num))
                result += (result ? ' ' : '') + num;
        return result;
    }

    let filterDiv3 = (num) => num % 3 == 0;
    let filterContains2 = (num) => num.toString().includes('2');
    let filters = (num) => filterDiv3(num) && filterContains2(num);
    return "Nums: " + generateRange(start, end, filters);
}