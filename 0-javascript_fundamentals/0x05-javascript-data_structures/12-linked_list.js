// TEST CASE
/*
const LinkedList = require('../12-linked_list');
const Node = require('../11-node');
const { assert } = require('chai');

describe('LinkedList instance', () => {
    const list = new LinkedList();

    it('should start with a null head', () => {
        assert.strictEqual(list.head, null);
    });
});
*/

class LinkedList {
    constructor() {
        this.head = null;
    }
}

module.exports = LinkedList;
