// TEST CASE
/*
const isNotEqual = require('../13-is_not_equal');
const { assert } = require('chai');

describe('isNotEqual', () => {
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
    }
}

module.exports = isNotEqual;
