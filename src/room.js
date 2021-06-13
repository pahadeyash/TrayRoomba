const Roomba = require('./roomba.js');

class Room {
    constructor(width, height, roombaPosition, dirtPatchPositions, drivingInstructions) {
        this.width = width;
        this.height = height;
        this.room = this.setRoom();
        this.roomba = this.placeRoomba(roombaPosition, drivingInstructions);
        this.dirtPositions = this.setDirtPatches(dirtPatchPositions);
    }

    setRoom() {
        const room = [];
        for(let i = 0; i < this.width; i++) {
            const row = [];
            for(let j = 0; j < this.height; j++) {
                row.push(" ");
            }
            room.push(row);
        }
        return room
    }
    
    placeRoomba(roombaPosition, drivingInstructions) {
        const roomba = new Roomba();
        const numRows = this.room.length;
        const x = numRows - 1 - parseInt(roombaPosition[1]);
        const y = parseInt(roombaPosition[0]);
        this.room[x][y] = "R";
        roomba.setPosition(x,y);
        roomba.setDrivingInstructions(drivingInstructions);
        roomba.setBoundaries([this.width, this.height]);
        return roomba;
    }

    setDirtPatches(dirtPositions) {
        let num_rows = this.room.length;
        for (let i = 0; i < dirtPositions.length; i++) {
            let x = num_rows - 1 - parseInt(dirtPositions[i][1]);
            let y = parseInt(dirtPositions[i][0]);
            this.room[x][y] = "D";
        }
    }

    printRoom() {
        let xAxis = "  ";
        for (let i = 0; i < this.width; i++) {
            let row = (this.height - 1 - i) +  "|";
            for (let j = 0; j < this.height; j++) {
                row += this.room[i][j] + " |";
            }
            console.log(row);
            xAxis += " " + i + " ";
        }
        console.log(xAxis);
    }

    clean() {
        console.log("\nInitial Set Up Of The Room...");
        this.printRoom();
        var drivingInstructions = this.roomba.getDrivingInstructions();
        var cleaned = this.roomba.getCleaned();
        for (var i = 0; i < drivingInstructions.length; i++){
            this.room[this.roomba.getY()][this.roomba.getX()] = " ";
            this.roomba.move(drivingInstructions[i]);
            if (this.room[this.roomba.getY()][this.roomba.getX()] == "D"){
                console.log("Roomba cleaned a patch of dirt!")
                cleaned += 1
            }
            this.room[this.roomba.getY()][this.roomba.getX()] = "R";
            this.printRoom();
        }
        this.roomba.setCleaned(cleaned);
        this.printCleanResult();
    }

    printCleanResult() {
        console.log("\nFinal Result")
        console.log(`${this.roomba.getPosition()[0]} ${this.roomba.getPosition()[1]}`);
        console.log(`${this.roomba.getCleaned()}`);
    }

  }
  
  module.exports = Room;