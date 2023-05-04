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

const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')

button1.textContent = "Rock"
button2.textContent = "Paper"
button3.textContent = "Scissors"

button1.addEventListener('click', function() {
    console.log(playRound("rock", getComputerChoice()))
})
button2.addEventListener('click', function() {
    console.log(playRound("paper",getComputerChoice()))
})
button3.addEventListener('click', function() {
    console.log(playRound("scissors",getComputerChoice()))
})

document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(button3)


