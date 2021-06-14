/** Class representing a room. */
const Roomba = require('./roomba.js');
//"R" used to represent the roomba in room
const roombaStr = "R";
//"D" used to represent the dirt patches in room
const dirtPatchStr = "D";

class Room {

    /**
     * Create a room.
     * @param {integer} width Width of the room
     * @param {integer} length Length of the room
     * @param {integer} roombaXPosition X coordinate of the roomba
     * @param {integer} roombaYPosition Y coordinate of the roomba
     * @param {arrray} dirtPatchPositions Array containing the coordinates of all dirt patches
     * @param {arrray} drivingInstructions Array containing the driving instructions for the roomba
     */

    constructor(width, length, roombaXPosition, roombaYPosition, dirtPatchPositions, drivingInstructions) {
        this.width = width;
        this.length = length;
        this.room = this.setRoom();
        this.roomba = this.placeRoomba(roombaXPosition, roombaYPosition, drivingInstructions);
        this.dirtPositions = this.setDirtPatches(dirtPatchPositions);
    }

    /**
     * Returns an array representing an empty room
     */
    
    setRoom() {
        const room = [];
        for(let i = 0; i < this.width; i++) {
            const row = [];
            for(let j = 0; j < this.length; j++) {
                row.push(" ");
            }
            room.push(row);
        }
        return room
    }
    
    /**
     * Returns a roomba object and places it in room
     * @param {integer} roombaXPosition X coordinate of the roomba
     * @param {integer} roombaYPosition Y coordinate of the roomba
     * @param {arrray} drivingInstructions Array containing the driving instructions for the roomba
     */

    placeRoomba(roombaXPosition, roombaYPosition, drivingInstructions) {
        const roomba = new Roomba();
        const numRows = this.room.length;

        //values need to be reflected since point of origin is lower left side of the room
        const x = numRows - 1 - parseInt(roombaYPosition); 
        const y = parseInt(roombaXPosition);

        this.room[x][y] = roombaStr;
        roomba.setPosition(x,y);
        roomba.setDrivingInstructions(drivingInstructions);
        roomba.setBoundaries([this.width, this.length]);
        return roomba;
    }

    /**
     * Place dirt patches in room 
     */

    setDirtPatches(dirtPositions) {
        let num_rows = this.room.length;
        for (let i = 0; i < dirtPositions.length; i++) {
            const x = num_rows - 1 - parseInt(dirtPositions[i][1]);
            const y = parseInt(dirtPositions[i][0]);
            this.room[x][y] = dirtPatchStr;
        }
    }

    /**
     * Print current state of the room
     */

    printRoom() {
        let xAxis = "  ";
        for (let i = 0; i < this.width; i++) {
            let row = (this.length - 1 - i) +  "|";
            for (let j = 0; j < this.length; j++) {
                row += this.room[i][j] + " |";
            }
            console.log(row);
            xAxis += " " + i + " ";
        }
        console.log(xAxis);
    }

    /**
     * Main method to kick off roomba cleaning room
     */

    clean() {
        console.log("\nInitial Set Up Of The Room...");
        this.printRoom();
        const drivingInstructions = this.roomba.getDrivingInstructions();
        let cleaned = this.roomba.getCleaned();
        for (let i = 0; i < drivingInstructions.length; i++){
            // clearing current position of roomba in room
            this.room[this.roomba.getY()][this.roomba.getX()] = " ";
            this.roomba.move(drivingInstructions[i]);
            // condition to check if roomba is in the position of a dirt patch
            if (this.room[this.roomba.getY()][this.roomba.getX()] == dirtPatchStr){
                console.log("Roomba cleaned a patch of dirt!");
                cleaned += 1;
            }
            this.room[this.roomba.getY()][this.roomba.getX()] = roombaStr;
            this.printRoom();
        }
        this.roomba.setCleaned(cleaned); 
        this.printCleanResult();
    }

    /**
     * Print final results after roomba has cleaned
     */

    printCleanResult() {
        console.log("\nFinal Result")
        console.log(`${this.roomba.getPosition()[0]} ${this.roomba.getPosition()[1]}`);
        console.log(`${this.roomba.getCleaned()}`);
    }

  }
  
  module.exports = Room;