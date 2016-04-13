// array from method
(function() {
  'use strict';

  {
    // Array from another array
    let sourceArray = [1,2,3];
    let cloneArray = Array.from(sourceArray);
    console.log(cloneArray);
  }

  {
    // Array from a set
    let sourceSet = new Set([1,2,3]);
    let cloneArray = Array.from(sourceSet);
    console.log(cloneArray);
  }

  {
    // Array from a Map
    let source = new Map([
      ['one', 'uno'],
      ['two', 'dos'],
      ['three', 'tres']
    ]);
    let keysArray = Array.from(source.keys()),
        valuesArray = Array.from(source.values());

    console.log(keysArray);     // ["one", "two", "three"]
    console.log(valuesArray);   // ["uno", "dos", "tres"]
  }

  {
    // Array from a custom array-like object
    let arrayLike = {
      length: 3,
      0: 'a',
      1: 'b',
      2: 'c',
    };
    let array = Array.from(arrayLike);
    console.log(array);     // ["a", "b", "c"]
  }

  {
    // Array from a custom array-like object
    let arrayLike = 'abc';
    let array = Array.from(arrayLike, letter => letter.toUpperCase());
    console.log(array);     // ["A", "B", "C"]
  }
}());
