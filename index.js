const Room = require('./src/modules/room')
const utils = require("./src/utils");

/**
 * Returns an array containing the coordinates of all dirt patches
 *
 * @param {array} fileData Array containing information parsed from input file
 */

function getDirtPatches(fileData) {
    console.log(typeof(fileData));
    const dirtPatches = []
    for(let i = 2; i < fileData.length - 1; i++) {
        dirtPatches.push(fileData[i].split(" "));
    }
    return dirtPatches;
}

/**
 * Returns a Room instance intialized with the information from the input file
 *
 * @param {string} inputFile The path of the input text file
 */

function intializeRoom(inputFile) {
    const fileData = utils.readFile(inputFile);
    const roomDimensions = fileData[0].split(" ");
    const width = roomDimensions[0];
    const length = roomDimensions[1];
    const roombaPosition = fileData[1].split(" ");
    const dirtPatchPositions = getDirtPatches(fileData);
    const drivingInstructions =  fileData[fileData.length - 1].split('');
    return new Room(width, length, roombaPosition[0], roombaPosition[1], dirtPatchPositions, drivingInstructions)
}


/**
 * Main function 
 *
 * @param {string} inputFile The path of the input text file
 */

function main(inputFile) {
    room = intializeRoom(inputFile);
    room.clean();
}

main('./input.txt');

module.exports = { main }