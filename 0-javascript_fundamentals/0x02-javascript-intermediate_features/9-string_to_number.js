// TEST CASE
/*
const toNumber = require('../9-string_to_number');
const { assert } = require('chai');

describe('toNumber', () => {
    describe('given a convertible number', () => {
        it('should convert it', () => {
            assert.strictEqual(toNumber("1"), 1);
            assert.strictEqual(toNumber("3"), 3);
            assert.strictEqual(toNumber("10"), 10);
        });
    });
    describe('given a non-convertible number', () => {
        it('should return zero', () => {
            assert.strictEqual(toNumber("a"), 0);
            assert.strictEqual(toNumber("pizza"), 0);
            assert.strictEqual(toNumber("abc123"), 0);
        });
    });
});
*/

function toNumber(string) {
    const number = Number(string);
    // IMPLICIT
    /* const number = +string; */
    
    return number || 0;
}

module.exports = toNumber;
