// How to preserve the immutability on my heroes list?
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// mutate heros list
const newHeroes = heroes.map(h => {
  h.name = h.name.toUpperCase()
  return h
})

// Solution 1
// const newHeroes = heroes.map(h => {
//   return {
//     ...h,
//     name: h.name.toUpperCase()
//   }
// })

// Solution 2
// const newHeroes = heroes.map(h => {
//     return Object.assign({}, h, { name: h.name.toUpperCase() });
// });


console.log(newHeroes)
console.log(heroes);
