
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function computerPlay() {
   let randomNum = Math.floor(Math.random() * 3)
   switch (randomNum) {
       case 0:
           return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
   }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        roundWinner = 'player';
    } if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++;
        roundWinner = 'computer';
    }
    let score = 'the computer score is ' + computerScore;
    return roundWinner, score;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let compChoice = computerPlay();
        let playerChoice = prompt('enter weapon: ')
        let play = playRound(playerChoice, compChoice);
        console.log(play)
    }
}

game()