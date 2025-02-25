let totalAmount = 0;

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }
    
    totalAmount += amount;

    const listItem = document.createElement("li");
    listItem.textContent = `${name}: ₹${amount.toFixed(2)}`;
    document.getElementById("expenseList").appendChild(listItem);

    document.getElementById("totalExpense").textContent = `Total: ₹${totalAmount.toFixed(2)}`;
    
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}