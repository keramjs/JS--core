/* In the modern era under the Gregorian Calendar,
leap years occur in every year that is evenly divisible by 4,
unless the year is also divisible by 100.
If the year is evenly divisible by 100,
then it is not a leap year,
unless the year is also evenly divisible by 400. */

//input int > 0
//output true, false
//rules: true if (!year % 4)&&(year%100), true if(!year%100)&&(!year%400)

function isLeapYear(year){
return (!(year % 4))&&(year%100) || !(year%400)? true:false;;
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true
