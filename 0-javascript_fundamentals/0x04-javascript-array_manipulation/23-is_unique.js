// TEST CASE
/*
const allUnique = require('../23-is_unique');
const { assert } = require('chai');

describe('allUnique', function () {
    it('should handle a single number array', () => {
        assert(allUnique([1], true));
    });

    it('should handle a larger array where it is not all unique', () => {
        const arr = [1, 7, 3, 6, 5, 1, 4, 2];
        assert(!allUnique(arr));
    });

    it('should handle a larger array where it is all unique', () => {
        const arr = [2, 3, 7, 5, 4, 6, 1];
        assert(allUnique(arr));
    });
});
*/

// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1, 2, 3, 1] => false
// [1, 2, 3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (!accumulator) {
            return false;
        }

        return numbers.indexOf(currentValue) === index;
    }, true);
}

module.exports = allUnique;
