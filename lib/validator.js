const robotFacing = ['north', 'east', 'south', 'west']; // clockwise
const XY = {
    maxX : 5, // x total
    maxY : 5 // y total
}
const squareSize = 100; // all grids are equal width and height
const xStart = 50; // axis x starts from 50px
const yStart = 50; // axis y starts from 50px
        
module.exports = {
    validateBound: function (input, toCheckAxis) {
        if (isNaN(input)) {
            console.log("Please enter a numeric coordinates!");
            return false;
        } else if (input < 0 || input > (XY[toCheckAxis] - 1)) {
            console.log("Coordinates out of range!");
            return false;
        } else {
            return true;
        }
    },
    validateFacing: function (face) {
        if (robotFacing.indexOf(face.toLowerCase()) < 0) {
            console.log("Wrong facing!");
            return false;
        } else {
            return true;
        }
    }
}