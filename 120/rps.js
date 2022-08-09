/**
 * Players picks rps and shows to each others to check who won. There are 2 types of player, human and computer, human picks rps by input. computer picks randomly. Winner is displayed.
 */
const redline = require("readline-sync");

function makePlayer(isHuman = true) {
  return {
    isHuman: isHuman,

    makeMove() {
      if (isHuman) {
        let pick = redline.question(" Pick rock papae or scissors r,p  or s : ")
        while (!(/^r$|^p$|^s$/.test(pick))) {
          pick = redline.question(" you have to pick one of r,p,s");
        }
        return pick;
      } else {
        let pick = ['r', 'p', 's'];
        randIdx = Math.floor(Math.random() * 10 / 3);
        return pick[randIdx];
      }
    }
  }
}

function checkWin(pl1, pl2) {
  if ((pl1 === 'r' && pl2 === 's') || (pl1 === 's' && pl2 === 'p') || (pl1 === 'p' && pl2 === 'r')) {
    console.log(`player 1 picked ${pl1} and player 2 picked ${pl2}`);
    console.log("player one won !");
  } else if ((pl1 === 's' && pl2 === 'r') || (pl1 === 'p' && pl2 === 's') || (pl1 === 'r' && pl2 === 'p')) {
    console.log(`player 1 picked ${pl1} and player 2 picked ${pl2}`);
    console.log("player two won !");
  } else {
    console.log(`player 1 picked ${pl1} and player 2 picked ${pl2}`);
    console.log("draw")
  }
}

let humanPlayer = makePlayer();
let computerPLayer = makePlayer(isHuman = false);
checkWin(humanPlayer.makeMove(), computerPLayer.makeMove());

