'use strict'
var file = {}
file.fizzBuzz = function (number){
	if ((number % 5 == 0)&& (number % 3 == 0)){
		return "fizzBuzz"
	}else if(number % 5 == 0) {
		return "Buzz"
	}else if(number % 3 == 0){
		return "fizz"
	}
}

 module.exports = file;
