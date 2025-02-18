// TEST CASE
/*
const numberOfPizzas = require('../13-how_many_pizzas');
const { assert } = require('chai');

describe('order', () => {
    describe('1 pizzas', () => {
        const order = {
            pizzas: 1,
            extraCheese: true,
            deliveryInstructions: "Round the back, please!",
        }

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(order), order.pizzas);
        });
    });

    describe('5 pizzas', () => {
        const order = {
            pizzas: 5,
            extraCheese: false,
            deliveryInstructions: "Call when you arrive",
        }

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(order), order.pizzas);
        });
    });
});
*/

function numberOfPizzas(order) {
    return order.pizzas;
}

module.exports = numberOfPizzas;
