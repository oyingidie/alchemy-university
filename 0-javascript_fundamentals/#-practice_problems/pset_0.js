// CODE 0

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

module.exports = isEven;

// CODE 1

function smallerNumber(num1, num2) {
    if (num2 > num1) {
        return num1;
    } else {
        return num2;
    }
}

module.exports = smallerNumber;

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

// CODE 4

function maxSum(num) {
    sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

module.exports = maxSum;
