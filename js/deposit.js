document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + depositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentBalance = previousTotalBalance + depositAmount;
    totalBalanceElement.innerText = currentBalance;

    depositField.value = '';
})