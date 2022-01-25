const inp = require('readline-sync');
const fs = require('fs');
const path = require('path');

let start = true;
let rd = fs.readFileSync(path.resolve(__dirname, 'calc_config.json'));
let messages = JSON.parse(rd)

function prompt(txt) { console.log(`=> ${txt}\n`) }

function isValid(type) {
	switch (type) {
		case 'number':
			while (true) {
				val = inp.question(prompt(messages.writeNum))
				if (/\-?\d+\.?\d*?/.test(val)) {
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
function pickLanguage() {
	// ask user for lang

}
while (start) {
	prompt(messages.welcomeGreet);
	pickLanguage();
	let operand1 = isValid('number');
	let operand2 = isValid('number');
	let arithmetic = isValid('operand');
	prompt(`result is ${eval(Number(operand1) + arithmetic + Number(operand2))}`);
	let choice = isValid('choice')
}
