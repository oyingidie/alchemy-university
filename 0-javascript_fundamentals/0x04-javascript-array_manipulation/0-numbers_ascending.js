// TEST CASE
/*
const { assert } = require('chai');
const sortUp = require('../0-numbers_ascending');

describe('sortUp', () => {
    it('should maintain sort order for sorted elements', () => {
        let actual = [5, 10, 15];
        sortUp(actual);
        const expected = [5, 10, 15];
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted elements', () => {
        let actual = [7, 4, 2, 3, 0, 5];
        sortUp(actual);
        const expected = [0, 2, 3, 4, 5, 7];
        assert.sameOrderedMembers(actual, expected);
    });
});
*/

function sortUp(array) {
    array.sort((a, b) => {
        return a - b;
    })
}

module.exports = sortUp;
