const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Our calc program that we are testing
const {bc} = require('../../src/bc.js');

When('arithmatic expression is {string}', function (string) {
    this.result = bc(string);
});

Then('the result of arithmetic expression should be {string}', function (string) {
    assert.strictEqual(this.result.toString(), string);
    console.log('The expected value of arithmetic expression is: ' + this.result + ' and the actual value is ' + string);
});
