const readline = require('readline-sync');

function playerInput(move = true, field = true) {
  let fld;
  let square;
  if (move) {
    if (field) {
      do {
        fld = readline.question('pick field ');
      } while (!(/^\d$/.test(fld)));
    }

    do {
      square = readline.question('pick square ');
    } while (!(/^\d$/.test(square)));

    return [fld, square]
  } else {
    do {
      answer = readline.question('choose Yes or No  y/n - ')
    } while (!(/^y|n$/.test(answer)))
    return answer
  }

}

console.log(playerInput(move = false))