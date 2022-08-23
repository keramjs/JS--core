function stringy(int) {
  let str = '';
  if (int === 0) return '';
  while (int) {
    str = str + (str.charAt(str.length - 1) === '1' ? 0 : 1);
    int -= 1;
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"