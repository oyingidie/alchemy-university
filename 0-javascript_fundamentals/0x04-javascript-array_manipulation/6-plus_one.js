// TEST CASE
/*
const plusOne = require('../6-plus_one');
const {assert} = require('chai');

describe('plus one', () => {
    it('should add one to each element for a single element', () => {
        assert.sameOrderedMembers([1], plusOne([0]));
    });

    it('should add one to each element for several elements', () => {
        assert.sameOrderedMembers([1, 2, 3], plusOne([0, 1, 2]));
    });
});
*/

function plusOne(arr) {
    return arr.map(i => i + 1);
}

module.exports = plusOne;
