function rollDice() {
    let goldCoins = 0;
    for(let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('you rolled ' + roll);

        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }

        // this is the case where roll is either 2 or 3 and you don't lose but don't get anything
        else if (roll < 4) {
            continue;
        }
        else if (roll === 4 && goldCoins > 0) {
            goldCoins--;
            alert("you rolled " + roll + " thats -1 gold coins!");
        }


        // can assume that roll will be 5 or 6 which is winning case 
        else {
            alert("Congratulations, you win " + roll + " gold coins!");
            goldCoins += roll;
        }
        alert("So for you have " + goldCoins + " gold coins");
    }
    alert("You have won " + goldCoins + " gold coins...");
}