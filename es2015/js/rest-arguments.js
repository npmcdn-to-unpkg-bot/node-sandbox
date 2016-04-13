// rest arguments
(function() {
  'use strict';

  function capitalize(...words) {
    return words.map(function(word) { return word.toUpperCase(); });
  }
  console.log(capitalize('obvious', 'bicycle'));

  function transform(transformFunction, ...items) {
    return items.map(function(item) { return transformFunction.call(item) });
  }
  console.log(transform(String.prototype.toLowerCase, 'Vampire', 'Weekend'));   // ['vampire', 'weekend']
  console.log(transform(String.prototype.toLowerCase));   // []

  /* Syntax error!
  function restArgs(first, ...middle, last) {
    console.log(`first: ${first}`);
    console.log(`middle: ${middle}`);
    console.log(`last: ${last}`);
  }

  restArgs('alpha', 'beta', 'parking', 'lot');
  */
}());
