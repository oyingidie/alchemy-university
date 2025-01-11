// TEST CASE
/*
const { assert } = require('chai');
const scream = require('../20-scream');

describe('scream', () => {
    it('should do a scream of length 1', () => {
        assert.equal(scream(1), "a");
    });
    it('should do a scream of length 5', () => {
        assert.equal(scream(5), "aaaaa");
    });
    it('should do a scream of length 10', () => {
        assert.equal(scream(10), "aaaaaaaaaa");
    });
});
*/

function scream(n) {
    let str = "";

    for (let i = 0; i <= n; i++) {
        str += "a";
    }
    return str;
}

module.exports = scream;
