const Roomba = require('./roomba.js');

class Room {
    constructor() {
      this.room = [];
      this.roomba = new Roomba();
      this.dirtPositions = [];
    }

    getRoom(){
        return this.room;
    }

    getRoomba() {
        return this.roomba;
    }

    getDirtPositions() {
        return this.dirtPositions;
    }

    setRoom(roomDimension) {
        var width = parseInt(roomDimension[0]);
        var height = parseInt(roomDimension[1]);
        for(var i = 0; i < width; i++) {
            var row = []
            for(var j = 0; j < height; j++) {
                row.push(" ")
            }
            this.room.push(row)
        }
        this.roomba.setBoundaries([width, height]);
    }
    
    placeRoomba(roombaPosition) {
        var numRows = this.room.length;
        var x = numRows - 1 - parseInt(roombaPosition[1]);
        var y = parseInt(roombaPosition[0]);
        this.room[x][y] = "R";
        this.roomba.setPosition(x,y);
    }

    setDirtPatches(dirtPositions) {
        var num_rows = this.room.length;
        for (var i = 0; i < dirtPositions.length; i++) {
            var x = num_rows - 1 - parseInt(dirtPositions[i][1])
            var y = parseInt(dirtPositions[i][0])
            this.room[x][y] = "D"
        }
    }

    printRoom() {
        var roomVar = this.room
        var width = parseInt(roomVar.length)
        var height = parseInt(roomVar[0].length)
        var xAxis = "  "
        for (var i = 0; i < width; i++){
            var row = (height - 1 - i) +  "|"
            for (var j = 0; j< height; j++){
                row += roomVar[i][j] + " |"
            }
            console.log(row)
            xAxis += " " + i + " "
        }
        console.log(xAxis)
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
    }

  }
  
  module.exports = Room;