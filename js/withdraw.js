document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawAmountString = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawInputField.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please enter amount');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);
    
    

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);

    if(withdrawAmount > previousTotalBalance){
        alert('Baap er bank e eto taka nai');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentTotalBalance = previousTotalBalance - withdrawAmount;

    totalBalanceElement.innerText = currentTotalBalance;

})