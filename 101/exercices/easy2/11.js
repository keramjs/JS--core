function integerToString(int) {
    let str = [];
    let arrNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let num = int;
    while (true) {
        if (num < 10) {
            str.push(arrNum[num]);
            break;
        }
        let idx = num % 10;
        str.push(arrNum[idx]);
        num = Math.trunc(num / 10);
    }
    return str.reverse().join('');
}

console.log(integerToString(4321) === '4321');        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"




