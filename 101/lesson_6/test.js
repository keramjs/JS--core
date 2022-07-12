
const readline = require("readline-sync");

let fields = [[], [], [], [], [], [], [], [], []];

function playerInput(move = true, fieldPick = true, field) {
    let fld = field;
    let square;
    
    if (move) {
      if (fieldPick) {
        while (true) {
          fld = Number((readline.question('Pick field 0-8-> ')));
          if (!isNaN(fld) && (0 <= fld < 9)){
            console.log("Enter number between 0 and 8");
            continue;
          }
          if (!(fields[fld].some(element => element === " "))){
            console.log("This field is already taken , pick again")
            continue;
          }
          break;
        };
      }
  
      while (true) {
        square = Number((readline.question('Pick square 0-8-> ')));
        if (!isNaN(square) && (0 <= fld < 9)){
          console.log("Enter number between 0 and 8");
          continue;
        }
        if (!(fields[fld][square] === " ")){
          console.log("This square is already taken , pick again")
          continue;
        }
        break;
      };
  
      return [fld, square]
    } else {
      do {
        answer = readline.question('choose Yes or No  y/n ->')
      } while (!(/^y|n$/.test(answer)))
      return answer
    }
  }