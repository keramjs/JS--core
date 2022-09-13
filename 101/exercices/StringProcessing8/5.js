/* Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged. */

function swapCase(txt) {
  let arr = txt.split(' ').map(element => {
    if (element.length > 1) {
      return element.split('').map(el => /[A-Z]/.test(el) ? el.toLowerCase() : el.toUpperCase())
    } else {
      return '';
    }
  });
  return arr.map(element => element.join('')).join(' ')
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"