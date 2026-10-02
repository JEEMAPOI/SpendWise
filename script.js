let budget = 0;
let expenses = [];

const budgetInput = document.getElementById("budgetInput");
const setBudgetButton = document.getElementById("setBudget");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseButton = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const remainingBalance = document.getElementById("remainingBalance");

setBudgetButton.addEventListener("click", function () {
    budget = Number(budgetInput.value);

    if (budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    updateBalance();
});

addExpenseButton.addEventListener("click", function () {
    const name = expenseName.value;
    const amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    displayExpenses();
    updateBalance();

    expenseName.value = "";
    expenseAmount.value = "";
});

function displayExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(function (expense) {
        const item = document.createElement("li");
        item.textContent = `${expense.name}: KES ${expense.amount}`;
        expenseList.appendChild(item);
    });
}

function updateBalance() {
    let totalExpenses = 0;

    expenses.forEach(function (expense) {
        totalExpenses += expense.amount;
    });

    remainingBalance.textContent = `KES ${budget - totalExpenses}`;
}
