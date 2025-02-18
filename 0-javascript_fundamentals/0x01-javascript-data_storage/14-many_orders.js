// TEST CASE
/*
const numberOfPizzas = require('../14-many_orders');
const { assert } = require('chai');

describe('numberOfPizzas', () => {
    describe('a single order', () => {
        const orders = [
            { pizzas: 3 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });

    describe('many orders', () => {
        const orders = [
            { pizzas: 3 },
            { pizzas: 5 },
            { pizzas: 10 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });
});
*/

function numberOfPizzas(orders) {
    let total = 0;

    for (let i = 0; i < orders.length; i++) {
        total += orders[i].pizzas;
    }

    return total;
}

module.exports = numberOfPizzas;
