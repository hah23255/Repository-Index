//we are given a sequence of comands : + Income:{sum}, + Spend:{sum},
//write a function to procees all comands and calculate the final balance (starting with ) initially)

function processExpenses(...commands) {
    let balance = 0;

    for (const command of commands) {
        const [type, amountStr] = command.split(': ');
        const amount = parseFloat(amountStr);
        if (type === 'Income') {
            balance += amount;
        } else if (type === 'Expense') {
            balance -= amount;
        } else {
            console.error(`Unknown command type: ${type}`);
        }
    }

    return balance;
}

// Example usage:   
console.log(processExpenses("Income: 50", "Income: 70", "Expense: 30", "Income: 100", "Expense: 40", "Income: 50"));