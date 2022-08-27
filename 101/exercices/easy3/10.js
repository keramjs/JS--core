
function century(num) {
  let century = Number.isInteger(num / 100) ? num / 100 : parseInt(num / 100) + 1;
  let lastDigits = parseInt(century.toString().slice(-2));
  if (lastDigits === 1) {
    return century.toString() + 'st'
  } else if (lastDigits === 2) {
    return century.toString() + 'nd'
  } else if (lastDigits === 3) {
    return century.toString() + 'rd'
  } else if (lastDigits === 0 || lastDigits >= 4) {
    return century.toString() + 'th'
  }
}



console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"