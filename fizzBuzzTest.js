
'use strict'

var chai = require('chai');
var assert = chai.assert;//chai.expect;//chai.should; //chai.assert;

var myApp = require('../app/library.js');
describe("Test for proper divisibility of number", function() {
  it("should return fizzbuzz for augment of 15, function() {
    assert(myApp.fizzbuzz(15) == "fizzBuzz");
  })
  it("should return Buzz for augment of 25", function() {
    assert(myApp.fizzbuzz(25) == "Buzz");
  })
  it("should return fizz for augment of 9", function() {
    assert(myApp.fizzbuzz(9) == "fizz");
  })
})

