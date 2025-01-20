// TEST CASE
/*
const { assert } = require('chai');
const Shape = require('../5-move_shape');

let shape;
let x = 5;
let y = 10;
let moveX = 20;
let moveY = 30;
describe('Shape Instance', () => {
    beforeEach(() => {
        shape = new Shape(x, y);
    });

    it('should set the initial position coordinates', () => {
        assert.equal(shape.position.x, x);
        assert.equal(shape.position.y, y);
    });

    it('should have a function called move', () => {
        assert.equal(typeof shape.move, "function");
    });

    it('should handle a move', () => {
        shape.move(moveX, moveY);
        assert.equal(shape.position.x, x + moveX);
        assert.equal(shape.position.y, y + moveY);
    });
});
*/

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y};
}

Shape.prototype.move = function(x, y) {
    // move the shape

}

module.exports = Shape;
