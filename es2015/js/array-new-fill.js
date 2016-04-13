// array fill methods
(function() {
  'use strict';

  // Array#fill to fill with a fixed value
  console.log(new Array(3).fill('a'));    // ["a", "a", "a"]
  console.log([,,,].fill('a'));           // ["a", "a", "a"]

  let fillArray = [1, 2, 3];
  fillArray.fill('a');
  console.log(fillArray);                 // ["a", "a", "a"]

  // Filling an array with ascending numbers
  console.log([...new Array(5).keys()]);  // [0, 1, 2, 3, 4]

  // Filling an array using Array#from
  let fromArray = Array.from(new Array(5), (x, index) => index * index);
  console.log(fromArray);     // [0, 1, 4, 9, 16]
}());
