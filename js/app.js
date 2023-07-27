

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerField = getElement('player-field');
    const playerFieldValue = parseFloat(playerField.value);

    playerField.value = "";
    const totalPlayerCost = playerFieldValue * 5;

    const playerExpenses = getElement('player-expenses');
    playerExpenses.innerHTML = totalPlayerCost;
});

document.getElementById('btn-total').addEventListener('click', function () {
    const playerExpenses = getElement('player-expenses');
    const playerExpensesValue = parseFloat(playerExpenses.innerText);

    const managerField = getElement('manager-field');
    const managerFieldValue = parseFloat(managerField.value);
    managerField.value = "";

    const coachField = getElement('coach-field');
    const coachFieldValue = parseFloat(coachField.value);
    coachField.value = "";

    const totalCost = playerExpensesValue + managerFieldValue + coachFieldValue;

    const total = getElement('total');
    total.innerText = totalCost;
});