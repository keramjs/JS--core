/*
- wiadomosc powitalna
- wyswietlenie planszy
- ruch pierwszego gracza
  - gracz wybiera field oraz square
    - o ile field  nie jest zajete 
      - wtedy kiedy jest wygrane - lub zremisowane - w arrayu nie ma markera ' '
- sprawdzenie wygranej
- aktualizacja planszy
- ruch drugiego gracza
- sprawdzenie wygranej
- aktualizacja planszy

*/
const readline = require("readline-sync");
const playerOneMarker = "X";
const playerTworMArker = "O";

let fields = [[1], [2], [3], [4], [], [], [], [], []];

function welcomeMessage() {
  console.log("Welcome to ultimate tic tac toe");
  console.log("First you pick field then squere where you put your mark.");
  console.log("Your mark marks field that your oponent makes mark.");
  console.log(
    "If Field is won or full you can pick different field to put your mark."
  );
}

function playerInput(fieldPick = true, field, playerMarker) {
  let fld = field;
  let square;

  if (fieldPick) {
    while (true) {
      fld = readline.question("Pick field 0-8-> ");

      if (!(/^\d$/.test(fld))) {
        console.log("Enter number between 0 and 8");
        continue;
      } else {
        fld = Number(fld);
      }

      if (fld < 0 || fld > 8) {
        console.log("Number out of range - Enter number between 0 and 8");
        continue;
      }

      if (!(fields[fld].some((element) => element === " "))) {
        console.log("This field is already taken , pick again");
        continue;
      }
      break;
    }
  }

  while (true) {
    square = readline.question("Pick square 0-8-> ");
    if (!(/^\d$/.test(square))) {
      console.log("Enter number between 0 and 8");
      continue;
    } else {
      square = Number(square)
    }

    if (square < 0 && square > 8) {
      console.log("Number out of range - Enter number between 0 and 8");
      continue;
    }
    if (!(fields[fld][square] === " ")) {
      console.log("This square is already taken , pick again");
      continue;
    }
    break;
  }
  console.log(fields[fld][square])
  fields[fld][square] = playerMarker;
}

function resetFields() {
  fields.forEach((element) => {
    for (i = 0; i < 9; i++) {
      element[i] = " ";
    }
  });
}
function fillField(field, marker) {
  for (i = 0; i < 9; i++) {
    fields[field][i] = marker;
  }
}

