/* Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer. */

function diamond(num){
    let counter = 1;
    let spaces = Math.ceil(num-1)/2; 
    while (counter <= num){
        console.log(`${' '.repeat(spaces)}${'*'.repeat(counter)}${' '.repeat(spaces)}`);
        counter += 2;
        (spaces > 1)? spaces -= 1: spaces =0;
    }
    if (num > 1){
    counter = num-2;
    spaces = 1;
    while (counter >= 1){
        console.log(`${' '.repeat(spaces)}${'*'.repeat(counter)}${' '.repeat(spaces)}`);
        counter -= 2;
        spaces +=1;
    }
}
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *
 
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
