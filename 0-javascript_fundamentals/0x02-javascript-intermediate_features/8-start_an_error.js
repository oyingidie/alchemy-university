// TEST CASE
/*
const { assert } = require('chai');
const startError = require('../8-start_an_error');

describe('startError', () => {
    it('should throw a subclass of error', () => {
        let ex;
        try {
            startError();
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        console.log(ex);
        assert.equal(ex.__proto__.__proto__.constructor, Error);
    });
});
*/

function startError() {
    const runTimeErrors = {
        type: "not a function",
        reference: "not defined",
        syntax: "unexpected number",
        range: "invalid array length"
    }

    runTimeErrors();
}

module.exports = startError;
