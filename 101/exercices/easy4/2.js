let readline = require("readline-sync");
let nums = [];
for (i = 1; i < 7; i += 1) {
  if (i === 6) { nums.push(Number(readline.question(`write last number: `))); } else {
    nums.push(Number(readline.question(`write ${i} number: `)));
  }
}
let appears = (nums.slice(0, -1).includes(nums[nums.length - 1])) ? "appears" : "does not appear";
console.log(`Number ${nums[nums.length - 1]} ${appears} in ${nums.slice(0, -1)}`)