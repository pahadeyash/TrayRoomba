const Room = require('./src/room')
var fs = require('fs')

function readFile(inputText) {
    return fs.readFileSync(inputText, 'utf8').toString().split("\n");
}

function getDirtPatches(fileData) {
    dirtPatches = []
    for(var i = 2; i < fileData.length - 1; i++) {
        dirtPatches.push(fileData[i].split(" "));
    }
    return dirtPatches;
}

function intializeRoom(room, inputText) {
    var fileData = readFile(inputText);
    var roomDimensions = fileData[0].split(" ");
    var dirtPatchPositions = getDirtPatches(fileData);
    room.setRoom(roomDimensions);
    room.setDirtPatches(dirtPatchPositions);
}

function main(inputText) {
    room = new Room();
    intializeRoom(room, inputText);
}

main('./input.txt');

module.exports = { main }