class Roomba {
    constructor() {
        this.x;
        this.y;
        this.cleaned = 0;
        this.drivingInstructions = [];
        this.boundaries = [];
    }

    getPosition(roomLength) {
        return [this.x, roomLength - 1 - this.y];
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

    setCleaned(cleaned) {
        this.cleaned = cleaned;
    }

}

module.exports = Roomba;
