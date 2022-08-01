
let board = [];
let currentPlayer = "O";
const readline = require("readline-sync");

function countAvalibleMoves(board) {
  return board.reduce((acc, element) => {
    if (element === " ") {
      acc += 1;
      return acc;
    } else {
      return acc;
    }
  }, 0);
}
function oppositePlayer(currentPlayer) {
  if (currentPlayer === "X") {
    return "O";
  } else {
    return "X";
  }
}
function evaluateWin(board) {
  winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (
    winLines.some((element) => element.every((sign) => board[sign] === "X"))
  ) {
    return 1;
  } else if (
    winLines.some((element) => element.every((sign) => board[sign] === "O"))
  ) {
    return -1;
  } else {
    return 0;
  }
}
function checkWin(board) {
  winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (
    winLines.some((element) => element.every((sign) => board[sign] === "X"))
  ) {
    return true;
  } else if (
    winLines.some((element) => element.every((sign) => board[sign] === "O"))
  ) {
    return true;
  } else if (!board.includes(" ")) {
    return true;
  } else {
    return false;
  }
}
function minMax(board, depth, maxPlayer) {
  if (depth === 0 || checkWin(board)) {
    return evaluateWin(board);
  }

  if (maxPlayer) {
    let maxEval = -Infinity;
    for (let position = 0; position < board.length; position++) {
      if (board[position] === " ") {
        board[position] = "X";
        let evaluation = minMax(board, depth - 1, false);
        board[position] = " ";
        maxEval = Math.max(maxEval, evaluation);
        // alpha = Math.max(alpha, evaluation);
        // if (betha <= alpha) {
        //   break;
        // }
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let position = 0; position < board.length; position++) {
      if (board[position] === " ") {
        board[position] = "O";
        let evaluation = minMax(board, depth - 1, true);
        board[position] = " ";
        minEval = Math.min(minEval, evaluation);
        // betha = Math.min(betha, evaluation);
        // if (betha <= alpha) {
        //   break;
        // }
      }
    }
    return minEval;
  }
}
function pickBestMove(board, currentPlayer) {
  let bestMove = 0;
  let bestScore = 100;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === " ") {
      board[i] = currentPlayer;
      score = minMax(board, 20, true);
      board[i] = " ";
      if (score < bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}
function printBoard(board) {
  console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
  console.log(" - | - | - ");
  console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
  console.log(" - | - | - ");
  console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
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
  return square;
}
function resetBoard() {
  for (i = 0; i < 9; i++) {
    board[i] = " ";
  }
}
function whoWon() {
  let win = evaluateWin(board);
  if (win === 1) {
    console.log("X won");
  } else if (win === -1) {
    console.log("O won");
  } else {
    console.log("draw");
  }
}

resetBoard();
printBoard(board);
while (true) {
  currentPlayer = oppositePlayer(currentPlayer);
  console.log(`${currentPlayer} move`);
  board[playerInput(board)] = currentPlayer;
  printBoard(board);
  if (checkWin(board)) {
    whoWon();
    break;
  }
  currentPlayer = oppositePlayer(currentPlayer);
  console.log(`${currentPlayer} move`);
  console.log(pickBestMove(board, currentPlayer))
  board[pickBestMove(board, currentPlayer)] = currentPlayer;
  printBoard(board);
  if (checkWin(board)) {
    whoWon();
    break;
  }
}
