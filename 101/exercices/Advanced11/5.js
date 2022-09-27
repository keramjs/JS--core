const { memoryUsage } = require("process");

/* Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays. */
function merge(arr1, arr2) {
  let mergeArrMaxLen = arr1.length + arr2.length;
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  let mergeArr = [];
  let arg1 = arr1.shift();
  let arg2 = arr2.shift();

  while (mergeArr.length < mergeArrMaxLen) {

    while (arg1 <= arg2) {
      mergeArr.push(arg1);
      arg1 = arr1.shift();
    }
    while (arg1 >= arg2) {
      mergeArr.push(arg2);
      arg2 = arr2.shift();
    }
    if (!arg1) {
      mergeArr.push(arg2);
      arg2 = arr2.shift();
    }
    if (!arg1 && !arg2) break;
    if (!arg2) {
      mergeArr.push(arg1);
      arg1 = arr1.shift();
    }

  }
  return mergeArr;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

