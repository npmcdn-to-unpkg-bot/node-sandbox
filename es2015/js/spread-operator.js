// spread operator
(function() {
  'use strict';

  console.log([1]);     // "[1]"
  console.log(...[1]);  // "1"

  function sum(a, b, c) {
    return a + b + c;
  }

  let nums = [1, 2, 3];
  console.log(sum(...nums));    // 6

  console.log([nums, 4, 5]);   // [[1,2,3],4,5]
  console.log([...nums, 4, 5]);   // [1,2,3,4,5]
}());
