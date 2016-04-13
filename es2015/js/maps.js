// maps
(function() {
  'use strict';

  var map = new Map();

  // Basic set, get ops
  map.set('name', 'Jacob');
  console.log(map.get('name'));  // "Jacob"
  map.set(42, 'answer');
  console.log(map.get(42));   // "answer"

  console.log(map.has(42));   // true
  console.log(map.has('not here'));   // false
  console.log(map.get('not here'));   // undefined

  // Strict equality tests
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality
  let empty = {};
  map.set(empty, 'empty');
  console.log(map.get(empty));  // "empty"
  console.log(map.get({}));     // undefined

  let arrayMap = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3]
  ]);
  console.log([...arrayMap.keys()]);   // ["one", "two", "three"]
  console.log([...arrayMap.values()]);   // [1, 2, 3]

  // Iteration with for-of
  // Prints out every entry in map
  for (let [key, value] of map) {
    console.log(`${key} = ${value}`);
  }

  // Iterating specifically by entries. Identical in behavior to regular
  // for-of loop construction.
  for (let [key, value] of map.entries()) {
    console.log(`${key} = ${value}`);
  }

  // Iterating over keys only.
  for (let key of map.keys()) {
    // Manually look up value
    console.log(`${key} - ${map.get(key)}`);
  }

  // Just print array of all keys
  let keys = [...map.keys()];
  console.log(keys);

  // Iterating over values only.
  let configMap = new Map();
  configMap.set('html5Mode', true);
  configMap.set('debugLogging', false);
  configMap.set('lazyLoading', true);

  for (let value of configMap.values()) {
    // Print all keys with value
    let matchingKeys = Array.from(configMap.keys()).filter(key => configMap.get(key) === value);

    console.log(`Keys with value ${value}: ${matchingKeys.join(', ')}`);
  }

  // Count how many times value occurs in map (using strict equality)
  // let valueCount = map.

  // Just print array of all values
  let values = [...map.values()];
  console.log(values);

  // Iterating with forEach
  // consistent method signature with Array#forEach(element, index)
  configMap.forEach(function(value, key) {
    console.log(`${key} = ${value}`);
  });

  let deleteMap = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3]
  ]);
  console.log([...deleteMap.keys()]);   // ["one", "two", "three"]
  deleteMap.delete('two');
  console.log([...deleteMap.keys()]);   // ["one", "three"]

  let clearMap = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3]
  ]);
  console.log([...clearMap.keys()]);   // ["one", "two", "three"]
  clearMap.clear();
  console.log([...clearMap.keys()]);   // []

}());
