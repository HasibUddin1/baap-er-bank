document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawAmountString = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + withdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);
    const currentTotalBalance = previousTotalBalance - withdrawAmount;

    totalBalanceElement.innerText = currentTotalBalance;

    withdrawInputField.value = '';
})