let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// return original structure with all values %3 === 0
//[[],[3],[15]]

newArr = arr.map(subArr=> subArr.filter(element => element%3 === 0))
newArr.forEach(el=>console.log(el))