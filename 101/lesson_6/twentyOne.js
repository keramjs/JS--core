
function createDeck() {
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['h', 'd', 'c', 's'];
    let deck = {};
    for (let card of cards) {
        for (let suit of suits) {
            let name = card + suit;
            if (card === "A") {
                deck[name] = 11;
            }
            else if (card === "J" || card === "Q" || card === "K") {
                deck[name] = 10;
            }
            if (Number(card) >= 2 && Number(card) <= 10) {
                deck[name] = Number(card);
            }
        }
    };
    return deck;
}
function randomizeDeck(deck) {
    let keys = [];
    for (let key in deck) {
        keys.push(key)
    }
    randKeys = keys.sort((a, b) => 0.5 - Math.random());
    return randKeys;
}
function printBoard(pl, dl) {
    let playerHand = [] = Object.keys(pl);
    let dealerHand = [] = Object.keys(dl);
    for (let i = 0; i < dealerHand.length; i++) {
        if (i > 0) {
            dealerHand[i] = 'XX';
        }
    }
    console.log(`player cards ${playerHand}, value is ${handValue(pl)}`);
    console.log(`dealer cards ${dealerHand}`);
    return
}
function handValue(pl) {
    playerValue = 0;
    ace = 0;

    for (let key in pl) {
        if (key === "Ah" || key === "Ad" || key === "Ac" || key === "As") {
            ace += 1;
            continue;
        }
        playerValue += pl[key];
    }

    if ((playerValue + 11 > 21) && ace.length !== 0) {
        playerValue += 1;
    } else if (ace.length !== 0) {
        for (let i = 1; i <= ace; i++) {
            playerValue += 11
        }
    }
    return playerValue;
}
function dealCard(pl, keys) {
    if (keys.length === 0) {
        console.log('end of deck');
        return;
    }
    card = deckKeys.pop();
    pl[card] = deck[card];
}
function checkWin(pl) {
    if (handValue(pl) > 21) {
        console.log("BUST !!!");
        return true
    } else {
        return false
    }
}
function validatePlayerMove(entry) {
    return entry.test(/h|s/)
}
function playerMove() {
    let playerChoice = readline.question("Hit or stay ? type h or s")
    while (!validatePlayerMove(playerChoice))
        console.log("Wrong choice, try again !")
    playerChoice = readline.question("Hit or stay ? type h or s")
    if (playerChoice = "h") {
        return false;
    } else {
        return true;
    }
}
let readline = require("readline-sync");
let deck = createDeck();
let deckKeys = randomizeDeck(deck);
let player = {};
let dealer = {};
let playerStay = false;
let dealerStay = false;

dealCard(player, deckKeys);
dealCard(player, deckKeys);
dealCard(dealer, deckKeys);
dealCard(dealer, deckKeys);
printBoard(player, dealer);

while (true) {
    if (!playerMove()) {
        dealCard(player);
        if (checkWin(player)) break;
    }
    // TODO: write f computer move
    // TODO: check for win if both player stay
}



