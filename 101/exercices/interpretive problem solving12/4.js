/* Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7). */
function star(num) {
  if (num < 7) return false;
  //upper part
  let counter = (num - 1) / 2;
  let spacesExternal = 0;
  while (counter > 0) {
    let spacesInternal = counter - 1;
    console.log(
      `${" ".repeat(spacesExternal)}*${" ".repeat(spacesInternal)}*${" ".repeat(
        spacesInternal
      )}*${" ".repeat(spacesExternal)}`
    );
    counter -= 1;
    spacesExternal += 1;
  }
  //lower part
  console.log("*".repeat(num));
  counter = (num - 1) / 2;
  spacesExternal = (num - 3) / 2;
  while (counter > 0) {
    let spacesInternal = (num - 1) / 2 - counter;
    console.log(
      `${" ".repeat(spacesExternal)}*${" ".repeat(spacesInternal)}*${" ".repeat(
        spacesInternal
      )}*${" ".repeat(spacesExternal)}`
    );
    counter -= 1;
    spacesExternal -= 1;
  }
}

//star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
