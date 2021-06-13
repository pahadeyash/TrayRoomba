const Room = require('./src/modules/room')
const utils = require("./src/utils");

function getDirtPatches(fileData) {
    const dirtPatches = []
    for(let i = 2; i < fileData.length - 1; i++) {
        dirtPatches.push(fileData[i].split(" "));
    }
    return dirtPatches;
}

function intializeRoom(inputText) {
    const fileData = utils.readFile(inputText);
    const roomDimensions = fileData[0].split(" ");
    const width = roomDimensions[0];
    const height = roomDimensions[1];
    const roombaPosition = fileData[1].split(" ");
    const dirtPatchPositions = getDirtPatches(fileData);
    const drivingInstructions =  fileData[fileData.length - 1].split('');
    return new Room(width, height, roombaPosition, dirtPatchPositions, drivingInstructions)
}

function main(inputText) {
    room = intializeRoom(inputText);
    room.clean();
}

main('./input.txt');

module.exports = { main }