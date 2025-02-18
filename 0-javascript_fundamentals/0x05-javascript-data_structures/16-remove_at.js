// TEST CASE
/*
const LinkedList = require('../16-remove_at');
const Node = require('../11-node');
const { assert } = require('chai');

describe('LinkedList instance', () => {
    const list = new LinkedList();

    it('should start with a null head', () => {
        assert.strictEqual(list.head, null);
    });

    describe('after adding a new node last', () => {
        const node1 = new Node(1);
        before(() => {
            list.addLast(node1);
        });

        it('should set the head to the new node', () => {
            assert.equal(list.head, node1);
        });

        it('should find the index at 0', () => {
            assert.equal(list.indexOf(node1), 0)
        });

        describe('removing the only element', () => {
            before(() => {
                list.removeAt(0);
            });

            it('should set the head back to null', () => {
                assert.strictEqual(list.head, null);
            });
        });
    });

    describe('after adding two nodes', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        before(() => {
            list.addFirst(node1);
            list.addFirst(node2);
        });

        it('should set the head to the second node', () => {
            assert.equal(list.head, node2);
        });

        describe('removing the first element', () => {
            before(() => {
                list.removeAt(0);
            });

            it('should set the head back to the first node', () => {
                assert.equal(list.head, node1);
            });
        });
    });

    describe('after adding three nodes', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        before(() => {
            list.addFirst(node1);
            list.addFirst(node2);
            list.addFirst(node3);
        });

        it('should set the head to the third node', () => {
            assert.equal(list.head, node3);
        });

        describe('removing the middle element', () => {
            before(() => {
                list.removeAt(1);
            });

            it('should keep the head as the third node', () => {
                assert.equal(list.head, node3);
            });

            it('should set node1 to index 1', () => {
                assert.equal(list.indexOf(node1), 1);
                assert.equal(list.head.next, node1);
            });
        });
    });

    describe('after adding four nodes', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);
        before(() => {
            list.addFirst(node1);
            list.addFirst(node2);
            list.addFirst(node3);
            list.addFirst(node4);
        });

        it('should set the head to the fourth node', () => {
            assert.equal(list.head, node4);
        });

        describe('removing the second to last element', () => {
            before(() => {
                list.removeAt(2);
            });

            it('should keep the head as the fourth node', () => {
                assert.equal(list.head, node4);
            });

            it('should set node1 to index 2', () => {
                assert.equal(list.indexOf(node1), 2);
                assert.equal(list.head.next.next, node1);
            });
        });
    });
});
*/

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node;
    }

    addLast(node) {
        if (!this.head) {
            this.head = node;
            return;
        }
        
        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
        }
        
        tail.next = node;
    }

    indexOf(node) {
        if (!this.head) {
            return;
        }

        let index = 0;
        let current = this.head;

        do {
            if(current === node) {
                return index;
            }
            current = current.next;
            index++;
        } while (current);

        return;
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let position = 0;
        let node = this.head;

        while (position < index - 1) {
            node = node.next;
            position++;
        }

        node.next = node.next.next;
    }
}

module.exports = LinkedList;
