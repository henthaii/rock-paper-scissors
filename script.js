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
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let janken = prompt("Janken? Enter rock, paper, or scissors.");

    if (janken.toLowerCase() === "rock") {
        console.log("rock");
        return "rock";
    } else if (janken.toLowerCase() === "paper") {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function playRound(humanSelection,computerSelection) {
    if ((humanSelection === "rock" && computerSelection == "rock") || 
        (humanSelection === "paper" && computerSelection === "paper") || 
        (humanSelection === "scissors" && computerSelection === "scissors")) {
        console.log("round is a draw");
        return "round is a draw";
    } else if ((humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") || 
        (humanSelection === "paper" && computerSelection === "rock")) {
        console.log("human wins");
        return "human wins";
    } else {
        console.log("computer wins");
        return "computer wins";
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection))

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    
}