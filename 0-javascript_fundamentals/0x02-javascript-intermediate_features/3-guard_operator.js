// TEST CASE
/*
const friendName = require('../3-guard_operator');
const { assert } = require('chai');

describe('friendName', () => {
    describe('when friend is defined', () => {
        it('should get the name', () => {
            assert.equal(friendName({ name: 'Bob' }), 'Bob');
            assert.equal(friendName({ name: 'Jim' }), 'Jim');
        });
    });
    describe('when friend is undefined', () => {
        it('should return undefined', () => {
            assert.equal(friendName(), undefined);
        });
    });
});
*/

function friendName(friend) {
    return friend && friend.name;
}

module.exports = friendName;
