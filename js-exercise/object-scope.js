
// Object Oriented

// 1. What would be the output of following code ?
function Person(name, age){
	this.name = name || "John";
	this.age = age || 24;
	this.displayName = function(){
		console.log(this.name);
	}
}

Person.name = "John";
Person.displayName = function(){
	console.log(this.name);
}

var person1 = new Person('John');
	person1.displayName();
	Person.displayName();

// John Person
// John John
// John undefined
// John John
//
// John Person
// A Function object's read-only name property indicates the function's name as specified 
