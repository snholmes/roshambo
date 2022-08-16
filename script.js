var roundNumber = 1;
var computerWins = 0;
var playerWins = 0;

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

    if (!optionSelected) {
        document.querySelector(".roundNumber").innerHTML = "Please make a selection."
    } else {
        determineWinner(playerSelection);
        if (roundNumber > 5) {
            if (computerWins > playerWins) {
                document.querySelector(".roundNumber").innerHTML = "Computer wins the game!";
                document.getElementById("goButton").disabled = true;
            } else if (playerWins > computerWins) {
                document.querySelector(".roundNumber").innerHTML = "You win the game!";
                document.getElementById("goButton").disabled = true;
            }
        }
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

    document.querySelector(".roundNumber").innerHTML = `Round ${roundNumber}. Make a selection!`;
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
    document.getElementById("goButton").disabled = false;
    document.querySelector(".roundNumber").innerHTML = 'Round 1. Make a selection!';
    document.querySelector(".roundResult").innerHTML = "";
}