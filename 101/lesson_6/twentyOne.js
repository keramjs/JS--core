const { Console } = require("console");
let readline = require("readline-sync");
let deck;
let deckKeys;
let player;
let dealer;
let playAgain = true;

function createDeck() {
  let cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let suits = ["h", "d", "c", "s"];
  let deck = {};
  for (let card of cards) {
    for (let suit of suits) {
      let name = card + suit;
      if (card === "A") {
        deck[name] = 11;
      } else if (card === "J" || card === "Q" || card === "K") {
        deck[name] = 10;
      }
      if (Number(card) >= 2 && Number(card) <= 10) {
        deck[name] = Number(card);
      }
    }
  }
  return deck;
}
function randomizeDeck(deck) {
  let keys = [];
  for (let key in deck) {
    keys.push(key);
  }
  randKeys = keys.sort((a, b) => 0.5 - Math.random());
  return randKeys;
}
function printBoard(pl, dl) {
  let playerHand = ([] = Object.keys(pl));
  let dealerHand = ([] = Object.keys(dl));
  for (let i = 0; i < dealerHand.length; i++) {
    if (i > 0) {
      dealerHand[i] = "XX";
    }
  }
  console.log(`player cards ${playerHand}, value is ${handValue(pl)}`);
  console.log(`dealer cards ${dealerHand}`);
  return;
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

  if (playerValue + 11 > 21 && ace > 0) {
    playerValue += 1;
  } else if (ace > 0) {
    for (let i = 0; i < ace; i++) {
      playerValue += 11;
    }
  }
  return playerValue;
}
function dealCard(pl, keys) {
  if (keys.length === 0) {
    console.log("end of deck");
    return;
  }
  card = deckKeys.pop();
  pl[card] = deck[card];
}
function isBust(pl) {
  if (handValue(pl) > 21) {
    return true;
  } else {
    return false;
  }
}
function validatePlayerMove(entry) {
  return /^h$|^s$/.test(entry);
}
function isPlayerStay() {
  let playerChoice = readline.question("Hit or stay ? type h or s  ");
  while (!validatePlayerMove(playerChoice)) {
    console.log("Wrong choice, try again !");
    playerChoice = readline.question("Hit or stay ? type h or s  ");
  }
  if (playerChoice === "h") {
    return false;
  } else {
    return true;
  }
}
function whoWon() {
  if (isBust(player)) {
    console.log("Dealer won");
    console.log(
      `player cards are: ${Object.keys(
        player
      )}, dealer cards are: ${Object.keys(dealer)}`
    );
    return;
  } else if (isBust(dealer)) {
    console.log("Player won");
    console.log(
      `player cards are: ${Object.keys(
        player
      )}, dealer cards are: ${Object.keys(dealer)}`
    );
    return;
  }
  if (handValue(player) > handValue(dealer)) {
    console.log("player won !");
    console.log(
      `player cards are: ${Object.keys(
        player
      )}, dealer cards are: ${Object.keys(dealer)}`
    );
    return;
  } else if (handValue(player) < handValue(dealer)) {
    console.log("dealer won");
    console.log(
      `player cards are: ${Object.keys(
        player
      )}, dealer cards are: ${Object.keys(dealer)}`
    );
    return;
  } else {
    console.log("DRAW");
    console.log(
      `player cards are: ${Object.keys(
        player
      )}, dealer cards are: ${Object.keys(dealer)}`
    );
    return;
  }
}
function isPlayAgain() {
  let decision = readline.question("Play again ? Type y for yes or  n no  ");
  while (!(/^y$|^n$/.test(decision))) {
    console.log("Read again and type if you want play again");
    decision = readline.question("Play again ? Type y for yes or  n no  ");
  }
  if (decision === "y") {
    return true;
  } else {
    return false;
  }
}

while (playAgain) {
  console.clear();
  deck = createDeck();
  deckKeys = randomizeDeck(deck);
  player = {};
  dealer = {};
  dealCard(player, deckKeys);
  dealCard(player, deckKeys);
  dealCard(dealer, deckKeys);
  dealCard(dealer, deckKeys);
  printBoard(player, dealer);

  while (!isPlayerStay()) {
    dealCard(player, deckKeys);
    console.log("card dealed for player");
    printBoard(player, dealer);
    if (isBust(player)) break;
  }
  if (isBust(player)){
    console.log("Player is busted, Dealer WON !")
    playAgain = isPlayAgain();
    continue;
  }

  while (handValue(dealer) < 17) {
    dealCard(dealer, deckKeys);
    console.log("card dealed for dealer");
    if (isBust(dealer)) break;
  }
  if (isBust(dealer)){
    console.log("dealer is busted, player WON !")
    playAgain = isPlayAgain();
  }
  whoWon();
  playAgain = isPlayAgain();
}
