// TEST CASE

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
}

module.exports = LinkedList;
