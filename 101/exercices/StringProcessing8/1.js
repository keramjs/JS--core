/* Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic. */

function isUppercase(str) {
  if (str === '') return true;
  let arr = str.match(/[A-Za-z]+/g) ? str.match(/[A-Za-z]+/g) : []
  return arr.every(element => {
    let letters = element.split('');
    return letters.every(el => /[A-Z]/.test(el))
  })
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true