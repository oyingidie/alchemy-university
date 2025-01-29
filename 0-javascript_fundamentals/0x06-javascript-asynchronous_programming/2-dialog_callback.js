// TEST CASE
/*
const Dialog = require('../2-dialog_callback');
const { assert } = require('chai');

describe('Dialog', () => {
    it('should allow me to register a callback', () => {
        const dialog = new Dialog();
        let called = false;
        dialog.onClose(() => {
            called = true;
        });
        dialog.close();
        assert(called, "Callback was not called after close");
    });
});
*/

class Dialog {
    onClose(callbackFunction) {
        // store the callback
        this.callbackFunction = callbackFunction; 
    }

    close() {
        // invoke the callback
        this.callbackFunction();
    }
}

module.exports = Dialog;
