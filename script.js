console.log("Hello World")

// Problem: Make rock paper scissors game.

// Game: You throw either rock, paper, or scissors and CPU does the same.
// Rock beats scissors. Paper beats rock. Scissors beats paper.
// If you and CPU throw the same thing, it is a tie.

// User is provided an option to input what they want.
// User inputs it
// If they win, get a message that they win.
// If they lose, get a message that they lose.
// If they tie, get a message that it's a draw.

function getComputerChoice(cpu) {
    if ((Math.floor(Math.random() * cpu)) < 1) {
        return "rock";
    } else if ((Math.floor(Math.random() * cpu)) > 1) {
        return "scissors";
    } else {
        return "paper";
    }
}

console.log(getComputerChoice(3))

function getHumanChoice() {
    let janken = prompt("Janken? Enter rock, paper, or scissors.");

    if (janken.toLowerCase() === "rock") {
        console.log("rock");
    } else if (janken.toLowerCase() === "paper") {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
 // if (humanChoice = rock)
 // make function here where the round will play, need to figure out how to add meaning to parameters
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);