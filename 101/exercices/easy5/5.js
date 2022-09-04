
function interleave(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  return arr;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]