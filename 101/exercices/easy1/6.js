/* Write a program that asks the user to enter an integer greater than 0,
 then asks whether the user wants to determine the sum 
 or the product of all numbers between 1 
 and the entered integer, inclusive. */

 let readline = require("readline-sync");
 let num = parseInt(readline.question("please enter int greater than 0 - "));
 let matOperation = readline.question(
   "please pick math operation \n 's' for sum or 'p' for product "
 );

 if (matOperation === "s") {
   let resoult = 0;
   for (let i = 1; i <= num; i += 1) {
     resoult += i;
   }
   console.log(`sum is ${resoult}`);
 } else if (matOperation === "p") {
   let resoult = 1;
   for (let i = 1; i <= num; i += 1) {
     resoult *= i;
   }
   console.log(`product is ${resoult}`);
 } else {
   console.log("wrong choice !");
 }
