// TEST CASE 0

const { assert } = require('chai');
const deepRetrieval = require('../pset_3');

describe('deepRetrieval', () => {
    it('should handle the base case', () => {
        assert.equal(deepRetrieval({ prop: 3 }), 3);
        assert.equal(deepRetrieval({ prop: 'happy' }), 'happy');
        assert.equal(deepRetrieval({ prop: true }), true);
    });
    
    it('should handle the deeper cases', () => {
        assert.equal(deepRetrieval({ prop: { prop: { prop: { prop: { prop: 3 } } } } }), 3);
        assert.equal(deepRetrieval({ prop: { prop: { prop: 'happy' } } }), 'happy');
        assert.equal(deepRetrieval({ prop: { prop: true } }), true);
    });
});
