// Write a function to process income and expense transactions
// Calculate total income, total expenses, and net balance

function processTransactions(transactions) {
    let totalIncome = 0;
    let totalExpenses = 0;
    
    for (let transaction of transactions) {
        if (transaction.type === 'income') {
            totalIncome += transaction.amount;
        } else if (transaction.type === 'expense') {
            totalExpenses += transaction.amount;
        }
    }
    
    const netBalance = totalIncome - totalExpenses;
    
    return {
        totalIncome,
        totalExpenses,
        netBalance
    };
}

// Example usage:
const transactions = [
    { type: 'income', amount: 5000, description: 'Salary' },
    { type: 'expense', amount: 1200, description: 'Rent' },
    { type: 'expense', amount: 300, description: 'Groceries' },
    { type: 'income', amount: 500, description: 'Freelance work' },
    { type: 'expense', amount: 150, description: 'Utilities' }
];

const result = processTransactions(transactions);
console.log('Total Income:', result.totalIncome);
console.log('Total Expenses:', result.totalExpenses);
console.log('Net Balance:', result.netBalance);
