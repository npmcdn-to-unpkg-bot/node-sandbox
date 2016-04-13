// number methods
(function() {
  'use strict';

  // With help from Axel Rauschmayer:
  // http://www.2ality.com/2015/04/numbers-math-es6.html

  // Previously global functions move to Number constructor.
  console.log(Number.isFinite(1));        // true
  console.log(Number.isFinite(Infinity)); // false
  console.log(Number.isNaN(NaN));         // true
  console.log(Number.isNaN(parseInt('nope')));         // true

  console.log(Number.parseInt('1.1'));    // 1
  console.log(Number.parseFloat('1.1'));  // 1.1

  // Number#foo functions don't coerce their parameters to numbers
  console.log(isNaN('NaN'));            // true
  console.log(Number.isNaN('NaN'));     // false
  console.log(Number.isFinite(1));      // true
  console.log(Number.isFinite('1'));    // false
  console.log(Number.isInteger(33));  // true
  console.log(Number.isInteger('33'));  // false

  // New isInteger test.
  console.log(Number.isInteger(1));     // true
  console.log(Number.isInteger(1.1));   // false

  // Number.EPSILON - smallest possible floating point value
  function epsilonEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
  }
  console.log( (0.1+0.2) === 0.3 );   // false
  console.log( epsilonEqual(0.1+0.2, 0.3) );   // true
}());
