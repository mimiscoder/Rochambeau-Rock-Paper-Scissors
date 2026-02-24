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
function getHumanChoice(roundNumber) {
    // Get the user choice
    let userChoice = prompt(`Round ${roundNumber}: Please type rock, paper, or scissors:`);
    return userChoice;
}

// Select the winner or loser and assign the score accordingly in a single round.
function playRound(humanChoice, computerChoice) {
    // Select the winner and assign score to human or computer
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    }else if(humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beat ${computerChoice}`);
    }else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beat ${computerChoice}`);
    }else if(humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === computerChoice) {
        computerScore += 1;
        humanScore += 1;
        console.log(`It's a tie this round! ${computerChoice} ties with ${humanChoice}`);
    }else {
        console.log("UNKOWN OPERATION!");
    }
}

// Determine the finall winner
function finallWinner(finallHumanScores, finallComputerScores) {
    // Print the finall winner and scores based on the finall scores of both computer and user
    if(finallHumanScores > finallComputerScores) {
        console.log(
            `Yes! You're the winner. \n
            Your Final Scores: ${finallHumanScores}\n
            Computer Final Scores: ${finallComputerScores}`
        );
    }else{
        console.log(
            `"Unfortunately! You lost!". \n
            Your Final Scores: ${finallHumanScores}\n
            Computer Final Scores: ${finallComputerScores}`
        );
    }
}

// Call playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice(i + 1);
        humanSelection = humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1).toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    finallWinner(humanScore, computerScore);
}

playGame();

