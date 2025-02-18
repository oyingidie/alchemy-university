// TEST CASE
/*
const { assert } = require('chai');
const Shape = require('../4-taking_shape');

describe('Shape', () => {
    it('should be a function', () => {
        assert.equal(typeof Shape, 'function');
    });

    let shape;
    let x = 10;
    let y = 15;
    describe('instance', () => {
        beforeEach(() => {
            shape = new Shape(x, y);
        });

        it('should have a position property associated to an object', () => {
            assert(shape.position, "could not find property position on the shape instance");
            assert.equal(typeof shape.position, "object");
        });

        it('should set the position coordinates', () => {
            assert.equal(shape.position.x, x);
            assert.equal(shape.position.y, y);
        });
    });
}); 
*/

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y};
}

module.exports = Shape;
