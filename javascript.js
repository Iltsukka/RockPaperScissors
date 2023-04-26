const options = ["Rock", "Paper", "Scissors"]
let playerScore
let computerScore
let totalNumberOfGames

function playerSelection() {
    let playerSelection = prompt("Choose rock, paper or scissors.").toLowerCase()
    return playerSelection
}




function getComputerChoice() {
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice
}



function playRound(playerSelection, computerSelection) {
    totalNumberOfGames += 1
    if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore += 1
        return "You Lose! Paper beats Rock."
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore += 1
        return "You win! Rock beats Scissors."
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore += 1
        return "You lose! Scissors beats Paper."
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore += 1
        return "You win! Paper beats Rock."
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore += 1
        return "You win! Scissors beats Paper."
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore += 1
        return "You lose! Rock beats Scissors."
    } else if (playerSelection === computerSelection.toLowerCase()) {
        playerScore += 0.5
        computerScore += 0.5
        return "It is a tie!"
    } else {
        totalNumberOfGames -= 1
        return "Please type a valid input"
    }
        
}



function game() {
    playerScore = 0
    computerScore = 0
    totalNumberOfGames = 0
    while (totalNumberOfGames < 5) {
        console.log(playRound(playerSelection(), getComputerChoice()))
    }

    console.log(`At the end of 5 difficult rounds, the total score is ${playerScore} - ${computerScore}. Thank you for playing!` )
}

game()
