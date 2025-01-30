// TEST CASE
/*
const Pact = require('../17-immediate_resolve');
const { assert } = require('chai');

describe('Pact', function () {
    describe('immediate resolve', () => {
        let pact;
        before(() => {
            pact = new Pact((resolve, reject) => {
                resolve(42);
            });
        });

        it('should run the then callback even after resolving', (done) => {
            pact.then((val) => {
                assert.equal(val, 42);
                done();
            });
        }).timeout(250);
    });

    describe('immediate catch', () => {
        let pact;
        before(() => {
            pact = new Pact((resolve, reject) => {
                reject(42);
            });
        });

        it('should run the catch callback even after resolution', (done) => {
            pact.catch((val) => {
                assert.equal(val, 42);
                done();
            });
        }).timeout(250);
    });

    describe('asynchronous compatibility (previous tests)', () => {
        it('should call a .then function with the resolve value after a timeout', (done) => {
            let value;
            new Pact((resolve, reject) => {
                setTimeout(() => {
                    resolve(42);
                }, 100);
            }).then((resolved) => {
                assert.equal(resolved, 42);
                done();
            });
        });

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
});
*/

const status = {
    PENDING = 0,
    RESOLVED = 1,
    REJECTED = 2
};

class Pact {
    // add methods to return on the instance
    constructor(executor) {
        this.thenCallbacks = [];
        this.catchCallbacks = [];
        this.status = STATUS.PENDING;

        executor((value) => {
            this.resolved = value;
            this.status = STATUS.RESOLVED;
            this.thenCallbacks.forEach((thenCallback) => {
                thenCallback(value);
            });
        }, (value) => {
            this.catchCallbacks.forEach((catchCallback) => {
                catchCallback(value);
            });
        });
    }

    then(callback) {
        this.thenCallbacks.push(callback);
    }

    catch(callback) {
        this.catchCallbacks.push(callback);
    }
}

module.exports = Pact;
