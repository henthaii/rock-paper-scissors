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
    let sign = prompt("Janken? Rock, paper, or scissors?");

    if (sign.toLowerCase() === "rock") {
        log.innerText = "rock"
    } else if (sign.toLowerCase() === "paper") {
        log.innerText = "paper"
    } else {
        log.innerText = "scissors"
    }
}
