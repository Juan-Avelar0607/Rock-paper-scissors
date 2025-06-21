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
