/* Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case. */

function staggeredCase(txt) {
  let arr = txt.split('');
  console.log(arr);
  return arr.map((el, idx) => {
    let changeIdx;
    changeIdx = /A-Za-Z/.test(el)  idx: changeIdx - 1;
    console.log(changeIdx);

    if (changeIdx % 2 !== 0) {
      if (/[A-Z]/.test(el)) {
        return el.toLowerCase();
      } else {
        return el;
      }
    } else {
      if (/[a-z]/.test(el)) {
        return el.toUpperCase();
      } else {
        return el;
      }
    }
  }).join('')
}

// console.log(staggeredCase("ALL CAPS"));
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(
  staggeredCase("ignore 77 the 444 numbers"))
