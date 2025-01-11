// TEST CASE
/*
const { assert } = require('chai');
const topDouble = require('../22-top_double');

describe('topDouble', () => {
    it('should determine the top double of 1 less than 5', () => {
        assert.equal(topDouble(1, 5), 4);
    });

    it('should determine the top double of 2 less than 100', () => {
        assert.equal(topDouble(2, 100), 64);
    });

    it('should determine the top double of 5 less than 100', () => {
        assert.equal(topDouble(5, 100), 80);
    });
});
*/

function topDouble(value, top) {
    while (value < top) {
        value *= 2;
    }

    return value / 2;
}

module.exports = topDouble;
