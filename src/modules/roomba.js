class Roomba {
    constructor() {
        this.x;
        this.y;
        this.drivingInstructions = [];
        this.boundaries = [];
        this.cleaned = 0;
    }

    getPosition() {
        return [this.x, this.boundaries[1] - 1 - this.y];
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getCleaned() {
        return this.cleaned;
    }
    
    getDrivingInstructions() {
        return this.drivingInstructions;
    }

    setPosition(x, y) {
        this.x = y;
        this.y = x;
    }

    setDrivingInstructions(drivingInstructions) {
        this.drivingInstructions = drivingInstructions;
    }

    setBoundaries(boundaries) {
        this.boundaries = boundaries;
    }

    setCleaned(cleaned) {
        this.cleaned = cleaned;
    }

    move(direction) {
        let directionStr = '';
        
        switch(direction) {
            case 'N':
                if (this.y > 0) {
                    this.y -= 1;
                    directionStr = 'North';
                }
                break;

            case 'S':
                if (this.y < this.boundaries[0] - 1) {
                    this.y += 1;
                    directionStr = 'South';
                }
                break;
            
            case 'E':
                if (this.x < this.boundaries[1] - 1) {
                    this.x += 1;
                    directionStr = 'East';
                }
                break;
            
            case 'W':
                if (this.x > 0) {
                    this.x -= 1;
                    directionStr = 'West';
                }
                break;
        }

        if (directionStr === '') {
            console.log(`\nRoomba skidding in place and remained at ${this.getPosition()}`);
        } else {
            console.log(`\nMoving the Roomba in the ${directionStr} direction to ${this.getPosition()}`);
        }

    }
    
}

module.exports = Roomba;
