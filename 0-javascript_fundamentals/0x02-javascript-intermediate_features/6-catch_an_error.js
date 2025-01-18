// TEST CASE
/*
const { assert } = require('chai');
const catchError = require('../6-catch_an_error');

describe('catchError', () => {
    it('should catch a thrown error', () => {
        let ex;
        try {
            catchError(() => {
                throw new Error();
            });
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });
});
*/

function catchError(fn) {
    try {
        fn();
    } catch (error) {}
}

module.exports = catchError;
