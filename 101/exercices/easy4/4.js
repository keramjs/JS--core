// function isPalindrome(txt) {
//   let txtArr = txt.split('');
//   let reverseTxt = txtArr.slice().reverse();
//   console.log(txtArr);
//   console.log(reverseTxt);
//   for (let i = 0; i < txtArr.length; i += 1) {
//     if (txtArr[i] !== reverseTxt[i]) {
//       return false
//     }
//   }
//   return true
// }

function isPalindrome(txt) {
  return txt === txt.split('').reverse().join('');
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));