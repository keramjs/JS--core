const readline = require("readline-sync");
let age = parseInt(readline.question("What is your age ? : "));
let retirement = parseInt(readline.question("At what age will you retire ? : "));
let today = new Date()
let year = today.getFullYear();
console.log(`It is ${year}. You will retire in ${retirement - age + year}`);
console.log(`You have only ${retirement - age} to go !`);
