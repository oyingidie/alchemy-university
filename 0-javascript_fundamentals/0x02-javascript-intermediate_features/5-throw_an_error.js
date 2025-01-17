// TEST CASE
/*
const { assert } = require('chai');
const throwError = require('../5-throw_an_error');

describe('throwError', () => {
    it('should throw an error', () => {
        let ex;
        try { 
            throwError();
        }
        catch(_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        assert.equal(ex.constructor, Error);
    });
});
*/

function throwError() {
    throw new Error("You should catch me!");
}

module.exports = throwError;
