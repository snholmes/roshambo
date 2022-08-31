var roundNumber = 1;
var computerWins = 0;
var playerWins = 0;
const options = document.querySelectorAll('input');
const btn = document.querySelector('button');

btn.addEventListener('click', startOver);
window.onload = startOver;

function newRound() {
    
    var playerSelection;
    var options = document.getElementsByName('roshamboOptions');
    let optionSelected = false;

    for(i = 0; i < options.length; i++) {
        if(options[i].checked) {
            playerSelection = options[i].value;
            optionSelected = true;
        } 
    }

    determineWinner(playerSelection);

        if (roundNumber > 5) {
            if (computerWins > playerWins) {
                document.querySelector(".roundNumber").textContent = "Computer wins the game!";

            } else if (playerWins > computerWins) {
                document.querySelector(".roundNumber").textContent = "You win the game!";
            }

            disableGame();
        }
}

function determineWinner(playerSelection) {
    var computerSelection = getComputerChoice();
    
    switch(true) {
    case (playerSelection == "rock" && computerSelection == "paper"):
    case (playerSelection == "paper" && computerSelection == "scissors"):
    case (playerSelection == "scissors" && computerSelection == "rock"):
        computerWins++;
        roundNumber++;
        break;
    case (playerSelection == "rock" && computerSelection == "scissors"):
    case (playerSelection == "paper" && computerSelection =="rock"):
    case (playerSelection == "scissors" && computerSelection == "paper"):
        playerWins++;
        roundNumber++;
        break;
    }

    document.querySelector(".roundNumber").innerHTML= `Round ${roundNumber}. Make a selection!`;
    document.querySelector(".roundResult").innerHTML = `Computer: ${computerSelection} <br> <br> Your score: ${playerWins} <br> Computer score: ${computerWins}`;
}

function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        choice = "rock";
    } else if (choice == 2) {
        choice = "paper";
    } else if (choice == 3) {
        choice = "scissors";
    }
    return choice;
}

function startOver() {
    roundNumber = 1;
    computerWins = 0;
    playerWins = 0;
    options.forEach((input) => {
        input.addEventListener('click', newRound);
    });
    document.querySelector(".roundNumber").textContent = 'Round 1. Make a selection!';
    document.querySelector(".roundResult").textContent = "";
}

function disableGame() {
    options.forEach((input) => {
        input.removeEventListener('click', newRound);
    });
}