// TEST CASE
/*
const { assert } = require('chai');
const Circle = require('../6-circle_shape');

describe('Circle', () => {
    let circle;
    let x = 10;
    let y = 15;
    let radius = 15;
    describe('instance', () => {
        beforeEach(() => {
            circle = new Circle(x, y, radius);
        });

        it('should set the properties', () => {
            assert.equal(circle.position.x, x);
            assert.equal(circle.position.y, y);
            assert.equal(circle.radius, radius);
        });
    });
}); 
*/

const Shape = require('./Shape');
// FILE: Shape.js
/* function Shape(x, y) {
    this.position = {x, y};
}

Shape.prototype.move = function(x, y) {
    this.position.x += x;
    this.position.y += y;
}

module.exports = Shape; */

function Circle(x, y, radius) {
    Shape.call(this,/* pass arguments to shape */ x, y);
    // store radius on this
    this.radius = radius;
}

module.exports = Circle;
