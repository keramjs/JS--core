/* Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither. */

function letterCaseCount(str) {
  let ob = {
    lower: 0,
    upper: 0,
    neither: 0
  }
  ob.lower = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
  ob.upper = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0
  ob.neither = str.match(/[^A-Za-z]/g) ? str.match(/[^A-Za-z]/g).length : 0

  return ob
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }