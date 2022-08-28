function isPalindrome(txt) {
  return txt === txt.split('').reverse().join('');
}
function isRealPalindrome(txt) {
  let txtArr = /\W/g.test(txt.toLowerCase())
  console.log(txtArr)
  let cleanArr = txtArr.filter(el => el !== '');
  console.log(cleanArr)
  console.log(cleanArr.every(el => isPalindrome(el)));
}




// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');