// TEST CASE
/*
const Pact = require('../18-chaining_callbacks');
const { assert } = require('chai');

describe('Pact', function () {
    it('should return a chainable value after .then', () => {
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
        });
        
        assert(pact, "Expected .then to return a chainable pact!");
        assert.equal(typeof pact.then, "function", "Expected .then to return a chainable pact!");
    });

    it('should handle value transformation', (done) => {
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
            return val * 2;
        }).then((val) => {
            assert.equal(val, 84);
            return val * 2;
        });

        pact.then((val) => {
            assert.equal(val, 168);
            done();
        });
    });
});
*/

const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2
};

class Pact {
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
        }, (reason) => {
            this.rejected = reason;
            this.status = STATUS.REJECTED;
            this.catchCallbacks.forEach((catchCallback) => {
                catchCallback(reason);
            });
        });
    }

    then(callback) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenCallbacks.push((resolved) => {
                    resolve(callback(resolved));
                });
            });
        } else if (this.status === STATUS.RESOLVED) {
            callback(this.resolved);
        }
    }

    catch(callback) {
        if (this.status === STATUS.PENDING) {
            this.catchCallbacks.push(callback);
        } else if (this.status === STATUS.REJECTED) {
            callback(this.rejected);
        }
    }
}

module.exports = Pact;
