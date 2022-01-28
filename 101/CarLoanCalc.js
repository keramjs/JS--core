
const readline = require('readline-sync');

function isValid(dataType) {
    switch (dataType) {
        case "loneAmount":
            while (true) {
                let loneAmount = Number(readline.question("Please write loan amount "));
                if (loneAmount > 0) {
                    return loneAmount
                } else {
                    console.log("Write reasonable amount of loan - positive numbers only more than 0")
                }
            }
            break;
        case "apr":
            while (true) {
                let apr = Number(readline.question("Please write Anually Precentage Rate "))
                if (apr > 0) {
                    return apr
                } else {
                    console.log("Please use only positive numbers bigger than 0 ")
                }
            }
            break;
        case "loneDuration":
            while (true) {
                let loneDuration = parseInt(readline.question("Please write lone duration in years "))
                if (loneDuration > 0) {
                    return loneDuration
                } else {
                    console.log("Please use only positive integers bigger than 0")
                }
            }
            break;
    }
}


let loneAmount = isValid('loneAmount');
let apr = isValid('apr') / 100;
let loneDuration = isValid('loneDuration');
console.log(`\nLone duration in month - ${loneDuration * 12}`);
let mir = apr / 12;
let m = (loneAmount * (mir / (1 - Math.pow((1 + mir), (-(loneDuration * 12))))));
console.log(`monthly payment ${m}`);
