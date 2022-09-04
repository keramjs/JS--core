/* Write a function that takes a string, doubles every character in the string, and returns the result as a new string. */

function repeater(txt) {
  return txt.split('').map(el => el.repeat(2)).join('')
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""