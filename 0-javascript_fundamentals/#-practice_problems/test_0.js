// TEST CASE 0

const isEven = require('../pset_0');
const { assert } = require('chai');

describe('isEven', () => {
    describe('even numbers', () => {
        it('should return true', () => {
            assert.equal(isEven(2), true);
        });
        it('should return true', () => {
            assert.equal(isEven(4), true);
        });
        it('should return true', () => {
            assert.equal(isEven(10), true);
        });
    });
    describe('odd numbers', () => {
        it('should return false', () => {
            assert.equal(isEven(1), false);
        });
        it('should return false', () => {
            assert.equal(isEven(3), false);
        });
        it('should return false', () => {
            assert.equal(isEven(9), false);
        });
    });
});

// TEST CASE 1

const { assert } = require('chai');
const smallerNumber = require('../pset_0');

describe('smallerNumber', () => {
    it('should return the smaller number', () => {
        assert.equal(smallerNumber(3, 5), 3);
    });

    it('should return the smaller number', () => {
        assert.equal(smallerNumber(10, 4), 4);
    });
})
*/

// TEST CASE 2
  
const assert = require('assert');
const actualMessage = require('../pset_0');
const fakeName = require('../fakeName');

const expectedMessage = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

it('should replace the name', () => {
    const isEqual = (actualMessage === expectedMessage);

    if (!isEqual) {
        console.log("Your Message: ", actualMessage)
        console.log("Expected Message: ", expectedMessage)
        assert(false);
    }
    else {
        assert(true);
    }
});

// TEST CASE 3

const { assert } = require('chai');
const checkNumber = require('../pset_0');

describe('checkNumber', () => {
    it('should return positive', () => {
        assert.equal(checkNumber(15), 'positive');
    });

    it('should return negative', () => {
        assert.equal(checkNumber(-5), 'negative');
    });

    it('should return zero', () => {
        assert.equal(checkNumber(0), 'zero');
    });
})
*/

// TEST CASE 4
  
const { assert } = require('chai');
const maxSum = require('../pset_0');

describe('maxSum', () => {
    it('should return zero', () => {
        assert.equal(maxSum(0), 0);
    });

    it('should return the max sum of 1', () => {
        assert.equal(maxSum(1), 1);
    });

    it('should return the max sum of positive integer', () => {
        assert.equal(maxSum(5), 15);
    });

    it('should return zero for a negative integer', () => {
        assert.equal(maxSum(-5), 0)
    })
})
