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

/*function getHumanChoice() {
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
}*/

function playGame(humanSelection){
    const computerSelection = getComputerChoice();

}


// Janken buttons
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

rockButton.addEventListener("click", () => playGame('rock'));

paperButton.addEventListener("click", () => playGame('paper'));

scissorsButton.addEventListener("click", () => playGame('scissors'));

function playRound(humanSelection,computerSelection) {
    if ((humanSelection === "rock" && computerSelection == "rock") || 
        (humanSelection === "paper" && computerSelection === "paper") || 
        (humanSelection === "scissors" && computerSelection === "scissors")) {
        return "round is a draw";
    } else if ((humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") || 
        (humanSelection === "paper" && computerSelection === "rock")) {
        return "human wins";
    } else {
        return "computer wins";
    } 
}

console.log(playRound(humanSelection,computerSelection))


/*function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("win")) {
            humanScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
        console.log(`Score: Player ${humanScore} - Computer ${computerScore}`);
    }

    console.log("--- Game Over ---");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }else if (computerScore > humanScore) {
        console.log("Sorry, the computer won the game!");
    } else {
        console.log("The game is a draw!");
    }
}*/


//playGame();