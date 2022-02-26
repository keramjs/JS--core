function factors(number) {
  if (number > 0) {
    let factors = [];
    for (div = number; div > 0; div--) {
      if (number % div === 0) {
        factors.push(div);
      }
    }
    return factors;
  }
}
console.log(factors(8))

