// TEST CASE
/*
const { assert } = require('chai');
const firstThree = require('../16-first_three');

describe('firstThree', () => {
    it('should filter a few strings', () => {
        const expected = ['a', 'b', 'c'];
        const actual = firstThree(['a', 'b', 'c', 'd', 'e']);
        console.log({expected, actual});
        assert.sameDeepMembers(expected, actual);
    });
    it('should filter a several numbers', () => {
        const expected = [10,20,30];
        const actual = firstThree([10,20,30,40,50,60,70,80,90,100]);
        console.log({ expected, actual });
        assert.sameDeepMembers(expected, actual);
    });
});
*/

function firstThree(array) {
    return array.filter((element, i) => {
        return i < 3;
    });
}

module.exports = firstThree;
