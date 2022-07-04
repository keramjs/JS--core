let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
  };

  //return array with colors and sizes, both should be capitalized

newArr=[]

Object.keys(obj).forEach(subObj=>{
    newArr.push(obj[subObj]['colors'].map(el=> el[0].toUpperCase() + el.slice(1)));
    newArr.push(obj[subObj]['size'].toUpperCase());
  });
console.log(newArr);