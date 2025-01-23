// TEST CASE
/*
const largest = require('../20-largest_positive');
const { assert } = require('chai');

describe('largest positive', function () {
    it('should take the largest positive of 1 negative element', () => {
        assert.equal(largest([-3]), 1);
    });

    it('should take the largest positive of 5 non-positive elements', () => {
        assert.equal(largest([-3, -2, -10, -15, 0]), 1);
    });

    it('should take the largest positive of 10 positive and negative elements', () => {
        assert.equal(largest([2, -8, 4, -10, 1, -9, 3, -5, 6, 7]), 7);
    });
});
*/

// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2, 3, 5, 1, 4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue
            ? accumulator : currentValue; // <-- determine largest value
    }, 1);
}

module.exports = largest;
