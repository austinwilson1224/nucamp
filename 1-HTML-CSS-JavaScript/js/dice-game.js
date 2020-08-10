function rollDice() {
    let goldCoins = 0;
    for(let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('you rolled ' + roll);

        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }

        else if (roll === 4) {
            if (goldCoins > 0) {
                goldCoins--;
                alert("you rolled " + roll + " thats -1 gold coins!");
                continue;
            }
            else continue;
        }

        else if (roll < 4) {
            continue;
        }

        else {
            alert("Congratulations, you win " + roll + " gold coins!");
            goldCoins += roll;
        }
        alert("So for you have " + goldCoins + " gold coins");
    }
    alert("You have won " + goldCoins + " gold coins...");
}