const fs = require('fs')

/**
 * Returns an array containing information parsed from the input file
 *
 * @param {array} inputFile The path of the input text file
 */

function readFile(inputFile) {
    const retFile = fs.readFileSync(inputFile, 'utf8').toString().split("\n");
    if (retFile.length === 0) {
        throw new Error("Empty File");
    } else {
        return retFile;
    }
}

module.exports = { readFile };