// TEST CASE
/*
const { assert } = require('chai');
const sortStringsUp = require('../2-strings_ascending');

describe('sortStringsUp', () => {
    it('should maintain sort order for sorted strings', () => {
        let actual = ['a', 'b', 'c'];
        sortStringsUp(actual);
        const expected = ['a', 'b', 'c'];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted strings', () => {
        let actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
        sortStringsUp(actual);
        const expected = ['apples', 'berries', 'lemons', 'limes', 'oranges'];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });
});
*/

function sortStringsUp(array) {
    array.sort((a, b) => {
        return a.localeCompare(b);
    });
}

module.exports = sortStringsUp;
