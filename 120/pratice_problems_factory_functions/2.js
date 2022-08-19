function makeObj() {
    let obj = {};
    obj.propA = 10;
    obj.propB = 20;
    return obj;
  }

  function makeObj1() {
    return{
    propA: 10,
    propB: 20,
    }
  }

  console.log(makeObj())
  console.log(makeObj1())