/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise. */


function maxRotation(num){
    let len = String(num).length;
    let rotated = num;
    while(len > 1){
        rotated = rotateRightmostDigits(rotated, len);
        len -=1;
    }
    return rotated
}

function rotateRightmostDigits(num, digNum){
    if (digNum === 1 ) return num;
    let str = String(num)
    let leftSide = str.slice(0,str.length - digNum);
    let rotStr = str.slice(-digNum)
    return Number(leftSide + rotateLeft(rotStr))
}

function rotateLeft(str){
    return  str.slice(1) + str.slice(0,1); 
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
