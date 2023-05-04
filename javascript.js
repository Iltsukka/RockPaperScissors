const options = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0
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
const newLine = document.createElement('p')
const results = document.createElement('div')
const score = document.createElement('p')

results.textContent = "The result of the game will be displayed here!"
score.textContent = ` ${playerScore} - ${computerScore}`
button1.textContent = "Rock"
button2.textContent = "Paper"
button3.textContent = "Scissors"

// forEach function to make code cleaner.
button1.addEventListener('click', function myButton1(e) {
    results.textContent = playRound("rock", getComputerChoice())
    score.textContent = ` ${playerScore} - ${computerScore}`
    if (playerScore >= 5 && computerScore >= 5 && playerScore===computerScore) {
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Game ends in a draw!`
        
        
    } else if (playerScore >=5 && computerScore <5){
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Player wins!`
        
        
    } else if (playerScore <5 && computerScore >=5){
        
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Computer wins!`
        
        
    }   
})
button2.addEventListener('click', function myButton2(e) {
    results.textContent = playRound("paper",getComputerChoice())
    score.textContent = ` ${playerScore} - ${computerScore}`
    if (playerScore >= 5 && computerScore >= 5 && playerScore===computerScore) {
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Game ends in a draw!`
        
    } else if (playerScore >=5 && computerScore <5){
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Player wins!`
        
    } else if (playerScore <5 && computerScore >=5){
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Computer wins!`
        
    } 
})
button3.addEventListener('click', function myButton3(e) {
    results.textContent = playRound("scissors",getComputerChoice())
    score.textContent = ` ${playerScore} - ${computerScore}`
    if (playerScore >= 5 && computerScore >= 5 && playerScore===computerScore) {
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Game ends in a draw!`
        
        
    } else if (playerScore >=5 && computerScore <5){
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Player wins!`
        
        
    } else if (playerScore <5 && computerScore >=5){
        score.textContent = `The game is now over. Final score: ${playerScore} - ${computerScore}. Computer wins!`
        
        
    }
})




document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(button3)
document.body.appendChild(newLine)
document.body.appendChild(results)
document.body.appendChild(score)



