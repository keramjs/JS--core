let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

function assignProperty(obj, key, val) {
  let proto = obj;
  while (proto) {
    if (proto.hasOwnProperty(key)) {
      proto[key] = val;
    }
    proto = Object.getPrototypeOf(obj)

  }

}
// function assignProperty(obj, key, val) {
//   if (obj.hasOwnProperty(key)) {// if property exists in chain of prototype if 
//     obj[key] = val;
//     return;
//   } else if (Object.getPrototypeOf(obj) === Object.prototype) {
//     return;
//   }
//   assignProperty(Object.getPrototypeOf(obj), key, val);
// }



assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false