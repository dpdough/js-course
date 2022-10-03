const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = 'Draw';
const RESOULT_PLAYER_WINS = 'Player Won!';
const RESOULT_COMPUTER_WINS = 'Computer Won!';

const getPlayerSelction = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`You have entered an invalid value! We chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function() {
    const randomVlaue = Math.random();
    if (randomVlaue < 0.34) {
        return ROCK;
    } else if (randomVlaue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const add = (a,b) => a + b; shorter method to write a function 
// const add2 = function(a, b) { 
//     return a + b;
// };

const getWinner = (cChoice, pChoice) => {    // the arrow function anotehr way to write an annonomus function
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS || 
        cChoice === SCISSORS && pChoice === ROCK) {
        return RESOULT_PLAYER_WINS;
    } else {
        return RESOULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting');
    const playerSelection = getPlayerSelction();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    let message = `You picked ${playerSelection}, computer picked ${computerChoice} therefore you `;
    
    if (winner === RESULT_DRAW) {
        message = message + 'had a Draw!';
    } else if (winner === RESOULT_PLAYER_WINS) {
        message = message + 'Won!';
    } else {
        message = message + 'Lost!'
    }
    alert(message);
    gameIsRunning = false;
});




// const start = function() {
//     console.log('Game is starting');
// };

// const person = {
//     name: 'Damian',
//     greet: function greet() {
//         console.log('Hello There!');
//     }
// };

// person.greet();
// console.log(person);
