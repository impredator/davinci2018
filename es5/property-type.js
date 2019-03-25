//configurable

//普通定义
var person = {
  name: 'ASHTON'
}
delete person.name

//defineProperty定义
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'ASHTON'
})
delete person.name;
console.log(person.name);

person.name = 'WAYNE';
console.log(person.name);

//enumerable
var person = {
  name: 'ASHTON',
  age: 18
}
for(var key in person) {
  console.log(key);
  console.log(person[key]);
}

Object.defineProperty(person, 'name', {
  enumerable: false
})
for(var key in person) {
  console.log(key);
  console.log(person[key]);
}

//writable
var person = {
  name: 'ASHTON'
}

person.name = 'WAYNE';
console.log(person.name);

Object.defineProperty(person, 'name', {
  writable: false
})

person.name = 'WAYNE';
console.log(person.name);

//value
var person = {};
Object.defineProperty(person, 'name', {
  value: 'ASHTON'
})
console.log(person.name);

//get/set
var person = {};

Object.defineProperty(person, 'name', {
  get: function() {
    return 'ASHTON'
  },
  set: function(value) {
    console.log(value + ' in set');
  }
})
console.log(person.name);
person.name = 'WAYNE';
console.log(person.name);

//defineProperties
var person = {};
Object.defineProperties(person, {
  name: {
    value: 'Ashton',
    configurable: true
  },
  age: {
    get: function() {
      return this.value || 18;
    },
    set: function(value) {
      this.value = value;
    }
  }
})

console.log(person.name);
console.log(person.age);

//
var person = {
    name: 'Ashton',
    age: {
        configurable: false,
        writable: false,
        get: function() { return 22; },
        set: function(value) { this.value = value; }
    }
}
var descripter = Object.getOwnPropertyDescriptor(person, 'name')

var ageDescripter = Object.getOwnPropertyDescriptor(person, 'age');
