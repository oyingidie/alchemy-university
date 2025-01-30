// TEST CASE
/*
const timer = require('../8-create_promise');
const { assert } = require('chai');

describe('timer', () => {
    const promise = timer();

    it('should return a promise', () => {
        assert.equal(promise instanceof Promise, true);
    });

    it('should resolve', async () => {
        await promise;
        assert(true);
    }).timeout(1000);
});
*/

function timer() {
    return new Promise(function executor(resolve, reject) {
       resolve();
    });
}

module.exports = timer;
