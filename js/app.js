
//selection of players
const buttons = document.querySelectorAll(".btn-select");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        //get player name
        const nameField = document.querySelectorAll('.name');
        //create new li element
        const li = document.createElement('li');
        li.classList.add('li-list');
        li.innerText = nameField[i].innerText;
        //check previous check list
        const liList = document.querySelectorAll('.li-list');
        const liLength = liList.length;
        if (liLength < 5) {
            //add new created li element to ul list
            const seletedPlayers = document.getElementById('selected-player');
            seletedPlayers.appendChild(li);
        }
        else {
            alert("you already selected best 5 players");
        }

    });
}


function getElement(inputId) {
    const inputField = document.getElementById(inputId);
    return inputField;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerField = getElement('player-field');
    const playerFieldValue = parseFloat(playerField.value);

    playerField.value = "";

    const liList = document.querySelectorAll('.li-list');
    const liLength = liList.length;

    const totalPlayerCost = playerFieldValue * liLength;

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