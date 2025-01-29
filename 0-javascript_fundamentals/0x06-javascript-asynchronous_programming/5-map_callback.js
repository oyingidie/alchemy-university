// TEST CASE
/*
const map = require('../5-map_callback');
const { assert } = require('chai');

describe('map', () => {
    it('should double each element in the returned array', () => {
        const doubled = map([1, 2, 3, 4], (n) => {
            return n * 2;
        });
        assert.sameOrderedMembers([2, 4, 6, 8], doubled);
    });

    it('should triple each element in the returned array', () => {
        const tripled = map([1, 2, 3, 4], (n) => {
            return n * 3;
        });
        assert.sameOrderedMembers([3, 6, 9, 12], tripled);
    });
});
*/

function map(arr, callback) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i));
    }

    return newArray;
}

module.exports = map;
