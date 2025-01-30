// TEST CASE

class Pact {
    // add methods to return on the instance
    constructor(executor) {
        this.thenCallbacks = [];
        this.catchCallbacks = [];

        executor((value) => {
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
