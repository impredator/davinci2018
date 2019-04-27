function greet (person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })

// Solution
// function greet (person) {
//   if (person.name === 'amy') {
//     return 'hey amy'
//   }
//   return 'hey arnold'
// }

var result = greet({ name: 'amy' })

console.log(result) // "hey amy"
