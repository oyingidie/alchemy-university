// TEST CASE
/*
const { finishFood } = require('../Kitchen');
const Order = require('../6-request_order');
const { assert } = require('chai');

describe('new order', () => {
    const order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 1, burgers: 1 };
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after food is done', () => {
            before(() => {
                finishFood(request);
            });

            it('should still be ready', () => {
                assert.equal(order.isReady, true);
            });
        });
    });
});
*/

const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }

    request(food) {
        const cookPromise = makeFood(food);

        cookPromise.then(() => {
            this.isReady = true;
        });
    }
}

module.exports = Order;
