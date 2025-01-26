// TEST CASE
/**/

const Stack = require('./7-isempty_and_peek');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        const recentOperation = this.operations.pop();
        this.undos.push(recentOperation);
    }

    redo() {
        const recentOperation = this.undos.pop();
        this.operations.push(recentOperation);
    }

    redoAll() {
        while (!this.undos.isEmpty()) {
            this.redo();
        }
    }
}

module.exports = OperationManager;
