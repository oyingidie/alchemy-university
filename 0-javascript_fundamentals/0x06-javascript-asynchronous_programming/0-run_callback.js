// TEST CASE
/*
const runCallback = require('../0-run_callback');
const { assert } = require('chai');

describe('Run Callback', () => {
    it('should run a function immediately', () => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        assert(called, "Callback was not called");
    });
});
*/

/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    callbackFunction();
}

module.exports = runCallback;
