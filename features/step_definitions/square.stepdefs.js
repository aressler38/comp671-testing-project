const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Our calc program that we are testing
const {bc} = require('../../src/bc.js');

When ('I do square of a', function(){
    var expression = this.a + " * " + this.a;
    this.result = bc(expression);
});

Then('the result of square should be {string}', function (string) {
    assert.strictEqual(this.result.toString(), string);
    console.log('The expected value for square is: ' + this.result + ' and the actual value is ' + string);
});
