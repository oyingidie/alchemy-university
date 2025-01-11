// TEST CASE
/*
const isNotEqual = require('../14-else');
const { assert } = require('chai');

describe('isNotEqual', () => {
    describe('if the values are equal', () => {
        it('should return false', () => {
            assert.equal(isNotEqual(1, 1), false);
        });
    });
    describe('if the values are not equal', () => {
        it('should return true', () => {
            assert.equal(isNotEqual(1, 2), true);
        });
    });
});
*/

function isNotEqual(a, b) {
    if (a !== b) {
        return true;
    } else {
        return false;
    }
}

module.exports = isNotEqual;
