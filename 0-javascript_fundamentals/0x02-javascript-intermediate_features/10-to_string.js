// TEST CASE
/*
const combineToString = require('../10-to_string');
const { assert } = require('chai');

describe('combineToString', () => {
    describe('given two numbers', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(1,1), "11");
            assert.strictEqual(combineToString(5,10), "510");
        });
    });
    describe('given a number and a string', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(2, "2"), "22");
            assert.strictEqual(combineToString("5", 55), "555");
        });
    });
    describe('given a number and a boolean', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(2, true), "2true");
            assert.strictEqual(combineToString(false, 55), "false55");
        });
    });
});
*/

function combineToString(a, b) {
    const string = b.toString();
    // IMPLICIT
    /* const string = "" + b; */

    return a + string;
}

module.exports = combineToString;
