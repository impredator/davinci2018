// 1. What would be the output of following code ?
(function() {
	var greet = 'Hello World';
	var toGreet = [].filter.call(greet, function(element, index) {
		return index > 5;
	});
	console.log(toGreet);
}());
//
// Hello World
// undefined
// World
// [ 'W', 'o', 'r', 'l', 'd' ]
//
// [ 'W', 'o', 'r', 'l', 'd' ]

// 2. What would be the output of following code ?
(function() {
	var fooAccount = {
		name: 'John',
		amount: 4000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return 'Total amount left in account: ' + this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 6000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.bind(barAccount, totalAmount);
	};
	console.log(withdrawAmountBy(400)());
	console.log(withdrawAmountBy(300)());
}());

// Total amount left in account: 5600 Total amount left in account: 5300
// undefined undefined
// Total amount left in account: 3600 Total amount left in account: 3300
// Total amount left in account: 5600 Total amount left in account: 5600
// Answer: 1) Total amount left in account: 5600 Total amount left in account: 5300

// 3. What would be the output of following code ?
(function() {
	var fooAccount = {
		name: 'John',
		amount: 4000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 6000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.apply(barAccount, [totalAmount]);
	};
	console.log(withdrawAmountBy(400));
	console.log(withdrawAmountBy(300));
	console.log(withdrawAmountBy(200));
}());

// 5600 5300 5100
// 3600 3300 3100
// 5600 3300 5100
// undefined undefined undefined
// Answer: 1) 5600 5300 5100

// 4. What would be the output of following code ?
(function() {
	var fooAccount = {
		name: 'John',
		amount: 6000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 4000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.call(barAccount, totalAmount);
	};
	console.log(withdrawAmountBy(400));
	console.log(withdrawAmountBy(300));
	console.log(withdrawAmountBy(200));
}());

// 5600 5300 5100
// 3600 3300 3100
// 5600 3300 5100
// undefined undefined undefined
// Answer: 2) 3600 3300 3100

// 5. What would be the output of following code ?
(function greetNewCustomer() {
	console.log('Hello ' + this.name);
}.bind({
	name: 'John'
})());

// Hello John
// Reference Error
// Window
// undefined
// Answer: 1) Hello John
