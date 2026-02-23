// Randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    // Get the random number(0-2) and store it in a variable
    let randomValue = Math.floor(Math.random() * 3);

    // According to the random number(0-2) return either Rock, paper or scissor.
    if(randomValue === 0) {
        return "rock"
    }else if(randomValue === 1) {
        return "paper"
    }else {
        return "scissor"
    }
}


