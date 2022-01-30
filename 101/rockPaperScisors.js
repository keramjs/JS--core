
const readline = require('readline-sync');
let playAgain = true;
let playerChoice
let computerChoice
let welcomeMsg = "Welcome to amazing rock paper scisors game !";
let goodbyeMsg = "Thank you for playing";
let rockPaperScissors = ['rock', 'paper', 'scissors'];

function validateInput(choice) {
    if (choice === 'playerMove') {
        while (true) {
            let choice = readline.question('Pick rock by typing 1; scisors 2, paper 3 ')
            if ([1, 2, 3].includes(Number(choice))) {
                playerChoice = Number(choice);
                console.log(`You pick ${rockPaperScissors[Number(choice)-1]}`);
                break;
            } else {
                console.log("You can type only 1 or 2 or 3")
            }
        }
    } else if (choice === 'playAgain') {
        while (true) {
            let choice = readline.question('Do you want to play again y/n ? ')
            if (/^y(?!.)|^n(?!.)/.test(choice)) {
                if (choice === 'n') {
                    playAgain = false;
                    break;
                } else {
                    break;
                }
            } else {
                console.log("You have no choice but type y or n")
            }
        }

    }
}

function computerMove() {
    computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(`Computer pick ${rockPaperScissors[computerChoice - 1]}`)
}

function checkWin() {
    if ((playerChoice === 1 && computerMove === 3) || (playerChoice === 2 && computerChoice === 1) || (playerChoice === 3 && computerChoice === 2)) {
        console.log("Player won !");
    } else if (playerChoice === computerChoice) {
        console.log("Draw");
    } else {
        console.log("Computer won !")
    }
}
console.log(welcomeMsg);
while (playAgain) {
    validateInput('playerMove');
    computerMove();
    checkWin();
    validateInput('playAgain');
}
console.log(goodbyeMsg)
