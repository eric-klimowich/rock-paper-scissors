/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.getElementById('result-display')

/*-------------------------------- Functions --------------------------------*/

const getPlayerChoice = (evt) => {
    playerChoice = evt.target.id
    console.log('player choice: ', playerChoice)
}

const getComputerChoice = () => {
    const randomIndex = (Math.floor((Math.random() * choices.length)))
    computerChoice = choices[randomIndex]
    console.log('computer choice: ', computerChoice)
}

const compare = () => {
    if (playerChoice === computerChoice) {
        msg = 'You tied!'
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
        msg = 'You win!'
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
        msg = 'You win!'
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
        msg = 'Congrats! You win!';
    } else {
        msg = 'You lose!'
    }
}

const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}, ${msg}`
}

const resetGame = () => {
    playerChoice = null;
    computerChoice = null;
    msg = ''
    resultDisplayEl.textContent = ''
}

const play = function(evt) {
    getPlayerChoice(evt)
    getComputerChoice()
    compare()
    render()
}

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('main').addEventListener('click', play)

// document.getElementById('rock').addEventListener('click', play);
// document.getElementById('paper').addEventListener('click', play);
// document.getElementById('scissors').addEventListener('click', play);

document.getElementById('reset-button').addEventListener('click', resetGame);

// document.querySelectorAll('button').forEach(function(button) {
//     button.addEventListener('click', play)
// })