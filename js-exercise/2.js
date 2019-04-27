// setTimeout to queue, call back is free to
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// Solution 1
// Immediately-Invoked Function Expression a.k.a. IIFE
for (let i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 0)
  })(i)
}

// Solution 2
// let
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
