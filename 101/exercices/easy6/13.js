/* Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs. */

function isBalanced(txt) {
  let br = txt.match(/\(|\)/g) ? txt.match(/\(|\)/g) : [];
  let left = 0
  let right = 0
  for (let i of br) {
    if (i === '(') left += 1;
    if (i === ')') right += 1;
    if (right > left) return false;
  }
  return left === right;
}
console.log(isBalanced("What (is) this?") === true);
console.log((isBalanced("What (is this?") === false));
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
