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

/**
 * Returns an array containing the coordinates of all dirt patches
 *
 * @param {array} fileData Array containing information parsed from input file
 */

function getDirtPatches(fileData) {
    const dirtPatches = []
    // dirt patch coordinates start from the second line
    for(let i = 2; i < fileData.length - 1; i++) {
        dirtPatches.push(fileData[i].split(" "));
    }
    console.log(dirtPatches);
    return dirtPatches;
}

module.exports = { readFile, getDirtPatches };