// TEST CASE
/*
const { assert } = require('chai');
const sumEven = require('../8-sum_even');

describe('sumEven', () => {
    it('should handle a single element array', () => {
        assert.equal(sumEven([2]), 2);
    });

    it('should handle an array with a few sequential elements', () => {
        assert.equal(sumEven([1, 2, 3, 4, 5]), 6);
    });

    it('should handle a larger array', () => {
        assert.equal(sumEven([9, 12, 14, 16, 19]), 42);
    });
});
*/

function sumEven(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    return sum;
}

module.exports = sumEven;
