
function getComputerChoice(){
    let numSel = Math.floor(Math.random() * 3);
    console.log(numSel);
    switch (numSel) {
        case 0:
            console.log("rock");
            return 'rock';
        case 1:
            console.log("paper");
            return 'paper';
        case 2:
            console.log("scissors");
            return 'scissors';
    }
}

function getPlayerChoice() {
    let pChoice = prompt("Rock, paper, or scissors?");
    pChoice = pChoice.toLowerCase();
    return pChoice;
}

function whoWins(){
    let pChoice = getPlayerChoice();
    let cChoice = getComputerChoice();
    if ((pChoice === "rock" && cChoice === "scissors") || (pChoice === "paper" && cChoice === "rock") || (pChoice === "scissors" && cChoice === "paper")){
        console.log("pWin");
        return "pWin";
    }
    else if((cChoice === "rock" && pChoice === "scissors") || (cChoice === "paper" && pChoice === "rock") || (cChoice === "scissors" && pChoice === "paper")){
        console.log("cWin");
        return "cWin";
    }
    else{
        console.log("tie");
        return "tie";
    }
}

whoWins();