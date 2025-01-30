// TEST CASE
/*
const Pact = require('../15-catch_the_rejection');
const { assert } = require('chai');

describe('Pact', function () {
    it('should call a .catch function with the reject value after a timeout', (done) => {
        let value;
        new Pact((resolve, reject) => {
            setTimeout(() => {
                reject(42);
            }, 100);
        }).catch((err) => {
            assert.equal(err, 42);
            done();
        });
    });
});
*/

class Pact {
    // add methods to return on the instance
    constructor(executor) {
        executor((value) => {
            this.thenCallback(value);
        }, (value) => {
            this.catch(value);
        });
    }

    then(thenCallback) {
        this.thenCallback = thenCallback;
    }

    catch(exception) {
        this.catch = exception;
    }
}

module.exports = Pact;
