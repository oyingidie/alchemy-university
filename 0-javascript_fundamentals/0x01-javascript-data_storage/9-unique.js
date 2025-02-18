// TEST CASE
/*
const { assert } = require('chai');
const unique = require('../9-unique');

describe('unique', () => {
    it('should return an array with all unique elements', () => {
        assert.sameMembers(unique([1, 2, 3]), [1, 2, 3]);
    });

    it('should handle an array with a few duplicates', () => {
        const original = [1, 2, 2, 3, 4, 3];
        assert.sameMembers(unique(original), [1, 2, 3, 4]);
        assert.equal(original.length, 6, "the original array should be unmodified");
    });

    it('should handle a larger array with only duplicates', () => {
        const original = [1, 1, 1, 1, 1, 1, 1];
        assert.sameMembers(unique(original), [1]);
        assert.equal(original.length, 7, "the original array should be unmodified");
    });
});
*/

function unique(array) {
    const unique = [];
    
    for (let i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i]);
        }
    }

    return unique;
}

module.exports = unique;
