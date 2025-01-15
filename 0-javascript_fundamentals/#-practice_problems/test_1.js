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
const halfValue = require('../pset_1');

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

// TEST CASE 2

const { assert } = require('chai');
const countC = require('../pset_1');

describe('countC', () => {
    it('should return zero', () => {
        assert.equal(countC('pizza'), 0);
    });

    it('should handle lowercase c', () => {
        assert.equal(countC('character'), 2);
    });

    it('should handle uppercase c', () => {
        assert.equal(countC('Circus'), 2);
    });
})

// TEST CASE 3

const { assert } = require('chai');
const countVowels = require('../pset_1');

describe('countVowels', () => {
    it('should return zero', () => {
        assert.equal(countVowels('bczx'), 0);
    });

    it('should count all vowels', () => {
        assert.equal(countVowels("Igloo"), 3)
    })

    describe('uppercase vowels', () => {
        it('should count all uppercase vowels', () => {
            assert.equal(countVowels('AEIOU'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('APPLE'), 2);
        });
    })

    describe('lowercase vowels', () => {
        it('should count all lowercase vowels', () => {
            assert.equal(countVowels('aeiou'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('apple'), 2);
        });
    })
})

// TEST CASE 4

const { assert } = require('chai');
const reverse = require('../pset_1');

describe('reverse', () => {
    it('should return an empty string', () => {
        assert.equal(reverse(""), "");
    });

    it('should reverse a short string', () => {
        assert.equal(reverse('cat'), 'tac');
    });

    it('should reverse a long string', () => {
        assert.equal(reverse('macintosh'), 'hsotnicam');
    });
})
