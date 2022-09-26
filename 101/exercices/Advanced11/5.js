/* Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays. */
function merge(arr1, arr2) {
  let maxLength = (arr1.length > arr2.length) ? arr1.length : arr2.length;
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  let mergeArr = []
  for (let i = 0; i < maxLength; i += 1) {
    if (!arr1[i] && arr2[i]) {
      mergeArr.push(arr2[i]);
      continue;
    }
    if (arr1[i] && !arr2[i]) {
      mergeArr.push(arr1[i]);
      continue;
    }
    if (arr1[i] > arr2[i]) {
      mergeArr.push(arr2[i]);
      mergeArr.push(arr1[i]);
    } else {
      mergeArr.push(arr1[i]);
      mergeArr.push(arr2[i]);
    }
  }
  return mergeArr;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // TODO: to jest cos czego nie wzialem pod uwage[1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

