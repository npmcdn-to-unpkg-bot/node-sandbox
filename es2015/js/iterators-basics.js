// destructuring
(function() {
  'use strict';

  {
    let myMap = new Map([
      ['a', 1],
      ['b', 2]
    ]);
    let myMapEntries = myMap.entries();
    console.log(JSON.stringify(myMapEntries.next()));

    let myMapValues = myMap.values();
    console.log(JSON.stringify(myMapValues.next()));

    let myMapKeys = myMap.keys();
    console.log(JSON.stringify(myMapKeys.next()));
  }

  {
    let mySet = new Set(['a', 'b']),
        valuesIterator = mySet.values(),
        iteration;

    iteration = valuesIterator.next();  // Get 'a' value
    console.log(JSON.stringify(iteration)); // {"value":"a","done":false}

    valuesIterator.next(); // Skip 'b'

    iteration = valuesIterator.next(); // End of iterator set
    console.log(JSON.stringify(iteration)); // {"done":true}
  }

  {
    let mySet = new Set(['a', 'b']),
        valuesIterator = mySet.values();

    for (let next = valuesIterator.next(); !next.done; next = valuesIterator.next()) {
      console.log(JSON.stringify(next));
    }
  }
}());
