const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

function rock(){
    playRound('rock');
}
function paper(){
    playRound('paper');
}
function scissors(){
    playRound('scissors');
}

rockBtn.addEventListener('click', rock);
paperBtn.addEventListener('click', paper);
scissorBtn.addEventListener('click', scissors);

const scoreBoard = document.querySelector("#scoreBoard");
const round = document.querySelector("#round");
const bottom = document.querySelector("#victor");


const pWinsText = document.createElement("p");
const cWinsText = document.createElement("p");
const currentWinnerText = document.createElement("p");
const overallWinnerText = document.createElement("p");

scoreBoard.appendChild(pWinsText);
scoreBoard.appendChild(cWinsText);
round.appendChild(currentWinnerText);
bottom.appendChild(overallWinnerText);
let pWins = 0;
let cWins = 0;
let matchCount = 0;

const restartBtn = document.createElement("button");
restartBtn.textContent = 'Play Again';


pWinsText.textContent = `You have won ${pWins} time(s).`;
cWinsText.textContent = `The computer has won ${cWins} time(s).`;
currentWinnerText.textContent = `Click a button to start playing!`;

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

function playRound(pChoice){
    console.log(`Player ${pChoice}`);
    let cChoice = getComputerChoice();
    if ((pChoice === "rock" && cChoice === "scissors") || (pChoice === "paper" && cChoice === "rock") || (pChoice === "scissors" && cChoice === "paper")){
        currentWinnerText.textContent = `You win! ${pChoice} beats ${cChoice}.`;
        matchCount++;
        pWins++;
        pWinsText.textContent = `You have won ${pWins} time(s).`;
        if(pWins === 5){
            overallWinnerText.textContent = `You are the overall victor! You won ${pWins} times and the cpu won ${cWins} times. It took a total of ${matchCount} rounds for a winner to be decided.`
            bottom.appendChild(overallWinnerText);
            bottom.appendChild(restartBtn);
            restartBtn.addEventListener('click', resetGame);
            rockBtn.removeEventListener('click', rock);
            paperBtn.removeEventListener('click', paper);
            scissorBtn.removeEventListener('click', scissors);
            return console.log("Game Complete");
        }
        return `You win! ${pChoice} beats ${cChoice}.`;
    }
    else if((cChoice === "rock" && pChoice === "scissors") || (cChoice === "paper" && pChoice === "rock") || (cChoice === "scissors" && pChoice === "paper")){
        currentWinnerText.textContent = `You lose! ${cChoice} beats ${pChoice}.`;
        matchCount++;
        cWins++;
        cWinsText.textContent = `The computer has won ${cWins} time(s).`;
        if(cWins === 5){
            overallWinnerText.textContent = `The CPU is the overall victor. You won ${pWins} times before the cpu won ${cWins} times. It took a total of ${matchCount} rounds for a winner to be decided.`;
            bottom.appendChild(overallWinnerText);
            bottom.appendChild(restartBtn);
            restartBtn.addEventListener('click', resetGame);
            rockBtn.removeEventListener('click', rock);
            paperBtn.removeEventListener('click', paper);
            scissorBtn.removeEventListener('click', scissors);
            return console.log("Game Complete");
        }
        return `You lose! ${cChoice} beats ${pChoice}.`;
    }
    else{
        currentWinnerText.textContent = `It was a tie. You both played ${cChoice}. Try again!`;
        matchCount++;
        return `It was a tie. You both played ${cChoice}. Try again!`;
    }
}


function resetGame(){
    pWins = 0;
    cWins = 0;
    matchCount = 0;
    restartBtn.removeEventListener('click', resetGame);
    bottom.removeChild(restartBtn);
    bottom.removeChild(overallWinnerText);
    pWinsText.textContent = `You have won ${pWins} time(s).`;
    cWinsText.textContent = `The computer has won ${cWins} time(s).`;
    currentWinnerText.textContent = `Click a button to start playing!`;
    rockBtn.addEventListener('click', rock);
    paperBtn.addEventListener('click', paper);
    scissorBtn.addEventListener('click', scissors);
}
