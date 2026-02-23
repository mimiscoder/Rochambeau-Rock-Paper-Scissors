// Variables to store user and computer scores
let humanScore, computerScore;
humanScore = computerScore = 0;

// Randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    // Get the random number(0-2) and store it in a variable
    let randomNumber = Math.floor(Math.random() * 3);

    // According to the random number(0-2) return either Rock, paper or scissor.
    if(randomNumber === 0) {
        return "Rock";
    }else if(randomNumber === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

// Take the user choice and returns it
function getHumanChoice() {
    // Get the user choice
    let userChoice = prompt("Please type rock, paper, or scissors:");
    return userChoice;
}

// Take the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
    alert(computerChoice)
    // Select the winner and assign score to human or computer
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else if(humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beat ${computerChoice}`);
    }else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beat ${computerChoice}`);
    }else if(humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === computerChoice) {
        computerScore += 1;
        humanScore += 1;
        console.log(`You tie! ${computerChoice} ties ${humanChoice}`);
    }else {
        console.log("UNKOWN OPERATION!")
    }
}
