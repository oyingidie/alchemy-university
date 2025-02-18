// TEST CASE
/*
const { assert } = require('chai');
const factorial = require('../19-factorial');

describe('factorial', () => {
    it('should determine factorial of 2', () => {
        if(factorial(2) === undefined) {
            assert(false, "Don't forget to return your result!");
        }
        else {
            assert.equal(factorial(2), 2);
        }
    });
    it('should determine factorial of 3', () => {
        assert.equal(factorial(3), 6);
    });
    it('should determine factorial of 4', () => {
        assert.equal(factorial(4), 24);
    });
    it('should determine factorial of 5', () => {
        assert.equal(factorial(5), 120);
    });
});
*/

function factorial(n) {
    let result = 1;

    for (let i = n; i >= 1; i--) {
        result *= i;
    }
    
    return result;
}

module.exports = factorial;
