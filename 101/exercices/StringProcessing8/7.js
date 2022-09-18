/* Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case. */

function staggeredCase(txt) {
  let arr = txt.split('');
  let toggle = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (/[A-Za-z]/.test(arr[i])) {
      toggle += 1;
    } else {
      continue;
    }
    if (!(toggle % 2)) {
      if (/[A-Z]/.test(arr[i])) {
        arr[i] = arr[i].toLowerCase();
      }
    } else {
      if (/[a-z]/.test(arr[i])) {
        arr[i] = arr[i].toUpperCase();
      }
    }
  }
  return arr.join('')

}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
