// TEST CASE
/*
const walk = require('../3-walk');
const { assert } = require('chai');

describe('Walk', () => {
    describe('base case', () => {
        it('return the node', () => {
            assert.deepEqual(walk({ id: 5 }), { id: 5 });
        });
    });
});
*/

function walk(node) {
    if (node.next === undefined) {
        return node;
    }
}

module.exports = walk;
