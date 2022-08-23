const readline = require("readline-sync");
let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter a adjective: ");
let adverb = readline.question("Enter a adverb: ");
console.log(`Would you like to have some ${noun} Asked butler
and ${verb} cup of tea on ${adjective} table. All of this was done ${adverb}.`);
