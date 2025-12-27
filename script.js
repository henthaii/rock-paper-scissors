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

//References
const buttons = document.querySelectorAll('button');
const resultDisplay = document.getElementById("results");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

let humanScore = 0;
let computerScore = 0;

/*Janken buttons
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

rockButton.addEventListener("click", () => playRound('rock'));

paperButton.addEventListener("click", () => playRound('paper'));

scissorsButton.addEventListener("click", () => playRound('scissors'));*/

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        
        updateDisplay(humanSelection, computerSelection, result);
    });
});

function playRound(humanSelection,computerSelection) {
     

    if ((humanSelection === "rock" && computerSelection == "rock") || 
        (humanSelection === "paper" && computerSelection === "paper") || 
        (humanSelection === "scissors" && computerSelection === "scissors")) {
        return "round is a draw";
    } else if ((humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") || 
        (humanSelection === "paper" && computerSelection === "rock")) {
        humanScore++;
        return "human wins";
        
    } else {
        computerScore++;
        return "computer wins";
    } 
}

// Function to update the UI with results and scores
function updateDisplay(result, humanSelection, computerSelection) {
    //resultMessage.textContent = `${result} You chose ${playerChoice}, computer chose ${computerChoice}.`;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

//console.log(playRound(humanSelection,computerSelection))


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