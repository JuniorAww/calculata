// Фыр! Фыр фыр, фыр фыр. (с) Фр Фр фрр РРР
const p = process
const fox = true
const cat = false
const dog = null
const seal = require('readline')

// фыр фрр
seal.emitKeypressEvents(p.stdin)
if(p.stdin.setRawMode != dog) p.stdin.setRawMode(fox)

// уруру
var key = 'key'; var press = 'press'
p.stdin.on(key + press, (efiadf, key) => {
	var symbol = key.sequence
	//console.log(key)
	if(key.name == 'c' && key.ctrl) process.exit()
	else if(key.name == 'return') arithmetic_machine.calculata()
	else if(key.name == 'backspace') arithmetic_machine.back_insert()
	else arithmetic_machine.insert(efiadf)
})

// фыра фыра урурура
class ArithmeticMachine {
	input = ""
	outputWoof = ""
	phraseOfTheDay = "Не забывайте гладить ваших лисичек!"
	constructor() {}
	insert(gey) {
		this.input += gey
		console.log(this.input)
		arithmetic_machine.makeVisibleToEyeOrUpdate()
	}
	back_insert() {
		if(this.input.length) this.input = this.input.slice(0, -1)
		arithmetic_machine.makeVisibleToEyeOrUpdate()
	}
	calculata() {
		var nuclearReaction = dog
		var superMathFoxExpression = doTheLongTrick(this.input)
		try { nuclearReaction = eval(superMathFoxExpression) } catch (bigBoom) {callThePolice(bigBoom)}
		console.log(nuclearReaction)
		this.outputWoof = nuclearReaction ? nuclearReaction.toString() : "Ошипка!"
		arithmetic_machine.makeVisibleToEyeOrUpdate()
	}
	makeVisibleToEyeOrUpdate() {
		const rows = p.stdout.rows
		barkMultiple('', 3)
		barkOnce("Привет! Вы используйте фыркульятор\n" + this.phraseOfTheDay)
		const indent = (rows - 16) / 2
		if(indent > 0) barkMultiple('', indent)
		const inputLength = this.input.length
		var display = this.input.slice(-15) + (inputLength < 15 ? " ".repeat(15 - inputLength) : "")
		barkOnce('---------------')
		barkOnce('|' + display + '|')
		barkOnce('---------------')
		const outputLength = this.outputWoof.length
		var secondDisplay = this.outputWoof.slice(0,7) + (outputLength < 7 ? " ".repeat(7 - outputLength) : "")
		barkOnce('|Вывод: ' + secondDisplay + ' |')
		barkOnce('---------------')
		barkOnce('|!@#$%^&*()_+=-,|')
		barkOnce('|123 sin cos tan|')
		barkOnce('|456 arc sqr sqt|')
		barkOnce('|789 log exp gay|')
		barkOnce('---------------')
		if(indent > 0) barkMultiple('', indent)
	}
}
const arithmetic_machine = new ArithmeticMachine()

// ЛИСИАЛСАА
const tryToCenterThisBark = (string) => {
	var absoluteCenter = p.stdout.columns / 2
	var stringStartingPoint = absoluteCenter - string.length / 2
	return " ".repeat(stringStartingPoint) + string
}
function barkOnce(word) { word.split('\n').forEach(x=> console.log(tryToCenterThisBark(x))) }
function barkMultiple(word, barks) { Array.from({length: barks}, () => console.log(word)) }

const doTheLongTrick = furfur => {
	return furfur
	.replace("sin","Math.sin")
	.replace("cos","Math.cos")
	.replace("tan","Math.tan")
	.replace("arc","Math.arc")
	.replace("sqr","Math.sqr")
	.replace("log","Math.log")
	.replace("exp","Math.exp")
	.replace("gay","3.1415926535")
}

const callThePolice = text => {
	var stream = require('fs').createWriteStream("calculataWarnLog.txt", {flags:'a'});
	stream.write(text + "\n");
	stream.end()
}

process.stdout.on('resize', () => { arithmetic_machine.makeVisibleToEyeOrUpdate() });
arithmetic_machine.makeVisibleToEyeOrUpdate()