//what is the output
let dog = {
  name: 'doggo',
  sayName () {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName() //undefined

// Solution 1
sayName.bind(dog)()
dog.sayName.bind(dog)()

// Solution 2
let cat = {
  name: 'miumiu',
  sayName () {
    console.log(this.name)
  }
}
cat.sayName()
