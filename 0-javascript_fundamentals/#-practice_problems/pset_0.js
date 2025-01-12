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

// TEST CASE 2
/*
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
*/

// CODE 2
const fakeName = require('./fakeName');

// FILE: fakeName.js
/* const faker = require('faker');

module.exports = faker.name.findName() */

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;

// TEST CASE 3
/*
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

// CODE 3
function checkNumber(num) {
    if (num === 0) {
        return "zero";
    } else if (num > 0) {
        return "positive";
    } else {
        return "negative";
    }
}

module.exports = checkNumber;
