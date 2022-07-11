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

let fields = [[],[],[],[],[],[],[],[],[]];

function resetFields(){
    fields.forEach(element => { 
         for (i = 0; i < 9; i++){
            element[i] = "X";
         }
    });
}

function printBoard(fields){
console.log('${fields[0][0]}${fields[0][1]}|${fields[0][2]|${fields[1][0]}|${fields[1][1]}|${fields[1][2]|${fields[2][0]}|${fields[2][1]}|${fields[2][2]');
// console.log("-----|-----|-----");
// console.log('${fields[0][3]}|${fields[0][4]}|${fields[0][5]|${fields[1][3]}|${fields[1][4]}|${fields[1][5]|${fields[2][3]}|${fields[2][4]}|${fields[2][5]');
// console.log("-----|-----|-----");
// console.log('${fields[0][6]}|${fields[0][7]}|${fields[0][8]|${fields[1][6]}|${fields[1][7]}|${fields[1][8]|${fields[2][6]}|${fields[2][7]}|${fields[2][8]');
// console.log("-----------------")
}

resetFields();
console.log('${fields[1][0]}')
//fields.forEach(element=> console.log(element))
//printBoard(fields);