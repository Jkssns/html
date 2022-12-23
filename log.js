const { say } = require('cfonts')
function greeting () {
const cols = process.stdout.columns
let text = ''

if (cols > 104) text = 'Chen Hong Xue 521'
else if (cols > 76) text = 'electron-|vue'
else text = false

if (text) {
	say(text, {
	colors: ['blue'],
	})
} else console.log(chalk.yellow.bold('\n  Jkssns'))
}

greeting()