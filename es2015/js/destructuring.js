
'use strict';

// destructuring
(function() {
  'use strict';

  // Simple assignment
  {
    // Simple array assignment
    let [x, y] = ['1', '2'];
    console.log(x, y);

    // Longhand form
    let sourceArr = ['1', '2'],
        xL = sourceArr[0],
        yL = sourceArr[1];
    console.log(xL, yL);

    // Simple object prop assignment
    let {a, b} = {a: 'one', b: 'two'};
    console.log(a, b);
  }

  // Deep references
  {
    let {firstName, lastName, employment: {status}} = {
      firstName: 'Pam',
      lastName: 'Beasly',
      employment: {
        status: 'is secretarial'
      }
    }

    console.log(firstName, lastName, status);   // "Pam Beasly is secretarial"

    let [[x]] = [['foo'], 1];
    console.log(x);   // "foo"
  }

  // Fail-soft behavior
  {
    let [, notIgnored] = ['ignored', 'not ignored'];
    console.log(notIgnored);

    let {employment: {employed, salary}} = {employment: {employed: true}}
    console.log(employed, salary);    // true undefined
  }

  // Destructuring in a for-of loop
  {
    const map = new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]);

    for (let [key, value] of map.entries()) {
      console.log(`${key}: ${value}`);
    }
  }
}());
