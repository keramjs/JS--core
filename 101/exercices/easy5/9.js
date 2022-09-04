function countOccurrences(arr) {
  let ocurrencies = {};
  for (let i of arr) {
    if (Object.keys(ocurrencies).includes(i)) {
      ocurrencies[i] += 1;
    } else {
      ocurrencies[i] = 1
    }
  }
  for (let key of Object.keys(ocurrencies)) {
    console.log(`${key} => ${ocurrencies[key]}`)
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2