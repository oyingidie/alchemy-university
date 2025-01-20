// TEST CASE
/*
const { assert } = require('chai');
const Hero = require('../10-Hero');

describe('new Hero', () => {
    const hero = new Hero();

    it('should have 50 health', () => {
        assert(hero.health, "Did you a health property to the hero instance? (Hint: use `this`)")
        assert.equal(hero.health, 50);
    });
});
*/

class Hero {
    constructor() {
        this.health = 50;
    }
}

module.exports = Hero;
