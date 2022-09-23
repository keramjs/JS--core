/* A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201. */

/* 
featured num%2 =1 && num%7=0 digits in num can't repeat
input integer
outpout next featured num > num

what is closest number to num % 7 ? round up
check if this number is odd and check if this number has unique digits
if yes return this number 
if not add 7 to number and check again
add only up to 9876543210
*/
function featured(num) {
  let closest = Math.trunc(num / 7) * 7 + 7;
  while (closest < 9876543210) {
    if (closest % 2 && areDigitsUnique(closest)) {
      return closest;
    }
    closest += 7;
  }
  return "There is no possible number that fulfills those requirements.";
}
function extracttDigits(num) {
  let digits = [];
  let counter = 1;
  while (num > 0) {
    let digit = num % 10;
    digits.push(digit);
    num = Math.trunc(num / 10);
    counter += 1;
  }
  return digits;
}

function areDigitsUnique(num) {
  let arr = extracttDigits(num);
  let obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]] === arr[i]) {
      return false;
    }
    obj[arr[i]] = arr[i];
  }
  return true;
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
