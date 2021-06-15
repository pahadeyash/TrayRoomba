const Room = require('./src/modules/room')
const utils = require("./src/utils");

/**
 * Returns a room instance intialized with the information from the input file
 *
 * @param {string} inputFile The path of the input text file
 */

function intializeRoom(inputFile) {
    const fileData = utils.readFile(inputFile);
    console.log(fileData);
    const roomDimensions = fileData[0].split(" ");
    const width = roomDimensions[0];
    const length = roomDimensions[1];
    const roombaPosition = fileData[1].split(" ");
    const dirtPatchPositions = utils.getDirtPatches(fileData);
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

module.exports = main;