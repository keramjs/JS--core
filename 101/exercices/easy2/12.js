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

function signedIntegerToString(int) {
  let sign = Math.sign(int);
  let num = Math.abs(int);
  if (sign === -1) {
    return "-" + integerToString(num);
  } else if (int === 0) {
    return integerToString(num);
  } else {
    return "+" + integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
