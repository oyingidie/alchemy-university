// TEST CASE
/*
const toJSON = require('../13-object_to_json');
const { assert } = require('chai');

describe('toJSON', () => {
    it('should handle a blank object', () => {
        assert.equal(toJSON({}), "{}");
    });
    it('should handle a more complex object', () => {
        assert.equal(toJSON({ a: 2 }), '{"a":2}');
    });
});
*/

function toJSON(obj) {
    return JSON.stringify(obj);
}

module.exports = toJSON;
