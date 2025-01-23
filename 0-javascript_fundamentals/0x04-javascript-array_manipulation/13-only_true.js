// TEST CASE
/*
const { assert } = require('chai');
const onlyTrue = require('../13-only_true');

describe('only true', () => {
    it('should filter all false values', () => {
        const expected = [];
        const actual = onlyTrue([false, false, false]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter mixed false and true values', () => {
        const expected = [true, true, true];
        const actual = onlyTrue([false, true, true, false, true]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});
*/

function onlyTrue(array) {
    return array.filter(element => element === true);
}

module.exports = onlyTrue;
