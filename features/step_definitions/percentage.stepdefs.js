const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Our calc program that we are testing
const {bc} = require('../../src/bc.js');

When ('I calculate percentage of a out of b', function(){
    var expression = "((" + this.a + "/" + this.b + ") * 100)";
    this.result = bc(expression);
});

Then('the result of percentage should be {string}', function (string) {
    assert.strictEqual(this.result.toString(), string);
    console.log('The expected value for percentage is: ' + this.result + ' and the actual value is ' + string);
});
