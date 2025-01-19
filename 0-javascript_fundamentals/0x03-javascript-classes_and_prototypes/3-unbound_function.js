// TEST CASE
/*
const { assert } = require('chai');
const Celebrity = require('../3-unbound_function');

describe('Celebrity', () => {
    describe('Will Smith', () => {
        const celebrity = new Celebrity("Will Smith");

        it('should set their name', () => {
            assert.equal(celebrity.name, "Will Smith");
        });

        it('should set their age', () => {
            assert.equal(celebrity.age, 51);
        });
    });

    describe('Matt Damon', () => {
        const celebrity = new Celebrity("Matt Damon");

        it('should set their name', () => {
            assert.equal(celebrity.name, "Matt Damon");
        });

        it('should set their age', () => {
            assert.equal(celebrity.age, 49);
        });
    });
});
*/

const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, function (age) {
        this.age = age;
    });
}

module.exports = Celebrity;
