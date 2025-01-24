// TEST CASE
/*
const factorial = require('../0-base_case');
const { assert } = require('chai');

describe('factorial', () => {
    describe('base case', () => {
        it('should return 1', () => {
            assert.equal(factorial(1), 1);
        });
    });
});
*/

function factorial(n) {
    if (n === 1) {
        return 1;
    }
}

module.exports = factorial;
