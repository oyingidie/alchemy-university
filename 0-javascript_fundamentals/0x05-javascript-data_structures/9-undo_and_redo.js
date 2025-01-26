// TEST CASE
/*
const OperationsManager = require('../OperationsManager');
const { assert } = require('chai');

let operationsManager;
describe('Operations Manager', () => {
    beforeEach(() => {
        operationsManager = new OperationsManager();
    });

    describe('after an undo', () => {
        const operation1 = "OPERATION_1";
        beforeEach(() => {
            operationsManager.addOperation(operation1);
            operationsManager.undo();
        });

        it('should have added to the undos', () => {
            assert.equal(operationsManager.undos.peek(), operation1);
        });

        it('should have an empty set of operations', () => {
            assert(operationsManager.operations.isEmpty());
        });

        describe('after a subsequent redo', () => {
            beforeEach(() => {
                operationsManager.redo();
            });

            it('should have added back to the operations', () => {
                assert.equal(operationsManager.operations.peek(), operation1);
            });

            it('should have an empty set of undos', () => {
                assert(operationsManager.undos.isEmpty());
            });
        });
    });
});
*/

