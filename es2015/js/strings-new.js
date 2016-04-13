
// string methods
(function() {
  'use strict';

  var testString = 'batman and catwoman';

  console.log(testString.startsWith('bat'));  // true
  console.log(testString.startsWith('Bat'));  // false
  console.log(testString.endsWith('catwoman'));  // true
  console.log(testString.endsWith('Catwoman'));  // false
  console.log(testString.includes('two'));    // true
  console.log(testString.startsWith('at', 1));  // true
  console.log(testString.endsWith('man', 6));   // true
  console.log(testString.endsWith('man', 5));   // false
  console.log(testString.includes('two', 14));  // false

  // Iterating over strings
  for (let char of 'abc') {
    console.log(char);
  }

  // Spread operator, tokenizing a string
  console.log([...'abc']);

  for (let char of [...'abc']) {
    console.log(char);
  }
}());
