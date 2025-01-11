// TEST CASE
/*
const isEqual = require('../12-is_equal');
const { assert } = require('chai');

describe('isEqual', () => {
    describe('if the values are equal', () => {
        it('should return true', () => {
            assert.equal(isEqual(2, 2), true);
        });
    });
});
*/

function isEqual(a, b) {
    if (a === b) {
        return true;
    }
}

module.exports = isEqual;
