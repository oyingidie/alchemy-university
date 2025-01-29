// TEST CASE
/*
const Dialog = require('../3-dialog_callbacks');
const { assert } = require('chai');

describe('Dialog', () => {
    it('should allow registering of multiple callbacks', () => {
        const dialog = new Dialog();
        let calledA = 0;
        let calledB = 0;
        let calledC = 0;
        dialog.onClose(() => {
            calledA++;
        });
        dialog.onClose(() => {
            calledB++;
        });
        dialog.onClose(() => {
            calledC++;
        });
        dialog.close();
        assert.equal(calledA, 1, "First Callback was not called once after close");
        assert.equal(calledB, 1, "Second Callback was not called once after close");
        assert.equal(calledC, 1, "Third Callback was not called once after close");
    });
});
*/

class Dialog {
    constructor() {
        this.callbackFunctions = [];
    }

    onClose(callbackFunction) {
        // store the callback
        this.callbackFunctions.push(callbackFunction); 
    }

    close() {
        // invoke the callback
        for (let i = 0; i < this.callbackFunctions.length; i++) {
            this.callbackFunctions[i]();
        }
    } // OR
    /*
    close() {
        this.callbackFunctions.forEach((callbackFn) => {
            callbackFn();
        });
    }
    */
}

module.exports = Dialog;
