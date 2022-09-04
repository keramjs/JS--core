function swapName(txt) {
  return txt.split(' ').reverse().join(', ')
}
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"