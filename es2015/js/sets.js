// maps
(function() {
  'use strict';

  var set = new Set();

  // Basic set ops
  set.add('John');
  set.add('Barry');
  set.add(42);
  console.log([...set.values()]);  // ["John", "Barry", 42]

  let arraySet = new Set([1,2,3]);
  console.log([...arraySet.values()]);   // [1, 2, 3]
  console.log(arraySet.has(1));   // true
  console.log(arraySet.has(4));   // false
  console.log(arraySet.size);     // 3

  // Strict equality tests
  let empty = {};
  let simpleSet = new Set([empty]);
  console.log(simpleSet.has(empty));  // true
  console.log(simpleSet.has({}));     // false

  let cleanUpSet = new Set([1,2,3]);
  console.log([...cleanUpSet.values()]);   // [1, 2, 3]
  console.log(cleanUpSet.has(1));   // true
  console.log(cleanUpSet.delete(1));   // true
  console.log(cleanUpSet.size);     // 2

  let clearSet = new Set([1,2,3]);
  console.log([...clearSet.values()]);   // [1, 2, 3]
  clearSet.clear();
  console.log([...clearSet.values()]);   // []


  // Iteration with for-of
  // Prints out every entry in map
  for (let value of set) {
    console.log(`${value}`);
  }

  // Iterating specifically by entries. Identical in behavior to regular
  // for-of loop construction.
  for (let [valueAsKey, valueAsValue] of set.entries()) {
    console.log(valueAsKey === valueAsValue);
  }

  // Iterating over "keys" only.
  for (let value of set.keys()) {
    console.log(`${value}`);
  }

  // Iterating over values.
  for (let value of set.values()) {
    console.log(`${value}`);
  }

  // Converting values back to array
  console.log([...set.values()]);
  console.log(Array.from(set));


  // Iterating with forEach
  // consistent method signature with Array#forEach(element)
  set.forEach(function(value) {
    console.log(`${value}`);
  });
}());
