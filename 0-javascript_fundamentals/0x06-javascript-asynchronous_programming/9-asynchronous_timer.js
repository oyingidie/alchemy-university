// TEST CASE
/*
const timer = require('../9-asynchronous_timer');
const { assert } = require('chai');

describe('timer', () => {
    const promise = timer();

    it('should return a promise', () => {
        assert.equal(promise instanceof Promise, true);
    });

    it('should not resolve within 500 milliseconds', (done) => {
        let resolved = false;
        promise.then(() => {
            resolved = true;
        });
        setTimeout(() => {
            assert(!resolved);
            done();
        }, 500);
    });

    it('should resolve within 1500 milliseconds', async () => {
        await promise;
        assert(true);
    }).timeout(1500);
});
*/

function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

module.exports = timer;
