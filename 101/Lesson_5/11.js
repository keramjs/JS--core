let arr = [{
  a: 1
}, {
  b: 2,
  c: 3
}, {
  d: 4,
  e: 5,
  f: 6
}];

arrPlus1 = arr.map(obj => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key] + 1;
    return acc
  }, {})
})


arrPlus1.forEach(element => console.log(element));