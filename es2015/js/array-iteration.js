// array fill methods
(function() {
  'use strict';

  let testArray = ['a', 'b', 'c'];

  console.log(Array.from(testArray.values()));  // ['a', 'b', 'c']
  console.log(Array.from(testArray.keys()));    // [0, 1, 2]
  console.log(Array.from(testArray.entries())); // [[0,'a'], [1,'b'], [2,'c']]

  console.log([...testArray.values()]);     // ["a", "b", "c"]

  for (let key of testArray.keys()) {
    console.log(key); // prints out 0, then 1, then 2
  }

  for (let [index, value] of testArray.entries()) {
    console.log(`${value} at index ${index}`);
  }
}());
