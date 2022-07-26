let board = [];
let currentPlayer = "O";
const readline = require("readline-sync");
let score = 0;


function oppositePlayer(currentPlayer){
    if (currentPlayer === 'X'){
      return "O";
    }else{
      return "X";
    }
  
  }
function checkMoveVal(board, currentMove, currentPlayer){
    lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    moveLines = lines.filter(elements => elements.some(element => element === currentMove))
    
    moveValue = 0;
  
    moveLines.forEach(line =>{
      let lineValue = 0;
  
      for (let i of line){
        if (board[i] === currentPlayer){
          lineValue += 2;
        }else if(board[i]=== oppositePlayer(currentPlayer)){
          lineValue -=2;
        }else{
          lineValue += 1; // + moveLines.length +1 za kazda pusta linje
        }
      }
      
      if (lineValue > moveValue) moveValue = lineValue
    })
  
    return moveValue
  }  
function evaluateWin(board, currentPlayer){
  winLines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
  if (lines.filter(elements => elements.every(element => element === currentPlayer))){
    return 1;
  }else if (lines.filter(elements => elements.every(element => element === oppositePlayer(currentPlayer))){
    return -1;
  }else if(!(board.some(element => element === " "))){
    return 0;
  }else{
    return 2;
  }

}
function minMax(board, depth, maxPlayer){

  if (depth === 0 || (evaluateWin(board, currentPlayer) !== 1 )  || (evaluateWin(board, currentPlayer) !== -1)  || (evaluateWin(board, currentPlayer) !==0)){
    return  evaluateWin(board, currentPlayer);
  }

  if (maxPlayer){
    let maxEval = -Infinity;
    board.forEach(child => {
      if (child == " "){
        child = "X"
        let evaluation = minMax(child, depth - 1, false);
        child = "O"
        maxEval = max( maxEval , evaluation)
      }
    })

    return maxEval

  }else{
    let minEval = Infinity;
    board.forEach(child => {
      if (child == " "){
        child = "O"
        let evaluation = minMax(child, depth - 1, true)
        child = " "
        maxEval = min( minEval , evaluation)
      }
    })
    return minEval
  }


}
function bestMove(){
  let bestScore = -Infinity;
  let move;
  for(let i of board){
  if (i == " "){
    i = currentPlayer; 
    let score = minMax(board, 9, false ); // checking hypotetical move value
    i = " " // undoing board change
    if (score > bestScore){
      bestScore = score;
      move = i;
    }
  }
}
return move
}
function printBoard(board){
  console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
  console.log(" - | - | - ");
  console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
  console.log(" - | - | - ");
  console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
}
function evaluateBoardForPlayer(board, currentPlayer) {
    let bestMove = 0;
    let idxOfBestMove;
    for (let i = 0; i < 9; i++) {
      if (board[i] === " ") {
        let bm = checkMoveVal(board, i, currentPlayer);
        console.log(bm)
        if (bm > bestMove) {
          bestMove = bm;
          idxOfBestMove = i;
        }
      }
    }
    return idxOfBestMove;
  }
function playerInput(board) {
    let square;
  
    while (true) {
      console.log(`Your are placing your mark `);
      square = readline.question("Pick square 0-8-> ");
      if (!/^\d$/.test(square)) {
        console.log("Enter number between 0 and 8");
        continue;
      } else {
        square = Number(square);
      }
  
      if (square < 0 && square > 8) {
        console.log("Number out of range - Enter number between 0 and 8");
        continue;
      }
      if (!(board[square] === " ")) {
        console.log("This square is already taken , pick again");
        continue;
      }
      break;
    }
    return  square;
}
function resetBoard() {
  for (i = 0; i < 9; i++) {
    board[i] = " ";
  }
}
resetBoard();
while (true){
currentPlayer = oppositePlayer(currentPlayer)
board[playerInput(board)] = currentPlayer
printBoard(board);
if(evaluateWin(board) !== 2) break;

currentPlayer = oppositePlayer(currentPlayer) // ai turn
let aiMove = bestMove();
board[aiMove] = currentPlayer;
printBoard(board);
if(evaluateWin(board) !== 2) break;

}
