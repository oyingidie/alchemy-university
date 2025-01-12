// TEST CASE 0
/*
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
*/

// CODE 0
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

module.exports = isEven;

// TEST CASE 1
/*
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

// CODE 1
function smallerNumber(num1, num2) {
    if (num2 > num1) {
        return num1;
    } else {
        return num2;
    }
}

module.exports = smallerNumber;
