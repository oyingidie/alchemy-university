// TEST CASE
/*
const getMessage = require('../6-get_message');
const {assert} = require('chai');

it('should return a message', () => {
    assert(getMessage(), "it looks like nothing was returned from getMessage")
    assert.equal(typeof getMessage(), "string", "a string should be returned from getMessage");
});
*/

function getMessage() {
     return "This message can be recycled.";
}

module.exports = getMessage;
