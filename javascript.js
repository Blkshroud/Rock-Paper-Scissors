
function getComputerChoice(){ //selects a number from 0-2 randomly and converts to string with switch statement
    let numSel = Math.floor(Math.random() * 3);
    switch (numSel) {
        case 0:
            console.log("CPU rock");
            return 'rock';
        case 1:
            console.log("CPU paper");
            return 'paper';
        case 2:
            console.log("CPU scissors");
            return 'scissors';
    }
}

function getPlayerChoice() { // Asks the player for their entry and verifies that it is a playable entry.
    let pChoice = prompt("Rock, paper, or scissors?");
    if(pChoice === null){ // Checks nulls from esc before proceeding to make case insensitive and verify entry.
        alert(`Answer must be rock, paper, or scissors! You didn't enter anything!`);
         // re-runs the function when an unuseable answer is given
        return getPlayerChoice();
    }
    else{
        pChoice = pChoice.toLowerCase(); // makes the check case-insensitive
        if(pChoice === 'rock' || pChoice === 'paper' || pChoice === 'scissors'){
            return pChoice;
        }
        else{
            alert(`Answer must be rock, paper, or scissors! You entered ${pChoice}`);
             // re-runs the function when an unuseable answer is given
            return getPlayerChoice();
        }   
    }
     
}

function playRound(){
    let pChoice = getPlayerChoice();
    console.log(`Player ${pChoice}`);
    let cChoice = getComputerChoice();
    if ((pChoice === "rock" && cChoice === "scissors") || (pChoice === "paper" && cChoice === "rock") || (pChoice === "scissors" && cChoice === "paper")){
        return `You win! ${pChoice} beats ${cChoice}.`;
    }
    else if((cChoice === "rock" && pChoice === "scissors") || (cChoice === "paper" && pChoice === "rock") || (cChoice === "scissors" && pChoice === "paper")){
        return `You lose! ${cChoice} beats ${pChoice}.`;
    }
    else{
        return `It was a tie. You both played ${cChoice}. Try again!`;
    }
}


console.log(playRound());