const options = ["Rock", "Paper", "Scissors"]
let playerSelection = prompt("Choose rock, paper or scissors.").toLowerCase()
const computerSelection = getComputerChoice()


function getComputerChoice() {
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock."
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors."
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper."
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock."
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper."
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors."
    } else if (playerSelection === computerSelection.toLowerCase()) {
        return "It is a tie!"
    } else {
        return "Please type a valid input"
    }
        
}

console.log(playRound(playerSelection, computerSelection))