// TEST CASE
/*
const { assert } = require('chai');
const shortStrings = require('../14-short_strings');

describe('shortStrings', () => {
    it('should filter a few strings', () => {
        const expected = ["abc", "a"];
        const actual = shortStrings(["abc", "abcd", "a"]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter many strings', () => {
        const expected = ["a", "b", "bat", "cde", "f"];
        const actual = shortStrings(["a", "apples", "b", "bats", "bat", "pizza", "cde", "f"]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});
*/

function shortStrings(array) {
    return array.filter(string =>
        string.length <= 3);
}

module.exports = shortStrings;
