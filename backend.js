const checkButton = document.querySelector(".check");


checkButton.addEventListener("click", () => {
    balanceText.textContent = `$${balance.toFixed(2)}`;
    messageText.textContent = "Current balance displayed successfully.";
});