function printBoard(fields) {
  console.log(
    `  ${fields[0][0]}|${fields[0][1]}|${fields[0][2]}    |    ${fields[1][0]}|${fields[1][1]}|${fields[1][2]}    |    ${fields[2][0]}|${fields[2][1]}|${fields[2][2]}`
  );
  console.log("  -----    |    -----    |    -----");
  console.log(
    `  ${fields[0][3]}|${fields[0][4]}|${fields[0][5]}    |    ${fields[1][3]}|${fields[1][4]}|${fields[1][5]}    |    ${fields[2][3]}|${fields[2][4]}|${fields[2][5]}`
  );
  console.log("  -----    |    -----    |    -----");
  console.log(
    `  ${fields[0][6]}|${fields[0][7]}|${fields[0][8]}    |    ${fields[1][6]}|${fields[1][7]}|${fields[1][8]}    |    ${fields[2][6]}|${fields[2][7]}|${fields[2][8]}`
  );
  console.log("-------------------------------------");

  console.log(
    `  ${fields[3][0]}|${fields[3][1]}|${fields[3][2]}    |    ${fields[4][0]}|${fields[4][1]}|${fields[4][2]}    |    ${fields[5][0]}|${fields[5][1]}|${fields[5][2]}`
  );
  console.log("  -----    |    -----    |    -----");
  console.log(
    `  ${fields[3][3]}|${fields[3][4]}|${fields[3][5]}    |    ${fields[4][3]}|${fields[4][4]}|${fields[4][5]}    |    ${fields[5][3]}|${fields[5][4]}|${fields[5][5]}`
  );
  console.log("  -----    |    -----    |    -----");
  console.log(
    `  ${fields[3][6]}|${fields[3][7]}|${fields[3][8]}    |    ${fields[4][6]}|${fields[4][7]}|${fields[4][8]}    |    ${fields[5][6]}|${fields[5][7]}|${fields[5][8]}`
  );
  console.log("-------------------------------------");

  console.log(
    `  ${fields[6][0]}|${fields[6][1]}|${fields[6][2]}    |    ${fields[7][0]}|${fields[7][1]}|${fields[7][2]}    |    ${fields[8][0]}|${fields[8][1]}|${fields[8][2]}`
  );
  console.log("  -----    |    -----    |    -----");
  console.log(
    `  ${fields[6][3]}|${fields[6][4]}|${fields[6][5]}    |    ${fields[7][3]}|${fields[7][4]}|${fields[7][5]}    |    ${fields[8][3]}|${fields[8][4]}|${fields[8][5]}`
  );
  console.log("  -----    |    -----    |    -----");
  console.log(
    `  ${fields[6][6]}|${fields[6][7]}|${fields[6][8]}    |    ${fields[7][6]}|${fields[7][7]}|${fields[7][8]}    |    ${fields[8][6]}|${fields[8][7]}|${fields[8][8]}`
  );
}
function checkForWin(fields, marker) {
  /*
  winning combos
  012
  345
  678
  036
  147
  258
  048
  246
  */

  for (i = 0; i < 9; i++) {
    if (fields[i].every(el => el === marker || el === '-')) {
      continue // field already taken or draw continue with next field
    }

    if (fields[i][0] === marker && fields[i][1] === marker && fields[i][2] === marker ||
      fields[i][3] === marker && fields[i][4] === marker && fields[i][5] === marker ||
      fields[i][6] === marker && fields[i][7] === marker && fields[i][8] === marker ||
      fields[i][0] === marker && fields[i][3] === marker && fields[i][6] === marker ||
      fields[i][1] === marker && fields[i][4] === marker && fields[i][7] === marker ||
      fields[i][2] === marker && fields[i][5] === marker && fields[i][8] === marker ||
      fields[i][0] === marker && fields[i][4] === marker && fields[i][8] === marker ||
      fields[i][2] === marker && fields[i][4] === marker && fields[i][6] === marker) {
      fillField(i, marker) // field is won by player 
    } else if (!(fields[i].some(el => el === " "))) {
      fillField(i, "-") //  field draw
    }
    if (fields[0].every(el => el === marker) && fields[1].every(el => el === marker) && fields[2].every(el => el === marker) ||
      fields[3].every(el => el === marker) && fields[4].every(el => el === marker) && fields[5].every(el => el === marker) ||
      fields[6].every(el => el === marker) && fields[7].every(el => el === marker) && fields[8].every(el => el === marker) ||
      fields[0].every(el => el === marker) && fields[3].every(el => el === marker) && fields[6].every(el => el === marker) ||
      fields[1].every(el => el === marker) && fields[4].every(el => el === marker) && fields[7].every(el => el === marker) ||
      fields[2].every(el => el === marker) && fields[5].every(el => el === marker) && fields[8].every(el => el === marker) ||
      fields[0].every(el => el === marker) && fields[4].every(el => el === marker) && fields[8].every(el => el === marker) ||
      fields[2].every(el => el === marker) && fields[4].every(el => el === marker) && fields[6].every(el => el === marker)) {
      console.log(`Player ${marker} won !`)
      break
    } else if (!(fields.filter(field => field.some(el => el === ' ')))) {
      console.log("Game draw")
      break
    }

  }
}

console.clear();
resetFields();
fields.forEach(el => console.log(el))
//checkForWin(fields, playerOneMarker)
printBoard(fields);
// playerInput(fieldPick = true, field = 1, playerMarker = playerOneMarker);
// printBoard(fields)
