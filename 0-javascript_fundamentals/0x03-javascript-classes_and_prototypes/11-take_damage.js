// TEST CASE
/*
const { assert } = require('chai');
const Hero = require('../11-take_damage');

describe('new Hero', () => {
    const hero = new Hero();

    describe('after taking 5 damage', () => {
        before(() => {
            hero.takeDamage(5);
        });

        it('should have 45 health', () => {
            assert.equal(hero.health, 45);
        });

        describe('after taking 20 more damage', () => {
            before(() => {
                hero.takeDamage(20);
            });

            it('should have 25 health', () => {
                assert.equal(hero.health, 25);
            });
        });
    });
});
*/

class Hero {
    constructor() {
        this.health = 50;
    }
    
    takeDamage(number) {
        this.health -= number;
    }
}

module.exports = Hero;
