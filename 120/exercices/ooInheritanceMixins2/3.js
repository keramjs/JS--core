/* Using the following code, allow Truck to accept a second argument upon instantiation. Name the parameter bedType and implement the modification so that Car continues to only accept one argument. */

class Vehicle {
    constructor(year) {
      this.year = year;
    }
  }
  
  class Truck extends Vehicle {}
  
  class Car extends Vehicle {}
  
  let truck1 = new Truck(2003, 'Short');
  console.log(truck1.year);
  console.log(truck1.bedType);

//   Expected output:
//   2003
// Short