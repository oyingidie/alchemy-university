// TEST CASE
/*
const canAccess = require('../17-else_if');
const { assert } = require('chai');

describe('canAccess', () => {
    describe('if they purchased a subscription', () => {
        it('should return true', () => {
            assert.equal(canAccess(true, false), true);
        });
    });
    describe('if they have a free trial', () => {
        it('should return true', () => {
            assert.equal(canAccess(false, true), true);
        });
    });
    describe('if they have not purchased and have no trial', () => {
        it('should return false', () => {
            assert.equal(canAccess(false, false), false);
        });
    });
});
*/

function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription) {
        return true;
    } else if (freeTrial) {
        return true;
    }
    return false;
}

module.exports = canAccess;
