function computerPlay(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
    
}

const choices = ['Rock', 'Paper', 'Scissors'];
const result = computerPlay(choices);

function capitalize(str){
    const lower = str.toLowerCase(str);
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function oneRound(computerSelection, playerSelection) {
    const rock = 'Rock'
    const paper = 'Paper'
    const scissors = 'Scissors'


        if (computerSelection === playerSelection) {
            console.log('Draw');
        }
        else if (computerSelection === paper && playerSelection === rock){ 
            console.log(`You Lose! Computer played ${computerSelection} and you played ${playerSelection}`);
        }
        else if (computerSelection === rock && playerSelection === scissors){
            console.log(`You Lose! Computer played ${computerSelection} and you played ${playerSelection}`);
        }
        else if (computerSelection === scissors && playerSelection === paper){
            console.log(`You Lose! Computer played ${computerSelection} and you played ${playerSelection}`);
        }
        else{
            console.log(`You won! You played ${playerSelection} and computer played ${computerSelection}`)
    }
}

const computerSelection = result;
const playerSelection = capitalize('rOck');

console.log(result);
console.log(playerSelection);

oneRound(computerSelection, playerSelection)