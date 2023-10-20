
function getComputerChoice(){
    let numSel = Math.floor(Math.random() * 3);
    switch (numSel) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getPlayerChoice() {
    let pChoice = prompt("Rock, paper, or scissors?");
    pChoice = pChoice.toLowerCase();
    return pChoice;
}

console.log(getComputerChoice());
getPlayerChoice();