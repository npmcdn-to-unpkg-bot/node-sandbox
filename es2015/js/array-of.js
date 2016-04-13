// array from method
(function() {
  'use strict';

  {
    let arrayLiteral = [1,2,3];
    let arrayOf = Array.of(1,2,3);
    console.log(arrayLiteral);  // [1, 2, 3]
    console.log(arrayOf);       // [1, 2, 3]
  }

  {
    let array12 = new Array(1, 2);
    let array2 = new Array(2);
    let arrayOf = Array.of(2);
    console.log(array12);     // [1, 2]
    console.log(array2);     // [undefined, undefined]
    console.log(arrayOf);   // [2]
  }

  {
    class SubArray extends Array {
      sum() {
        return this.reduce((accumulator, currValue) => {
          return accumulator + currValue;
        }, 0);
      }
    }

    let subArray = SubArray.of(1,2,3,4);
    console.log(subArray instanceof SubArray);  // true
    console.log(subArray.sum());                // 10
  }
}());
