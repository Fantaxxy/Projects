// create secretNumber
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// alert(guess);

// check guess
if (guess === secretNumber) {
    alert("B---- You Guessed It!");
}
// other wise check if higher
else if (guess > secretNumber) {
    alert("You high af...");
}
// otherwise check if lower
else {
    alert("You low bro...");
}