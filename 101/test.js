let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.keys(obj).forEach(key => Object.values(obj[key]).forEach(word => word.split('').forEach(letter => {
  if ('aoeiu'.includes(letter)) {
    console.log(letter)
  }
})))