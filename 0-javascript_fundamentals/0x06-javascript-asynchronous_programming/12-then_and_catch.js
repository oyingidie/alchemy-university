// TEST CASE
/*
const Pact = require('../12-then_and_catch');
const { assert } = require('chai');

describe('Pact', function () {
    it('should return an object with a then function', async () => {
        assert.equal(typeof (new Pact(() => { })).then, 'function');
    });

    it('should return an object with a catch function', async () => {
        assert.equal(typeof (new Pact(() => { })).catch, 'function');
    });
});
*/

class Pact {
    // add methods to return on the instance
    then() {}

    catch() {}
}

module.exports = Pact;
