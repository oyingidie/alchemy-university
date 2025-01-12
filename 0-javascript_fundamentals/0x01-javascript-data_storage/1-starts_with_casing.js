// TEST CASE
/*
const startsWithX = require('../1-starts_with_casing');
const { assert } = require('chai');

describe('startsWithX', () => {
    it('should return true for a string starting with x', () => {
        assert.equal(startsWithX("x"), true);
        assert.equal(startsWithX("xpizza"), true);
    });

    it('should return false for a string not starting with x', () => {
        assert.equal(startsWithX("pizza"), false);
        assert.equal(startsWithX("zyx"), false);
    });
});
*/

function startsWithX(string) {
    if (string[0].toUpperCase() === "X") {
        return true;
    } 

    return false;
}

module.exports = startsWithX;
