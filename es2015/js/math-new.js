// math methods
(function() {
  'use strict';

  // With help from Axel Rauschmayer:
  // http://www.2ality.com/2015/04/numbers-math-es6.html

  // Math.sign
  console.log(Math.sign(-56));    // -1
  console.log(Math.sign(82));     // 1
  console.log(Math.sign(NaN));    // NaN
  console.log(Math.sign(0));      // 0
  console.log(Math.sign('82'));   // 1
  console.log(Math.sign('-82'));  // -1
  console.log(Math.sign('NaN'));  // NaN (the object, not as a string)

  // Math.trunc
  console.log(Math.trunc(3.14));    // 3
  console.log(Math.trunc(-3.14));   // -3
  console.log(Math.trunc('3.14'));   // 3
  console.log(Math.trunc(NaN));   // NaN
  console.log(Math.trunc('NaN'));   // NaN

}());
