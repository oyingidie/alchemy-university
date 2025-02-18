// TEST CASE
/*
const runCallback = require('../1-run_callback_async');
const { assert } = require('chai');

describe('Run Callback Async', () => {
    it('should not run a function immediately', () => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        assert(!called, "Callback was called immediately");
    });

    it('should not run a function before 500 milliseconds', (done) => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        setTimeout(() => {
            assert(!called, "Callback was called before 500 milliseconds");
            done();
        }, 500);
    });

    it('should run a function before 1500 milliseconds', (done) => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        setTimeout(() => {
            assert(called, "Callback was not called before 1500 milliseconds");
            done();
        }, 1500);
    });
});
*/

/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    setTimeout(callbackFunction, 1000);
}

module.exports = runCallback;
