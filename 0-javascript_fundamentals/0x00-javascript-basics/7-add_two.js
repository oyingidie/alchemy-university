// TEST CASE
/*
const addTwo = require('../7-add_two');
const {assert} = require('chai');

it('should add two', () => {
    assert.equal(addTwo(2), 4);
    assert.equal(addTwo(6), 8);
    assert.equal(addTwo(10), 12);
});
*/

function addTwo(input) {
    return input + 2;
}

module.exports = addTwo;
