/* What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00 */

let readline = require("readline-sync");
let bill = Number(readline.question("What is the bill "));
let tip = Number(readline.question("What is the tip precentage ")) / 100;

console.log(`The tip is ${bill * tip}`)
console.log(`The total is ${(bill * tip)+ bill}`)