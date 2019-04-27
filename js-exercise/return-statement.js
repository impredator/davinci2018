// 1. What would be the output of following code ?
(function(){
	function sayHello(){
		var name = "Hi John";
		return
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();

// Hi John
// undefined
// Reference Error
// Uncaught TypeError: Cannot read property 'fullName' of undefined
// Answer: 4) Uncaught TypeError: Cannot read property 'fullName' of undefined

// 2. What would be the output of following code ?
function getNumber(){
	return (2,4,5);
}

var numb = getNumber();
console.log(numb);

//Evaluate all the expressions separated by commas and return the last one
// 5
// undefined
// 2
// (2,4,5)
// Answer: 1) 5

var i = 0;
var j = 0;
var x = (i++, j--);
console.log(i, j, x) // 1 -1 0

// 3. What would be the output of following code ?
function getNumber(){
	return;
}

var numb = getNumber();
console.log(numb);

// null
// undefined
// ""
// 0
// Answer: 2) undefined

// 4. What would be the output of following code ?
function mul(x){
	return function(y){
		return [x*y, function(z){
			return x*y + z;
		}];
	}
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));

// 6, 10
// undefined undefined
// Reference Error
// 10, 6
// Answer: 1) 6, 10

// 5. What would be the output of following code ?
function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));

// 6, 10
// undefined undefined
// Reference Error
// 10, 6
// Answer: 1) 6, 10

// 6. What would be the output of following code ?
function mul(x) {
	return function(y) {
		return function(z) {
			return function(w) {
				return function(p) {
					return x * y * z * w * p;
				};
			};
		};
	};
}
console.log(mul(2)(3)(4)(5)(6));

// 720
// undefined
// Reference Error
// Type Error
// Answer: 1) 720
