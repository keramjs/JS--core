function repeatThreeTimes(func,thisArg) {
    func.call(thisArg);
    func.call(thisArg);
    func.call(thisArg);

  }
  
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      repeatThreeTimes(function() {
        console.log('hello, ' + this.firstName + ' ' + this.lastName);
      },this);
    },
  };
  
  john.greetings.call(john);
  
  // => hello, undefined undefined
  // => hello, undefined undefined
  // => hello, undefined undefined
