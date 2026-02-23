// Randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    // Get the random number(0-2) and store it in a variable
    let randomNumber = Math.floor(Math.random() * 3);

    // According to the random number(0-2) return either Rock, paper or scissor.
    if(randomValue === 0) {
        return "rock"
    }else if(randomValue === 1) {
        return "paper"
    }else {
        return "scissor"
    }
}

// Take the user choice and returns it
function getHumanChoice() {
    // Get the user choice
    let userChoice = prompt("Please type rock, paper, or scissors:")
}

