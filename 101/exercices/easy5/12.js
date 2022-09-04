const MINUTE_IN_HOURS = 60;

function afterMidnight(txt) {
  let [hours, minutes] = cnvrtMinToHours(txt);
  if (hours > 23) {
    hours = hours % 24;
  }
  return minutes + (hours * MINUTE_IN_HOURS);
};
function beforeMidnight(txt) {
  let [hours, minutes] = cnvrtMinToHours(txt);
  if (hours > 23) hours = hours % 24;
  if (minutes > 0 && hours > 0) {
    return (MINUTE_IN_HOURS * 24) - (minutes + (hours * MINUTE_IN_HOURS))
  }
  else {
    return 0;
  }
};

function cnvrtMinToHours(txt) {
  let [hours, minutes] = txt.split(':');
  console.log(hours, minutes)
  return [Number(hours), Number(minutes)]
}



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);