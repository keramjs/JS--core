let inp = require('readline-sync');

let start = true;
function prompt(txt) { console.log(`=> ${txt}\n`) }

function isValid(type) {
	switch (type) {
		case 'number':
			while (true) {
				val = inp.question(prompt('write a number '))
				if (/(^\d+$)|(^\d+\.\d+$)|(^\d+\.\d+$)/.test(val)) {
					return Number(val)
				} else {
					'write proper number'
				}
			}
			break
		case 'operand':
			while (true) {
				val = inp.question(prompt('write operand + - * \/ '))
				if (['+', '-', '*', '/'].includes(val)) {
					return val
				} else {
					'write proper arithmetic operand'
				}
			}
			break;
		case 'choice':
			while (true) {
				val = inp.question(prompt('do you want continue y/n'))
				if (['y', 'Y', 'n', 'N'.includes(val)]) {
					['Y', 'y'].includes(val) ? start = true : start = false;
					break
				} else {
					prompt('write y or n')
				}
			}
			break;
		default:
			prompt('no valid type was given to function')
	}
}

while (start) {
	prompt('welcome to magnificent calc');
	prompt('To get result follow the instuctions');
	let operand1 = isValid('number');
	let operand2 = isValid('number');
	let arithmetic = isValid('operand');
	prompt(`resoult is ${eval(Number(operand1) + arithmetic + Number(operand2))}`);
	let choice = isValid('choice')
}
