// 1. what will output?
console.log(employeeId);
Some Value
Undefined
Type Error
ReferenceError: employeeId is not defined

// ReferenceError: employeeId is not defined

// 2. What would be the output of following code?
console.log(employeeId);
var employeeId = '19000';
Some Value
undefined
Type Error
ReferenceError: employeeId is not defined

// undefined

// 3. What would be the output of following code?
var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();

'122345'
undefined
Type Error
ReferenceError: employeeId is not defined

// undefined

// 4. What would be the output of following code?
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}());

'122345'
undefined
'1234abe'
ReferenceError: employeeId is not defined

// undefined

// 5. What would be the output of following code?
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());

undefined
function
'Hi I am inside displayFunc'
ReferenceError: displayFunc is not defined

// undefined

// 6. What would be the output of following code?
var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);

undefined
'123bcd'
'abc123'
ReferenceError: employeeId is not defined

// '123bcd'

// 7. What would be the output of following code?
var employeeId = 'abc123';
function foo() {
	employeeId = '123bcd';
	return;

	function employeeId() {}
}
foo();
console.log(employeeId);

undefined
'123bcd'
'abc123'
ReferenceError: employeeId is not defined

// 'abc123'

// 8. What would be the output of following code?
var employeeId = 'abc123';

function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();

undefined
function
string
ReferenceError: employeeId is not defined

// 'function'

// 9. What would be the output of following code?
function foo() {
	employeeId();
	var product = 'Car';
	return;

	function employeeId() {
		console.log(product);
	}
}
foo();

undefined
Type Error
'Car'
ReferenceError: product is not defined

// undefined

// 10. What would be the output of following code?
(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());

undefined undefined
Type Error
function function
ReferenceError: bar is not defined

// function function
