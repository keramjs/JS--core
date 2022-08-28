function isPalindrome(txt) {
  return txt === txt.split('').reverse().join('');
}
function isRealPalindrome(txt) {
  let inclNonAlpha = /\W/g.test(txt.toLowerCase())
  if (inclNonAlpha) return true;
  return isPalindrome(txt.toLowerCase());
}




console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));