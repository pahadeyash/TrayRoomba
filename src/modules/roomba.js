/** Class representing a roomba. */

class Roomba {

    /**
     * Create a roomba.
     * @param {integer} x X coordinate of the roomba
     * @param {integer} y Y coordinate of the roomba
     * @param {array} drivingInstructions Array containing the driving instructions for the roomba
     * @param {array} boundaries Array containing the boundaries that the roomba can operate within 
     * @param {integer} cleaned Number of dirt patch spots the roomba has cleaned
     */

    constructor() {
        this.x = 0;
        this.y = 0;
        this.drivingInstructions = [];
        this.boundaries = [];
        this.cleaned = 0;
    }

    /**
     * Return array containing the position of the roomba. 
     * Since the origin position of the roomba is on the lower left corner the positions need to 
     * adjusted accordingly. 
     */

    getPosition() {
        return [this.x, this.boundaries[1] - 1 - this.y];
    }

    /**
     * Return X coordinate of roomba 
     */

    getX() {
        return this.x;
    }

    /**
     * Return Y coordinate of roomba 
     */

    getY() {
        return this.y;
    }

    /**
     * Return number of cleaned dirt patches
     */

    getCleaned() {
        return this.cleaned;
    }
    
    /**
     * Return array of driving instructions
     */

    getDrivingInstructions() {
        return this.drivingInstructions;
    }

    /** 
     * Set x and y coordinates of the roomba. Since the origin position of the 
     * roomba is on the lower left corner the positions need to adjusted accordingly.  
     * @param {integer} x X coordinate of the roomba
     * @param {integer} y Y coordinate of the roomba
     */

    setPosition(x, y) {
        this.x = y;
        this.y = x;
    }

    /** 
     * Set driving instructions 
     * @param {arrray} drivingInstructions Array containing the driving instructions for the roomba
     */

    setDrivingInstructions(drivingInstructions) {
        this.drivingInstructions = drivingInstructions;
    }

    /** 
     * Set boundaries for roomba to operate within
     * @param {arrray} boundaries Array containing the boundaries
     */

    setBoundaries(boundaries) {
        this.boundaries = boundaries;
    }

    /** 
     * Set number of dirt patches cleaned 
     * @param {integer} cleaned Number of dirt patches cleaned 
     */

    incrementCleaned() {
        this.cleaned += 1;
    }

    /** 
     * Move roomba in specified direction while checking it is within the boundaries of the room
     * @param {string} direction Direction for the roomba to move to 
     */

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
