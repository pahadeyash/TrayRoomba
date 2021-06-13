const fs = require('fs')

function readFile(inputText) {
    return fs.readFileSync(inputText, 'utf8').toString().split("\n");
}

module.exports = { readFile };