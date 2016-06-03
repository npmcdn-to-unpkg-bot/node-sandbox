// destructuring
(function() {
  'use strict';

  // for-of works with either let or const
  {
    for (let i of [1,2,3]) {
      console.log(i);
    }
    // 1
    // 2
    // 3

    for (const i of [1,2,3]) {
      console.log(i);
    }
    // 1
    // 2
    // 3
  }

  // works over strings
  {
    for (const char of 'hello') {
      console.log(char);
    }
    // 'h'
    // 'e'
    // 'l'
    // 'l'
    // 'o'
  }

  // iterating over a map
  {
    const map = new Map([
      ['a', 'one'],
      ['b', 'two'],
      ['c', 'three']
    ]);

    // default iterator is entries
    for (const entry of map) {
      console.log(entry);
    }

    // entries return as arrays
    for (const entry of map.entries()) {
      console.log(entry);
    }

    // use destructuring to pull values from entry array
    for (const [key, value] of map.entries()) {
      console.log(`${key} - ${value}`);
    }
  }

  // for-of vs for-in
  {
    const array = ['a','b','c'];

    for (const i in array) {
      console.log(i);
    }
    // 0, 1, 2

    for (const i of array) {
      console.log(i);
    }
    // "a", "b", "c"
  }

}());
