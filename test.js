
const { Nodehun } = require('nodehun');

const fs          = require('fs')
const affix       = fs.readFileSync('./ko.aff')
const dictionary  = fs.readFileSync('./ko.dic')

const nodehun     = new Nodehun(affix, dictionary)

// Promise example
nodehun.suggest('안됌')
		   .then(suggestions => {
               console.log(suggestions)
            })

// async/await example
async function example() {
	const suggestions = await nodehun.suggest('colour')
}

// sync example
const suggestions = nodehun.suggestSync('colour')