const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Our calc program that we are testing
const {bc} = require('../../src/bc.js');



Given('a is 1', function () {
    this.a = 1;
});

Given('b is 90', function () {
    this.b = 90;
});

When('a is multiplied to b', function () {
    // Create our expression to pass to the 'bc' calculator command.
    const expression = `${this.a} * ${this.b}`;
    // Run the calculator.
    this.result = bc(expression);
});

Then('I should get 90', function () {
    assert.strictEqual(this.result, 90);
});
