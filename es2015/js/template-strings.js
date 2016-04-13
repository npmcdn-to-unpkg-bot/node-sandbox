// template strings
(function() {
  'use strict';

  // Multi-line strings!
  var multilineString = `I begin here
  indented
...and end on this line.`;

  console.log(multilineString);

  // Basic templating
  let a = 5,
      b = 'something';

  console.log(`a is ${a}, b is ${b}`);  // a is 5, b is something

  // Can also support expressions
  console.log(`a is ${a * a}, b is ${b.toUpperCase()}`);  // a is 25, b is SOMETHING
}());
