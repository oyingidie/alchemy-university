// TEST CASE
/*const { assert } = require('chai');
const sortStringsDown = require('../3-strings_descending');

describe('sortStringsDown', () => {
    it('should maintain sort order for sorted strings', () => {
        let actual = ["c", "b", "a"];
        sortStringsDown(actual);
        const expected = ["c", "b", "a"];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted strings', () => {
        let actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
        sortStringsDown(actual);
        const expected = ["oranges", "limes", "lemons", "berries", "apples"];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });
});
*/

function sortStringsDown(array) {
    array.sort((a, b) => {
        return b.localeCompare(a);
    })
}

module.exports = sortStringsDown;
