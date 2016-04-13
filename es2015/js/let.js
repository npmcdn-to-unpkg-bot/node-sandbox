// let and const
(function() {
  'use strict';

  // Only defined within for loop
  let numbers = [];
  for (let x = 0; x < 10; x += 1) {
    numbers.push(x);
  }

  try {
    console.log('numbers:', numbers);   // prints array of numbers
    console.log('x:', x);    // raises ReferenceError
  } catch (error) {
    console.error('Caught:', error);
  }

  try {
    console.log(foo);   // undefined
    console.log(bar);   // raises ReferenceError
  } catch (error) { /* Ignore ReferenceError */ }

  var foo = 'foo';
  let bar = 'bar';
}());
