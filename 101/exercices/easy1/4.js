let readline = require('readline-sync'); 
let length = readline.question("give length");
let width = readline.question("give width");

let meter = length*width
console.log(`The area of the room in meters is ${meter} and in feets  is ${meter*10.7639}`);

