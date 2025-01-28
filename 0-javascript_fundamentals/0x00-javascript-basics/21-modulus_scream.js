// TEST CASE
/*
const { assert } = require('chai');
const scream = require('../21-modulus_scream');

describe('scream', () => {
    it('should do a scream of length 1', () => {
        assert.equal(scream(1), "a");
    });
    it('should do a scream of length 5', () => {
        assert.equal(scream(5), "aAaAa");
    });
    it('should do a scream of length 10', () => {
        assert.equal(scream(10), "aAaAaAaAaA");
    });
});
*/

function scream(n) {
    let str = "";

    for (let i = 1; i <= n; i++) {
        const isEven = i % 2 === 0;

        if (isEven) {
            str += "A";
        } else {
            str += "a";
        }
    }
    
    return str;
}

module.exports = scream;
