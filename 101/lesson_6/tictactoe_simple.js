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

  let board = [];
  let currentPlayer = "X";
  
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
function resetFields() {
  for (i = 0; i < 9; i++) {
    board[i] = " ";
  }
}