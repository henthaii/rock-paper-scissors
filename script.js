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

function getComputerChoice(janken) {
    return Math.floor(Math.random() * janken);
}

const rock = "0";
const paper = "1";
const scissors = "2";

console.log(getComputerChoice(3))

