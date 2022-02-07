let title = "Flintstone Family Members";
let tableSize = 40;
// get string length
//devide str lengt by 2
//substract from 10 result of division

let spaces = Math.floor((tableSize - title.length) / 2);
//let newTitle =`${spaces}${title}${spaces}`;
console.log(title.padStart(spaces + title.length, " "))