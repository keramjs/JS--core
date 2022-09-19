/* Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left. */

console.log (rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


function rotateRightmostDigits(num, digNum){
    let rightSide = num % (10**(digNum))%(10**digNum);
    let leftSide = num - rightSide;
    rightSide = swapDigits(rightSide);
    return leftSide+rightSide;
}


function swapDigits(num){
    let firstNum;
    let modNum;
    let place = 1
    if (num < 10) return num;
    while(true){
        firstNum = num / (10**place);
        if (firstNum > 0 && firstNum < 10){
            modNum = Math.trunc(((firstNum%1).toFixed(place))*(10**place));
            firstNum = Math.trunc(firstNum);
            break;
        }
        place +=1;
    }
    return (modNum *10) + firstNum;
}


