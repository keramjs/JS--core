/* A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules. */
function isBlockWord(str) {
  str = str.toUpperCase().split("");
  if (!str.length) return false;
  let blocks = {
    B: "O",
    X: "K",
    D: "Q",
    C: "P",
    N: "A",
    G: "T",
    R: "E",
    F: "S",
    J: "W",
    H: "U",
    V: "I",
    L: "Y",
    Z: "M",
  };

  let revBlocks = {};
  Object.keys(blocks).forEach(k => revBlocks[blocks[k]] = k )
  
  for (let letter of str){
    let revLetter = blocks[letter] ? blocks[letter] : revBlocks[letter];

    if (revLetter) {
      if (blocks[letter]){
        delete blocks[letter];
        delete revBlocks[revLetter];
      }
      if(revBlocks[letter]){
        delete blocks[revBlocks[letter]];
        delete revBlocks[letter];
      }
    }else{
      return false;
    }

  }
  return true;
}
console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // false
console.log(isBlockWord('123'));       // false
console.log(isBlockWord('OB'));       // false
