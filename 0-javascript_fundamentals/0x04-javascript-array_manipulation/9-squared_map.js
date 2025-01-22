// TEST CASE
/*
const squaredMap = require('../9-squared_map');
const { assert } = require('chai');

describe('squaredMap', () => {
    it('should square a single element', () => {
        assert.sameOrderedMembers(squaredMap([2]), [4]);
    });

    it('should square several elements', () => {
        assert.sameOrderedMembers(squaredMap([2,3,4]), [4,9,16]);
    });
});
*/

const squared = require('./squared');
// FILE: squared.js
/* function squared(n) {
    return n * n;
}

module.exports = squared; */

function squaredMap(arr) {
    return arr.map(n => squared(n));
}

module.exports = squaredMap;
