// TEST CASE
/*
const squared = require('../8-squared');
const {assert} = require('chai');

describe('squared', () => {
    it('should square 1', () => {
        assert.equal(squared(1), 1);
    });

    it('should square 2', () => {
        assert.equal(squared(2), 4);
    });

    it('should square 4', () => {
        assert.equal(squared(4), 16);
    });
});
*/

/**
 * Given a number n, square it.
 *
 * @param {number} n 
 * @return {number} n squared
 */
function squared(n) {
    return n * n;
}

module.exports = squared;
