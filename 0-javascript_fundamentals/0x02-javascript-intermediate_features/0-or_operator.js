// TEST CASE
/*
const willEat = require('../0-or_operator');
const { assert } = require('chai');

describe('willEat', () => {
    describe('all variables are true', () => {
        it('should be true', () => {
            assert.equal(willEat(true, true, true), true);
        });
    });
    describe('one variable is true', () => {
        it('should be true', () => {
            assert.equal(willEat(true, false, false), true);
            assert.equal(willEat(false, true, false), true);
            assert.equal(willEat(false, false, true), true);
        });
    });
    describe('no variables are true', () => {
        it('should be false', () => {
            assert.equal(willEat(false, false, false), false);
        });
    });
});
*/

function willEat(hasPizza, hasDonuts, hasCookies) {
    if (hasPizza || hasDonuts || hasCookies) {
        return true;
    }

    return false;
}

module.exports = willEat;
