const fs = require('fs')

/**
 * Returns an array containing information parsed from the input file
 *
 * @param {array} inputFile The path of the input text file
 */

function readFile(inputFile) {
    return fs.readFileSync(inputFile, 'utf8').toString().split("\n");
}

module.exports = { readFile };