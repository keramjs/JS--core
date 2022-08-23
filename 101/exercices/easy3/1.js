
function crunch(txt) {
  let newTxt = txt.split('').reduce((tekst, letter) => {
    if (tekst.charAt(tekst.length - 1) === letter) {
      return tekst;
    } else {
      return tekst + letter
    }
  }, '');

  console.log(newTxt);
  // return newArr.join();
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
