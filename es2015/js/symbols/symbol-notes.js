// let and const
(function() {
  'use strict';

  {
    const obj = {
      string: 'foo',
      [Symbol()]: 'bar'
    };

    // Only symbol-keyed properties
    console.log(Object.getOwnPropertySymbols(obj));
    // => [Symbol()]

    // All keys
    console.log(Reflect.ownKeys(obj));
    // => ["string", Symbol()]

    // Only string-keyed properties
    console.log(Object.getOwnPropertyNames(obj));
    // => ["string"]

    // Only string-keyed properties
    console.log(Object.keys(obj));
    // => ["string"]
  }
}());
