const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const {bc} = require('../../src/bc.js');

When('a is divided by b', function () {
    var expression = `${this.a} / ${this.b}`;
    this.result = bc(expression);
});

Then('the result of division should be {string}', function (string) {
    assert.strictEqual(this.result.toString(), string);
    console.log('The expected value for division is: ' + this.result + ' and the actual value is ' + string);
});

