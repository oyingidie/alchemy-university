// TEST CASE
/*
const { assert } = require('chai');
const lessThanFive = require('../12-less_than_five');

describe('less than five', () => {
    it('should filter a few elements less than 5', () => {
        const expected = [0, 2, 4];
        const actual = lessThanFive([0, 2, 4, 6, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter several elements less than 5', () => {
        const expected = [1, 2, 3, 4];
        const actual = lessThanFive([1, 2, 3, 4, 5, 6, 7, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});
*/

function lessThanFive(array) {
    return array.filter((element) => {
        return element < 5;
    });
}

module.exports = lessThanFive;
