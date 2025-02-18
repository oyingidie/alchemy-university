// TEST CASE
/*
const order = require('../12-pizza_order');
const { assert } = require('chai');

describe('order', () => {
    it('should have a number of pizzas', () => {
        assert(order.hasOwnProperty('pizzas'), "make sure to add pizzas to the order object!");
        assert.equal(typeof order.pizzas, "number");
        assert.isAbove(order.pizzas, 0);
    });

    it('should have an extraCheese boolean', () => {
        assert(order.hasOwnProperty('extraCheese'), "make sure to add extraCheese to the order object!");
        assert.equal(typeof order.extraCheese, "boolean");
    });

    it('should have a deliveryInstructions string', () => {
        assert(order.hasOwnProperty('deliveryInstructions'), "make sure to add deliveryInstructions to the order object!");
        assert.equal(typeof order.deliveryInstructions, "string");
    });
});
*/

const order = {
    pizzas: 4,
    extraCheese: false,
    deliveryInstructions: "Pick up at the store, please."
};

module.exports = order;
