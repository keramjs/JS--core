// deck start  - 52cards 4 suits hearts, daimonds clubs and spades
// goal get as close to 21 without going over
// dealer and player initialy dealt 2 cards each
// player can see only one of dealer card

// card values 2-10 face values ; jack, queen, king 10; ace 1 or 11
// if cards on hand + ace (11) is greater than 21 then value of ace is 1
// if there is multiple aces programm has to deal with that

//player go first and can hit or stay 
//dealer hits until total on his hand is at least  17
//when both playser stay we comparing cards highest value wins

/**
 * inputs - player decision
 * outputs - printing game status, printing who won
 * explicit rules - over 21 points bust, value of ace dependent of value other cards
 *  bust - lost, dealer hits up to 17, both player stay - checking values of cards,
 * 
 * datastructures - for card deck objects , objects for players
 * 
 * create deck of card in random order
 *      - create function for creating deck of card
 * 
 * give 2 cards to dealer and player 
 * print on screen one of dealer card and next hidden
 * print player card
 *      -create function for printing both players hand
 * player input hit or stay
 *      - function for check input validation letter 'h' or 's'
 * check for player bust
 *      if bust dealer wins
 * if player hit
 *      update table (print both player hands)
 * check if dealer have more than 17 in cards value
 *      if not dealer hits if it has 17 stays
 * check for dealer bust
 *      if bust player wins
 * if dealer hit
 *      update table (print both player hands)
 * check for both players stay
 *      if yes compare who won
 *      in no repeat player or dealer if they didn't stay
 */

function createDeck(){
    let cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let suits = ['h','d','c','s'];
    let deck = {};
    for (let card of cards){
       for(let suit of suits){
            let name = card+suit;
            if (card === "A"){
                deck[name] = 11;
            }
            else if(card === "J" || card==="Q" || card === "K"){
                deck[name]= 10;
            }
            if (Number(card) >= 2 && Number(card)<=10){
                deck[name] = Number(card);
            }
       }
    };
    return deck;
}

function randomizeDeck(deck){
    let keys = [];
    for(let key in deck){
        keys.push(key)
    }
    randKeys = keys.sort((a,b)=> 0.5 - Math.random());
    return randKeys;
}

function printBoard(player, dealer){
    let playerHand = []= Object.keys(player);
    let dealerHand = [] = Object.keys(dealer); 

    for(let i = 0; i < dealerHand.length; i++){
        if (i > 0){
            dealerHand[i] = 'XX';
        }
    } 
    
    console.log(`player cards ${playerHand}, value is ${playerValue(player)}`);
    console.log(`dealer cards ${dealer}`);
    return
}
function handValue(player){
    playerValue = 0;
    for(let key in player){
        playerHand.push(key)
        if((playerValue + 11 > 21) && (key==="Ah"||key === "Ad"||key === "Ac"|| key ==="As" )){ // ace was received
            playerValue += 1;
        }else if(key==="Ah"||key === "Ad"||key === "Ac"|| key ==="As"){
            playerValue += 11 
        }else{
            playerValue = player.key;
        }
    }
    return playerValue
}

function dealCard(){}

let deck = createDeck();
let deckKeys = randomizeDeck(deck);
let player ={};
let dealer = {};
