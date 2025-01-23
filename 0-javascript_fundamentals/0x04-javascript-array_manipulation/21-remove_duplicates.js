// TEST CASE
/*
const removeDuplicates = require('../21-remove_duplicates');
const { assert } = require('chai');

describe('removing duplicates', function () {
    it('should handle a single element', () => {
        assert.sameMembers(removeDuplicates([1]), [1]);
    });

    it('should handle an array of five elements with a couple duplicates', () => {
        assert.sameMembers(removeDuplicates([1, 1, 4, 1, 5]), [1, 4, 5]);
    });

    it('should handle a larger array of mostly duplicates', () => {
        assert.sameMembers(removeDuplicates([2, 1, 2, 3, 3, 1, 2, 2, 3, 3, 2, 1, 1, 1]), [1, 2, 3]);
    });
});
*/

// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2, 2, 3, 5, 1, 3, 4] => [2, 3, 5, 1, 4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }

        return accumulator;
    },/* TODO: add initial value */ []);
}

module.exports = removeDuplicates;
