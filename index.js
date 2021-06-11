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
    var roombaPosition = fileData[1].split(" ");
    var dirtPatchPositions = getDirtPatches(fileData);
    var drivingInstructions =  fileData[fileData.length - 1].split('');
    room.setRoom(roomDimensions);
    room.setDirtPatches(dirtPatchPositions);
    room.placeRoomba(roombaPosition);
    room.setDirtPatches(dirtPatchPositions);
    room.getRoomba().setDrivingInstructions(drivingInstructions);
}

function printFinalResult(){
    console.log("\nFinal Result")
    console.log(room.getRoomba().getPosition()[0] + " " + room.getRoomba().getPosition()[1])
    console.log(String(room.getRoomba().getCleaned()));
}

function main(inputText) {
    room = new Room();
    intializeRoom(room, inputText);
    room.clean();
    printFinalResult(room);
}

main('./input.txt');

module.exports = { main }