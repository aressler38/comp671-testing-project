const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Our calc program that we are testing
const {bc} = require('../../src/bc.js');



Given('a is 100', function () {
    this.a = 100;
});

Given('b is {int}', function (int) {
    this.b = int;
});

When('a is subtracted to b', function () {
    // Create our expression to pass to the 'bc' calculator command.
    const expression = `${this.a} - ${this.b}`;
    // Run the calculator.
    this.result = bc(expression);
});

Then('I should get {int}', function (int) {
    assert.strictEqual(this.result, int);
});
