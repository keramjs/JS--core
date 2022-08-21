let readline = require('readline-sync');
let num1 = parseInt(readline.question("Enter the first nuber: "));
let num2 = parseInt(readline.question("Enter the second nuber: "));
let op =['+','-','*','/','%','**']
for (let i of op){
    console.log(`num1 ${i} num2 = ${eval(`${num1} ${i} ${num2}`)}`);
}