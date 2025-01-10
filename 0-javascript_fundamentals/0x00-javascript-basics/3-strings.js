// TEST CASE
/*
const assert = require('assert');
const {a, b} = require('../index');

it('a should be a string', () => {
    assert.equal(typeof a, "string");
});

it('a should be "World"', () => {
    assert.equal(a, "World");
});

it('b should be a string', () => {
    assert.equal(typeof b, "string");
});

it('b should be "Hello World"', () => {
    assert.equal(b, "Hello World");
});
*/

const a = "World";
const b = `Hello ${a}`;

module.exports = {a, b}
