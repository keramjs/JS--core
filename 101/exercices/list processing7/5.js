/* Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise: */
function leadingSubstrings(str) {
  return str.split('').map((element, index) =>
    str.slice(0, index + 1))
}

function substrings(str) {
  let arr = [];
  let idx = 0;
  while (idx < str.length) {
    arr = arr.concat(leadingSubstrings(str.slice(idx)));
    idx += 1;
  }
  return arr
}

console.log(substrings('abcde'));

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]