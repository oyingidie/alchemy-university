// TEST CASE
/*
const { assert } = require('chai');
const thisName = require('../1-binding_this');

describe('thisName', () => {
    it('should be bound to an object with the name Bob', () => {
        assert.equal(thisName(), 'Bob');
    });

    it('should have renamed the function bound thisName', () => {
        assert.equal(thisName.name, "bound thisName");
    });
});
*/

function thisName() {
    return this.name;
}

const boundFunction = thisName.bind({name: "Bob"});

module.exports = boundFunction;
