// TEST CASE
/*
const factorial = require('../1-second_case');
const { assert } = require('chai');

describe('factorial', () => {
    describe('base case', () => {
        it('should return 1', () => {
            assert.equal(factorial(1), 1);
        });
    });

    describe('more cases', () => {
        it('should handle 2', () => {
            assert.equal(factorial(2), 2);
        });
    });
});
*/

function factorial(n) {
    if (n === 1) return 1;
    
    return n * factorial(n - 1);
}

module.exports = factorial;
