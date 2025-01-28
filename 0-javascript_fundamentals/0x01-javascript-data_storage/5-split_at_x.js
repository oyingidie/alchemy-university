// TEST CASE
/*
const splitAtX = require('../5-split_at_x');
const { assert } = require('chai');

describe('splitAtX', () => {
    it('should handle the first half being longer', () => {
        assert.equal(splitAtX("Happyxdays"), "Happy");
        assert.equal(splitAtX("before the x is long"), "before the ");
    });

    it('should handle the second half being longer', () => {
        assert.equal(splitAtX("10xDeveloper"), "Developer");
        assert.equal(splitAtX("before the x is shorter than after"), " is shorter than after");
    });
});
*/

function splitAtX(string) {
    const indexAtX = string.indexOf("x");
    const firstSplit = string.slice(0, indexAtX);
    const secondSplit = string.slice(indexAtX + 1);

    return firstSplit.length > secondSplit.length
        ? firstSplit
        : secondSplit;
}

module.exports = splitAtX;
