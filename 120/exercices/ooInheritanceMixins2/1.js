/* Using the following code, create two classes - Truck and Car - that both inherit from Vehicle. */

class Vehicle {
    constructor(year) {
      this.year = year;
    }
  }
  
  let truck = new Truck(2003);
  console.log(truck.year); // 2003
  
  let car = new Car(2015);
  console.log(car.year); // 2015

//   Expected output:
//   2003
// 2015