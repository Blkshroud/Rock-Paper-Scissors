
function getComputerChoice(){ //selects a number from 0-2 randomly and converts to string with switch statement
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

function getPlayerChoice() { // Asks the player for their entry and verifies that it is a playable entry.
    let pChoice = prompt("Rock, paper, or scissors?");
    if(pChoice === null){ // Checks nulls from esc before proceeding to make case insensitive and verify entry.
        alert(`Answer must be rock, paper, or scissors! You didn't enter anything!`);
        getPlayerChoice(); // re-runs the function when an unuseable answer is given
    }
    else{
        pChoice = pChoice.toLowerCase(); // makes the check case-insensitive
        if(pChoice === 'rock' || pChoice === 'paper' || pChoice === 'scissors'){
            console.log(`Supposedly the player entered ${pChoice}`);
            return pChoice;
        }
        else{
            alert(`Answer must be rock, paper, or scissors! You entered ${pChoice}`);
            getPlayerChoice(); // re-runs the function when an unuseable answer is given
        }   
    }
     
}

function whoWins(){
    let pChoice = getPlayerChoice();
    console.log(`The player entered ${pChoice}`);
    let cChoice = getComputerChoice();
    if ((pChoice === "rock" && cChoice === "scissors") || (pChoice === "paper" && cChoice === "rock") || (pChoice === "scissors" && cChoice === "paper")){
        console.log(`You win! ${pChoice} beats ${cChoice}.`);
        return `You win! ${pChoice} beats ${cChoice}.`;
    }
    else if((cChoice === "rock" && pChoice === "scissors") || (cChoice === "paper" && pChoice === "rock") || (cChoice === "scissors" && pChoice === "paper")){
        console.log(`You lose. ${cChoice} beats ${pChoice}.`);
        return `You lose! ${cChoice} beats ${pChoice}.`;
    }
    else{
        console.log(`It was a tie. You both played ${cChoice}. Try again!`);
        return `It was a tie. You both played ${cChoice}. Try again!`;
    }
}

whoWins();

