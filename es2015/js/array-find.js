// array from method
(function() {
  'use strict';

  // Looks like "holes" aren't skipped
  {
    let array = [1,,3],
        counter = 0;

    array.find(element => {
      counter++;
    });

    console.log(counter);   // 3
  }

  {
    let array = [1,2,3,4];

    console.log(array.indexOf(2));                // 1
    console.log(array.findIndex(x => x === 2));   // 1
    console.log(array.findIndex(x => x > 2));     // 2
  }

  {
    let people = [
      {
        firstName: 'Bran',
        lastName: 'Stark'
      },
      {
        firstName: 'Arya',
        lastName: 'Stark'
      },
      {
        firstName: 'Tyrion',
        lastName: 'Lannister'
      },
    ];

    let arya = people.find(person => {
      return person.firstName === 'Arya' && person.lastName === 'Stark';
    });
    console.log('Found:', arya);
    // => Found: Object {firstName: "Arya", lastName: "Stark"}
  }
}());
