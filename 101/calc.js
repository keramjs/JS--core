let inp = require('readline-sync');

let start = true;
let messages = JSON.parse()

function prompt(txt) { console.log(`=> ${txt}\n`) }

function isValid(type) {
	switch (type) {
		case 'number':
			while (true) {
				val = inp.question(prompt(messages.writeNum))
				if (/\-\d+\.?\d*/.test(val)) {
					return Number(val)
				} else {
					prompt(messages.warningNum);
				}
			}
			break
		case 'operand':
			while (true) {
				val = inp.question(prompt('write operand + - * \/ '))
				if (/^[+\-\*\/]$/.test(val)) {
					return val
				} else {
					prompt(messages.warningOperator)
				}
			}
			break;
		case 'choice':
			while (true) {
				val = inp.question(prompt('do you want continue y/n'))
				if ([/[YyNn]/.test(val)]) {
					['Y', 'y'].includes(val) ? start = true : start = false;
					break
				} else {
					prompt('write y or n')
				}
			}
			break;
	}
}

while (start) {
	prompt(messages.welcomeGreet);
	let operand1 = isValid('number');
	let operand2 = isValid('number');
	let arithmetic = isValid('operand');
	prompt(`resoult is ${eval(Number(operand1) + arithmetic + Number(operand2))}`);
	let choice = isValid('choice')
}
