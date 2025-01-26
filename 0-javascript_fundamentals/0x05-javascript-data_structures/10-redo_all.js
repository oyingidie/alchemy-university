// TEST CASE
/*
const OperationsManager = require('../10-redo_all');
const { assert } = require('chai');

let operationsManager;
describe('Operations Manager', () => {
    beforeEach(() => {
        operationsManager = new OperationsManager();
    });

    describe('after several undos', () => {
        const operation1 = "OPERATION_1";
        const operation2 = "OPERATION_2";
        const operation3 = "OPERATION_3";
        beforeEach(() => {
            operationsManager.addOperation(operation1);
            operationsManager.addOperation(operation2);
            operationsManager.addOperation(operation3);
            operationsManager.undo();
            operationsManager.undo();
            operationsManager.undo();
            operationsManager.redoAll();
        });

        it('should have the last operation at the top of the operation stack', () => {
            assert.equal(operationsManager.operations.peek(), operation3);
        });

        describe('after a subsequent undo', () => {
            beforeEach(() => {
                operationsManager.undo();
            });

            it('should have the second operation at the top of the operation stack', () => {
                assert.equal(operationsManager.operations.peek(), operation2);
            });
        });
    });
});
*/

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
