const inp = require('readline-sync');
const fs = require('fs');
const path = require('path');

let start = true;
let rd = fs.readFileSync(path.resolve(__dirname, 'calc_config.json'));
let dict = JSON.parse(rd)
let messages

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
				val = inp.question(prompt(messages.writeOperand));
				if (/^[+\-\*\/]$/.test(val)) {
					return val
				} else {
					prompt(messages.warningOperator)
				}
			}
			break;
		case 'choice':
			while (true) {
				val = inp.question(prompt(messages.continue));
				if (/[YyNn]/.test(val)) {
					/[yY]/.test(val) ? start = true : start = false;
					break;
				} else {
					prompt(messages.warningContinue);
				}
			}
			break;
		case 'lang':
			while (true) {
				language = inp.question(prompt('choose your language eng/chin'));
				if (/eng|chin/.test(language)) {
					if (language === 'eng') {
						return dict['english'];
					} else {
						return dict['chinesse'];
					}
				} else {
					prompt('wrong language try again you have to pick eng or chin')
				}
			}
			break;
	}
}

while (start) {
	prompt(dict.english.welcomeGreet);
	messages = isValid('lang');
	let operand1 = isValid('number');
	let operand2 = isValid('number');
	let arithmetic = isValid('operand');
	prompt(`result is ${eval(Number(operand1) + arithmetic + Number(operand2))}`);
	let choice = isValid('choice')
}
