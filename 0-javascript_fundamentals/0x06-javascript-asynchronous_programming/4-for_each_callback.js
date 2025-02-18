// TEST CASE
/*
const forEach = require('../4-for_each_callback');
const { assert } = require('chai');

describe('forEach', () => {
    it('should loop over a function for every element', () => {
        let sum = 0;
        let iterations = 0;
        forEach([1,2,3,4], (n, i) => {
            assert.equal(i, iterations, "index should be supplied for each iteration");
            iterations++;
            sum += n;
        });
        assert.equal(iterations, 4, "Should be a total of four iterations for four elements");
        assert.equal(sum, 10, "Should correctly sum four elements");
    });
});
*/

function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

module.exports = forEach;
