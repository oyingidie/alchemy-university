// TEST CASE
/*
const { assert } = require('chai');
const removeOccurrences = require('../11-remove_occurrences');

describe('removeOccurrences', () => {
    it('should handle a single removal in an array', () => {
        let array = [1, 2, 3];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2, 3]);
    });

    it('should handle removing multiple elements from an array', () => {
        let array = [1, 2, 2, 3, 4, 3];
        const returned = removeOccurrences(array, 2);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [1, 3, 4, 3]);
    });

    it('should handle removing all elements in an array', () => {
        let array = [1, 1, 1, 1, 1, 1, 1];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, []);
    });
});
*/

function removeOccurrences(array, num) {
    const lastIndex = array.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}

module.exports = removeOccurrences;
