let flintstones = ["Fred", "Wilma"];
let arr1 = ["Barney", "Betty"];
let arr2 = ["Bambam", "Pebbles"];

//["Barney", "Betty"].forEach(el => { flintstones.push(el) });


console.log(["Barney", "Betty"].reduce((ac, element) => {
  return ac.concat(element);
}, flintstones))