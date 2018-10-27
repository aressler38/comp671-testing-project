const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const {bc} = require('../../src/bc.js');

Given('a is {int}', function (int) {
           
	this.a = int;
         });

   

When('a is divided by b', function () {

	var expression = `${this.a} / ${this.b}`;
	this.division = bc(expression);

        });



Then('the result should be {int}', function (int) {
	assert.strictEqual(this.division, int);
	console.log('The expected value is: ' +this.division + ' and the actual value is ' +int);
});
