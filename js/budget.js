// per player budget function
function getThePerPlayer(){
    const perPlayerInput = document.getElementById('per-player-input');
    const perPlayerInputString = perPlayerInput.value;
    const perPlayerValue = parseInt(perPlayerInputString);
    // console.log(perPlayerValue);
    const totalPlayer = perPlayerValue * 5;
    return totalPlayer;
}

// calculate button append
document.getElementById('btn-calculate').addEventListener('click', function(){
    // getThePerPlayer();
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = getThePerPlayer();
})

// manager coach and total function

function totalExpenses(){
    const managerInput = document.getElementById('manager-input');
    const managerInputString = managerInput.value;
    const manager = parseInt(managerInputString);

    const coachInput = document.getElementById('coach-input');
    const coachInputString = coachInput.value;
    const coach = parseInt(coachInputString);

    const totalExpenses = manager + coach + getThePerPlayer();
    return totalExpenses;
}

// total calculate button append
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    // totalExpenses();
    const total = document.getElementById('total-expenses');
    total.innerText = totalExpenses();
})