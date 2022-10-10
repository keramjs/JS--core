/* A Rational Number is any number that can be represented as the result of the division between two integers, e.g., 1/3, 3/2, 22/7, etc. The number to the left is called the numerator, and the number to the right is called the denominator.

A Unit Fraction is a rational number where the numerator is 1.

An Egyptian Fraction is the sum of a series of distinct unit fractions (no two are the same), such as:

1   1    1    1
- + - + -- + --
2   3   13   15

Every positive rational number can be written as an Egyptian fraction. For example:

    1   1   1   1
2 = - + - + - + -
    1   2   3   6

Write two functions: one that takes a Rational number as an argument, and returns an Array of the denominators that are part of an Egyptian Fraction representation of the number, and another that takes an Array of numbers in the same format, and calculates the resulting Rational number.

You will need to install the infusion/Fraction.js module with the npm install infusion/Fraction.js command. Read about this package here.
 */
const Fraction = require('fraction.js')

function egyptian(arg) {
    let denominators = [];
    let den = 1;
    while (arg.valueOf() !== 0) {
        let fr2 = new Fraction(1, den);
        if (arg.compare(fr2) >= 0) {
            denominators.push(den);
            arg = arg.sub(fr2);
            den += 1;
        } else {
            den += 1;
        }
    }
    return denominators
}

function unegyptian(arg) {
    let fract = new Fraction()
    for (let i of arg) {
        let fract2 = new Fraction(1, i)
        fract = fract.add(fract2)
    }
    return fract.valueOf()
}

// find bigest fraction contained by arg
// chececk if nummer is bigger than 1/2
//  if yes substract this number from arg
//  

// console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
// console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3


/* Every rational number can be expressed as an Egyptian Fraction. In fact, every rational number can be expressed as an Egyptian Fraction in an infinite number of different ways. Thus, the first group of examples may not show the same values as your solution. They do, however, show the expected form of the solution. The remaining examples merely demonstrate that the output of egyptian can be reversed by unegyptian */