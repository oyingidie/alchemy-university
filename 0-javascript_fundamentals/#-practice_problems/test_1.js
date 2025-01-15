// TEST CASE 0

const { assert } = require('chai');
const shortestString = require('../pset_1');

describe('shortestString', () => {
    it('should return the shorter string', () => {
        assert.equal(shortestString('elephant', 'mouse'), 'mouse');
    });

    it('should return the shorter string', () => {
        assert.equal(shortestString('lion', 'gazelle'), 'lion');
    });
})

// TEST CASE 1

const {assert} = require('chai');
const halfValue = require("../pset_1");

const modifyErr = "Whoops! Create a new array, do not modify the original array.";
const compare = (a,b) => JSON.stringify(a) === JSON.stringify(b);

describe('halfValue', () => {
    it('should return an empty array', () => {
        const arr = [];
        const actual = halfValue(arr);
        assert(compare(arr, []), modifyErr);
        assert.sameMembers(actual, []);
    });

    it('should return an array of even value', () => {
        const arr = [2, 4, 6, 8];
        const actual = halfValue(arr);
        assert(compare(arr, [2, 4, 6, 8]), modifyErr);
        assert.sameOrderedMembers(actual, [1, 2, 3, 4]);
    });

    it('should return an array of odd values', () => {
        const arr = [11, 13, 15, 17];
        const actual = halfValue(arr);
        assert(compare(arr, [11, 13, 15, 17]), modifyErr);
        assert.sameOrderedMembers(actual, [6, 7, 8, 9]);
    });
})
