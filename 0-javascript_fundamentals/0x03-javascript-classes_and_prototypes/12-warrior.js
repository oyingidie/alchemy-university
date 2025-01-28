// TEST CASE
/*
const { assert } = require('chai');
const Warrior = require('../12-warrior');
const Hero = require('../11-take_damage');

describe('new Warrior', () => {
    const warrior = new Warrior();
    
    it('should have 50 health', () => {
        assert.equal(warrior.health, 50);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });
});
*/

const Hero = require('./Hero');

class Warrior extends Hero {}

module.exports = Warrior;
