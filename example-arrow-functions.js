var names = ['Andrew', 'Jenn', 'Kate', 'Jack'];
//
// names.forEach(function (name) {
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!'
// console.log(returnMe ('Andy'));

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
//
//
// person.greet()

// Challenge Area
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;


console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
