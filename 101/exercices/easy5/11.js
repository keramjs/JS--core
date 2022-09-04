


function timeOfDay(num) {
  num = num % (24 * 60);
  let hours = Math.trunc(num / 60);
  let minutes = num % 60
  console.log(minutes);

  console.log(hours)
  if (num < 0) {
    hours = hours + 23;
    minutes = 60 + minutes;
  }
  console.log(hours)
  console.log(minutes)

  if (hours < 10) hours = '0' + String(hours);
  if (minutes < 10) minutes = '0' + String(minutes);
  return `${hours}:${minutes}`
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");