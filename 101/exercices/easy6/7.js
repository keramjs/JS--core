function sequence(num) {
  let arr = [];
  for (let i = 1; i <= num; i += 1) {
    arr.push(i)
  };
  return arr
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]