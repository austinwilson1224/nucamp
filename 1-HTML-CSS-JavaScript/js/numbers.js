function runGame() {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    // guessing time
    do {
        guessString = prompt("Enter a number:");
        numTries++;
        guessNumber = +guessString;

        correct = checkGuess(guessNumber, number);

    } while(!correct);
    alert("the number is " + number + "\nyou guessed" + guessNumber + "/nnumber of tries:" + numTries);
}

function checkGuess(guessNumber, target) {
    let correct = false;
    if (isNaN(guessNumber)) {
        alert(guessNumber + " is not a number...");
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("this number is not betwwen 1 and 100");
    } else if (guessNumber > target) {
        alert("your guess is larger than the actual number");
    } else if (guessNumber < target) {
        alert("your guess is smaller than the actual number");
    } else {
        correct = true;
    }
    return correct;
}