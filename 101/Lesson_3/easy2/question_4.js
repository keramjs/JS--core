let famousWords = "seven years ago...";
let first = "Four score and";
console.log(first + ' ' + famousWords);
console.log(`${first} ${famousWords}`);
console.log(famousWords.replace(/^/, (first + " ")))