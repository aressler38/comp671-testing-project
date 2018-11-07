const { Given, When, Then } = require('cucumber');

Given('a is {string}', function (string) {
    this.a = string;
});

Given('b is {string}', function (string) {
    this.b = string;
});
