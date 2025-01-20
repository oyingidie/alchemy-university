//TEST CASE
/*
const { assert } = require('chai');
const Rectangle = require('../8-rectangle');
const Shape = require('../5-move_shape');

describe('Rectangle', () => {
    let rectangle;
    let x = 10;
    let y = 15;
    let height = 15;
    let width = 20;
    describe('instance', () => {
        beforeEach(() => {
            rectangle = new Rectangle(x, y, height, width);
        });

        it('should set the properties', () => {
            assert.equal(rectangle.position.x, x);
            assert.equal(rectangle.position.y, y);
            assert.equal(rectangle.height, height);
            assert.equal(rectangle.width, width);
        });

        it('should have a move function', () => {
            assert.equal(typeof rectangle.move, "function", "Could not find the function move on the rectangle instance");
        });

        it('should refer to the Shape prototype in the prototype chain', () => {
            assert(Shape.prototype.isPrototypeOf(rectangle));
        });
    });
}); 
*/

const Shape = require('./5-move_shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

module.exports = Rectangle;
