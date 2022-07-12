/*
- player 1 wybiera znak
- drugi znak jest przyznawany automatycznie plyerowi 2
- losowanie kto zaczyna pierwszy
- wyswietlenie planszy
- ruch pierwszego gracza
- sprawdzenie wygranej
- aktualizacja planszy
- ruch drugiego gracza
- sprawdzenie wygranej
- aktualizacja planszy

*/
const readline = require(readline-sync);
const playerOneMarker = 'X';
const playerTworMArker = 'O';

let fields = [[], [], [], [], [], [], [], [], []];

function welcomeMessage(){
    console.log("Welcome to ultimate tic tac toe")
    console.log("First you pick field then squere where you put your mark.")
    console.log("Your mark marks field that your oponent makes mark.")
    console.log("If Field is won or full you can pick different field to put your mark.")
}

function playerInput(move = true, field = true) {
  let fld;
  let square;
  if (move) {
    if (field) {
      do {
        fld = readline.question('pick field 0-9-> ');
      } while (!(/^\d$/.test(fld)));
    }

    do {
      square = readline.question('pick square 0-9->');
    } while (!(/^\d$/.test(square)));

    return [fld, square]
  } else {
    do {
      answer = readline.question('choose Yes or No  y/n ->')
    } while (!(/^y|n$/.test(answer)))
    return answer
  }
}

function validateInput(field, square, player){
  if (fields[field][square] === ' '){
    fields[field][square] === playerMarker
  }
}

console.log(playerInput(move = false))

function resetFields() {
  fields.forEach((element) => {
    for (i = 0; i < 9; i++) {
      element[i] = " ";
    }
  });
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

resetFields();
printBoard(fields);
