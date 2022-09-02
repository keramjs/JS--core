function union(arr1, arr2) {
  let arr = arr1.slice();
  arr2.forEach(element => { if (!arr.includes(element)) { arr.push(element) } });
  return arr.sort((a, b) => a - b)
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]