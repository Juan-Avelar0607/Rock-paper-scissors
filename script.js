function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3 ) + 1;
    if (numberChoice === 1) return "rock";
    if (numberChoice === 2) return "paper";
    if (numberChoice === 3) return "scissors";
}
console.log(getComputerChoice())