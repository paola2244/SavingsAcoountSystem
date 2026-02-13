const checkButton = document.querySelector(".check");

// CHECK BALANCE
checkButton.addEventListener("click", () => {
    balanceText.textContent = `$${balance.toFixed(2)}`;
    messageText.textContent = "Current balance displayed successfully.";
});
