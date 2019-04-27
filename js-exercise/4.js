// what is the result: error
function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()


// Solution 1
var boundedBark = Dog.bark.bind(fido)
boundedBark() // "fido says woof"

// Solution 2
function Dog(name) {
  this.name = name
}

Dog.prototype.bark = function() {
  console.log(this.name + ' says woof')
}

let fido = new Dog('fido')
fido.bark() // "fido says woof"

// Solution 3
class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    console.log(this.name + ' says woof')
  }
}

let fido = new Dog('fido')
fido.bark() // "fido says woof"
