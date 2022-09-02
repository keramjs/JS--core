function dms(angle) {
  let deg;
  let min;
  let sec;

  deg = Math.trunc(angle);
  let minFloat = (getFraction(angle)) * 60;
  min = Math.trunc(minFloat);
  console.log(minFloat)
  let secondFloat = (getFraction(minFloat)) * 60;
  sec = Math.trunc(secondFloat);
  if (min < 10) min = '0' + String(min);
  if (sec < 10) sec = '0' + String(sec);
  return `${deg}^${min}'${sec}"`
}
function getFraction(value) {
  if (Number.isInteger(value)) return 0;
  return parseFloat('0.' + String(value).split('.')[1]);

}
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"