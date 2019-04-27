// 1. What would be the output of following code ?
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: true
	})

	console.log(Object.keys(person));
})();

Type Error
undefined
["name", "salary", "country", "phoneNo"]
["name", "salary", "country"]

// ["name", "salary", "country", "phoneNo"]

// 2. What would be the output of following code ?
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: false
	})

	console.log(Object.keys(person));
})();

Type Error
undefined
["name", "salary", "country", "phoneNo"]
["name", "salary", "country"]

// ["name", "salary", "country"]

// 3. What would be the output of following code ?
(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB);
	console.log(objA === objB);
}());

false true
false false
true false
true true

// false false

// 4. What would be the output of following code ?
(function() {
	var objA = new Object({foo: "foo"});
	var objB = new Object({foo: "foo"});
	console.log(objA == objB);
	console.log(objA === objB);
}());

false true
false false
true false
true true

// false false

// 5. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create({
		foo: 'foo'
	});
	console.log(objA == objB);
	console.log(objA === objB);
}());

false true
false false
true false
true true

// false false

// 6. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA == objB);
	console.log(objA === objB);
}());

false true
false false
true false
true true

// false false

// 7. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());

false true
false false
true false
true true

// true true
// Any object.toString() is "[object Object]", is constant
// array.toString() transfer to string text

// 8. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	console.log(objA == objB);
	console.log(objA === objB);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
true true true false
true false true true
true true true true
true true false false

// true true true true

// 9. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';
	console.log(objA.foo);
	console.log(objB.foo);
}());

foo bar
bar bar
foo foo
bar foo

// bar bar

// 10. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());

foo bar
bar bar
foo foo
bar foo

// foo foo

var objA = {
  foo: 'foo'
};
var objB = objA;
objB.foo = 'bar';

delete objA.foo
delete objB.foo

console.log(objA.foo)
console.log(objB.foo)

// undefined undefined

var objA = Object.create({
  foo: 'foo'
});
var objB = objA;
objB.foo = 'bar';

delete objA.foo
delete objB.foo

console.log(objA.foo)
console.log(objB.foo)

// foo foo

// 11. What would be the output of following code ?
(function() {
	var objA = {
		foo: 'foo'
	};
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());

foo bar
undefined undefined
foo foo
undefined bar

// undefined undefined
