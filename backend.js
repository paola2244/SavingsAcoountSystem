let balance = 0;

//Bring me those HTML elements so I can modify them.
const amountInput = document.getElementById("amount");
const balanceText = document.querySelector(".balance");
const messageText = document.querySelector(".message");

const depositButton = document.querySelector(".deposit");
const withdrawButton = document.querySelector(".withdraw");


// DEPOSIT
depositButton.addEventListener("click", () => {
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        messageText.textContent = "Please enter a valid amount to deposit.";
        return;
    }

    balance += amount;
    balanceText.textContent = `$${balance.toFixed(2)}`;
    messageText.textContent = "Deposit completed successfully.";

    amountInput.value = "";
});
