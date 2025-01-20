// TEST CASE
/*
const { assert } = require('chai');
const Warrior = require('../15-passing_health');
const Hero = require('../15-Hero');

describe('new Warrior', () => {
    const health = 25;
    const warrior = new Warrior(health);

    it(`should have ${health} health`, () => {
        assert.equal(warrior.health, health);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });
});

describe('new Hero', () => {
    const health = 10;
    const hero = new Hero(health);

    it(`should have ${health} health`, () => {
        assert.equal(hero.health, health);
    });
});
*/

const Hero = require('./15-Hero');
// FILE: 15-Hero.js
/* class Hero {
    constructor(number) {
        this.health = number;
    }
    takeDamage(number) {
        this.health -= number;
    }
}

module.exports = Hero; */

class Warrior extends Hero {
    constructor(number) {
        super(number);
        this.rage = 0;
    }
    takeDamage(number) {
        super.takeDamage(number);
        this.rage++;
    }
}

module.exports = Warrior;
