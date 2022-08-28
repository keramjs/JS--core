const { allowedNodeEnvironmentFlags } = require("process");

function runningTotal(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i += 1) {
  //     if (i < 1) {
  //       newArr.push(arr[i]);
  //       continue;
  //     }
  //     newArr.push(newArr[i - 1] + arr[i]);
  //   }
  //   return newArr;
  return arr.reduce((acc, el, idx) => {
    if (idx === 0) {
      acc.push(el);
      return acc;
    } else {
      acc[idx] = acc[idx - 1] + el;
      return acc;
    }
  }, []);
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
