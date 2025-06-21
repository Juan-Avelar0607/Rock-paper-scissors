function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3 ) + 1;
    if (numberChoice === 1) return "rock";
    if (numberChoice === 2) return "paper";
    if (numberChoice === 3) return "scissors";
}

function getHumanChoice() {
    while (true){
        const input = prompt('Rock, paper or scissors?');
        if (input === null) {
        alert("Please enter a choice");
        continue
        }
        const humanChoice = input.toLowerCase();
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            return humanChoice
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'paper':
                computerScore++;
                console.log("You lose! Paper beats rock.");
                break
            case 'scissors':
                humanScore++;
                console.log("You win! Rock beats scissors");
                break
        }
    } 
    else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'rock':
                humanScore++;
                console.log("You win! Paper beats rock.");
                break
            case 'scissors':
                computerScore++;
                console.log("You lose! Scissors beat paper");
                break
        }
    }
    else {
        switch (computerChoice) {
            case 'rock':
                computerScore++;
                console.log("You lose! Rock beats scissors.");
                break
            case 'paper':
                humanScore++;
                console.log("You win! Scissors beat paper");
                break
        }
    }

}

function playGame() {

    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
    }
    if (humanScore > computerScore) {
        console.log('Congratulations! You are the winner!');
    } else if (computerScore > humanScore){
        console.log('You lost.')
    } else {
        console.log("It's a tie.")
    }
}
playGame();