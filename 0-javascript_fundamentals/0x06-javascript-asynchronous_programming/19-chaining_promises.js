// TEST CASE
/*
const Pact = require('../19-chaining_promises');
const { assert } = require('chai');

describe('Pact', function () {
    it('should handle then chaining', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
            return new Pact((resolve, reject) => {
                resolve(val * 2);
            });
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
            this.thenCallbacks.forEach((thenCallback) => thenCallback(value));
        }, (reason) => {
            this.rejected = reason;
            this.status = STATUS.REJECTED;
            this.catchCallbacks.forEach((catchCallback) => catchCallback(reason));
        });
    }

    then(callback) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenCallbacks.push((resolved) => {
                    if (resolved instanceof Pact) {
                        resolved.then((resolved) => resolve(callback(resolved)));
                    } else {
                        resolve(callback(resolved));
                    }
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
