
'use strict';

// destructuring
(function() {
  'use strict';

  // Simple assignment
  {
    // Simple array assignment
    let [x = 3, y] = [];
    console.log(x, y);    // 3 undefined

    // Simple object prop assignment
    let {a = 'alpha', b = 'beta'} = {};
    console.log(a, b);    // 'alpha beta'
  }

  // Also used if match is undefined
  {
    let [x=1] = [];
    console.log(x);   // 1
    
    let {a = 'alpha', b = 'beta'} = {a: undefined};
    console.log(a, b);    // 'alpha beta'
  }

  // Defaults are evaluated at on-demand
  {
    function getNextId() {
      return 42;
    }

    let personModel = {firstName: 'Pam', lastName: 'Beasly'};
    let {id: id=getNextId()} = personModel;
    console.log(id);
  }

  // Destructuring in a for-of loop
  {
    const map = new Map([
      ['key1', 'value1'],
      ['key2', ],
      ['key3', ],
    ]);

    for (let [key, value='unknown'] of map.entries()) {
      console.log(`${key}: ${value}`);
    }
  }
}());
