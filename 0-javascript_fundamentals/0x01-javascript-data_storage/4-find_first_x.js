// TEST CASE
/*
const findFirstX = require('../4-find_first_x');
const { assert } = require('chai');

describe('findFirstX', () => {
    it('should find the first x in a short string', () => {
        assert.equal(findFirstX("abcx"), 3);
    });

    it('should find the first x in a long string', () => {
        assert.equal(findFirstX("should find the first x in a long string"), 22);
    });
});
*/

function findFirstX(string) {
    return string.indexOf("x");
}

module.exports = findFirstX;
