// withdraw (with balance validation)


withdrawButton.addEventListener("click", () => {
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        messageText.textContent = "Please enter a valid amount to withdraw.";
        return;
    }

    if (amount > balance) {
        messageText.textContent = "Insufficient balance. Operation denied.";
        return;
    }

    balance -= amount;
    balanceText.textContent = `$${balance.toFixed(2)}`;
    messageText.textContent = "Withdrawal completed successfully.";

    amountInput.value = "";
});
