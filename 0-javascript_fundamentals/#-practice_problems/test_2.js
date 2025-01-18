// TEST CASE 0

const { assert } = require('chai');
const eitherNotBoth = require('../pset_2');

describe('eitherNotBoth', () => {
    describe('divisible by 3 but not 5', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(3), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(9), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(18), true);
        });
    });

    describe('divisible by 5 but not 3', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(5), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(10), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(20), true);
        });
    });

    describe('divisible by 5 and 3', () => {
        it('should return false', () => {
            assert.equal(eitherNotBoth(15), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(30), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(60), false);
        });
    });
})

// TEST CASE 1

const {assert} = require('chai');
const fizzBuzz = require('../pset_2');

describe('fizzBuzz', () => {
    it('should return an empty string', () => {
        const numbers = [1, 2, 4, 7, 11];
        const result = fizzBuzz(numbers);
        assert.equal(result, "");
    })

    it('should return fizz', () => {
        const numbers = [3, 6, 9, 12];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzfizzfizzfizz");
    })

    it('should return buzz', () => {
        const numbers = [5, 10, 20, 25];
        const result = fizzBuzz(numbers);
        assert.equal(result, "buzzbuzzbuzzbuzz");
    })

    it('should return fizzbuzz', () => {
        const numbers = [15, 30, 45];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzbuzzfizzbuzzfizzbuzz");
    })

    it('should return all conditions', () => {
        const numbers = [1, 3, 5, 9, 11, 15, 17, 20];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzbuzzfizzfizzbuzzbuzz");
    })
})
