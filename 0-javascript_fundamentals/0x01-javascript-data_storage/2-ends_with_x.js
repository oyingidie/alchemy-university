// TEST CASE
/*
const endsWithX = require('../2-ends_with_x');
const { assert } = require('chai');

describe('endsWithX', () => {
    it('should return true for a string ending with a lower case x', () => {
        assert.equal(endsWithX("pizzax"), true);
    });

    it('should return true for a string ending with an upper case x', () => {
        assert.equal(endsWithX("pizzaX"), true);
    });

    it('should return false for a string not ending with x', () => {
        assert.equal(endsWithX("pizza"), false);
    });
});
*/

function endsWithX(string) {
    if (string[string.length - 1].toLowerCase() === "x") {
        return true;
    } else {
        return false;
    }
}

module.exports = endsWithX;
