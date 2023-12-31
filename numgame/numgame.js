const guess = document.getElementById("guess");
const report = document.getElementById("report");
const background = document.getElementById("background")
const totalGuesses = document.getElementById("totalGuesses")

const MAXNUM = 100;
let secret;
let numGuess = 0;

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * MAXNUM + 1);
// report.innerHTML = secret;
}

function makeGuess() {
    let myGuess = guess.value;

    if (myGuess < secret) {
        numGuess = numGuess + 1;
        report.innerHTML += `<br/>[${myGuess}] too small`;
        totalGuesses.innerHTML = `Guesses: ${numGuess}`;
        // console.log(`myGuess = ${myGuess}`)
    } else if (myGuess > secret) {
        numGuess = numGuess + 1;
        report.innerHTML += `<br/>[${myGuess}] too large`;
        totalGuesses.innerHTML = `Guesses: ${numGuess}`;
    } else {
        numGuess = numGuess + 1;
        report.innerHTML += `<br/>[${myGuess}] is correct! :)`;
        totalGuesses.innerHTML = `Guesses: ${numGuess}`;
        // you win styling
        
        background.style.color = "yellow";
        background.style.backgroundColor = "green";
    }
}

function reset() {
    background.style.color = "black";
    background.style.backgroundColor = "aquamarine";
    report.innerHTML = `Guess History`;
    numGuess = 0
    totalGuesses.innerHTML = `Guesses: ${numGuess}`
    loadGame();
}