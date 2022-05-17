const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayUserChoice(userChoice)
    generateComputerChoice()
    getResult()
}))

function displayUserChoice(userChoice) {
    switch (userChoice) {
        case 'rock':
            userChoiceDisplay.innerHTML = 'kamień'
            break;
        case 'paper':
            userChoiceDisplay.innerHTML = 'papier'
            break;
        case 'scissors':
            userChoiceDisplay.innerHTML = 'nożyczki'
            break;
        default:
            userChoiceDisplay.innerHTML = 'wyskoczył błąd, sumimasen'
            break;
    }
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock'
            computerChoiceDisplay.src = 'rock.jpg'
            break;
        case 1:
            computerChoice = 'paper'
            computerChoiceDisplay.src = 'paper.webp'
            break;
        case 2:
            computerChoice = 'scissors'
            computerChoiceDisplay.src = 'scissors.webp'
            break;
        default:
            computerChoice = 'wyskoczył błąd, sumimasen'
            break;
    }
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'mamy remis :)'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'ojej przegrałam ;('
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'ojej przegrałam ;('
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'ojej przegrałam ;('
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'wygrałam z tobą :)))))'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'wygrałam z tobą :)))))'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'wygrałam z tobą :)))))'
    }
    resultDisplay.innerHTML = result
}