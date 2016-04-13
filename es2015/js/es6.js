
'use strict';

// let, const (X)
(function() {
  'use strict';

  if (true) {
    let block = "block";

    for (let x = 0; x < 10; x += 1) {
      console.log("let x be", x);
    }

    // x is undefined here.
    // console.log("Final x:", x);

    const PI = 3.14159;

    const TEST = {
      inner: 'a'
    };
    TEST.inner = 'b';
    console.log(TEST);
  }
}());

// default values (X)
(function() {
  'use strict';

  function log(message, logLevel = 'debug') {
    console[logLevel](message);
  }

  log('Defaults to debug');
  log('But can also warn', 'warn');
}());

// spread operator (X)
(function() {
  'use strict';

  function sum(a, b, c) {
    return a + b + c;
  }

  let nums = [1, 2, 3];
  console.log(sum(...nums));      // 6

  console.log([...nums, 4, 5]);   // [1,2,3,4,5]
}());

// rest arguments (X)
(function() {
  'use strict';

  function capitalize(...words) {
    return words.map(function(word) { return word.toUpperCase(); });
  }
  console.log(capitalize('obvious','bicycle'));
}());

// template strings (X)
(function() {
  'use strict';

  var multilineString = `I begin here
  indented
...and end on this line.`;

  console.log(multilineString);

  let a = 5,
      b = 'something';

  console.log(`a is ${a}, b is ${b}`);

  function tag(literals, ...values) {
    console.log(literals);
    console.log(values);
  }

  let target = 'world';
  console.log(tag`Hello ${target}`);
}());

// string methods (X)
(function() {
  'use strict';

  var testString = 'test string';

  console.log(testString.startsWith('test'));
  console.log(testString.endsWith('string'));

  console.log(testString.includes('ring'));
}());

// number methods (X)
(function() {
  'use strict';

  console.log(Number.isFinite(1));
  console.log(Number.isFinite(Infinity));

  console.log(Number.isInteger(1));
  console.log(Number.isInteger(1.1));

  console.log(isNaN('NaN'));  // true
  console.log(Number.isNaN('NaN'));   // false

  console.log(Number.parseInt('1'));
  console.log(Number.parseFloat('1.0'));
}());

// array methods
(function() {
  'use strict';

  console.log(Array.of('test', [1,2], {name: 'Fred'}));
  console.log(Array.of(3));   // [3]
  console.log(new Array(3));  // [undefined, undefined, undefined]

  function arrayFromArgs() {
    return Array.from(arguments);
  }

  console.log(arrayFromArgs('alpha', 'beta'));  // ['alpha', 'beta']

  let superheroes = [
    {
      name: 'Peter Parker',
      superheroName: 'Spiderman'
    },
    {
      name: 'Bruce Wayne',
      superheroName: 'Batman'
    }
  ];

  function findByHeroName(name) {
    return superheroes.find(function(item) {
      return item.superheroName === name;
    });
  }

  console.log(findByHeroName('Batman'));

  function findHeroIndex(name) {
    return superheroes.findIndex(function(item) {
      return item.superheroName === name;
    });
  }

  console.log(findHeroIndex('Spiderman'));

  console.log(superheroes.copyWithin(1, 0));
}());

// object literals
(function() {
  'use strict';

  var x = 'test',
      y = 42;

  let myObj = {
    x, y
  };

  console.log(myObj);

  let objectWithMethod = {
    log(message) {
      console.log(message);
    }
  };

  objectWithMethod.log('objectWithMethod says hi...');

  let dynamicPropertyName = {
    [x+y]: 'some value'
  };

  console.log(dynamicPropertyName);

  let composedObj = Object.assign({}, myObj, objectWithMethod, dynamicPropertyName);
  console.log(composedObj);
}());

// sets
(function() {
  'use strict';

  var mySet = new Set();

  let anArray = [1,2,3,4,4,1,3,2,5];
  let setFromArray = new Set(anArray);
  console.log(setFromArray);
  console.log(setFromArray.size);

  mySet.add('one').add('two');
  console.log(mySet);
  console.log(mySet.delete('one')); // true
  console.log(mySet.delete('nope')); // false

  mySet.clear();
  console.log(mySet);

  mySet.add('something');
  console.log(mySet.has('something')); // true

  setFromArray.forEach(function(value, dupe, set) {
    console.log(value);
  });
}());

// maps (X)
(function() {
  'use strict';

  var myMap = new Map();
  let betterMap = new Map([
    ['a','b'],
    [1,2]
  ]);
  console.log(betterMap);

  betterMap.set('deep', {e: 'f'});
  console.log(betterMap.get('deep'));
  console.log(betterMap.has('deep'));
}());

// iterators
(function() {
  'use strict';

  let mySet = new Set(['a', 'b', 'c']),
      mySetItems = mySet.entries();

  console.log(mySetItems.next());


  let myMap = new Map([
    ['a', 1],
    ['b', 2]
  ]);
  let myMapItems = myMap.entries();
  console.log(myMapItems.next());

  let mySetValues = mySet.values(),
      myMapValues = myMap.values();
  console.log(mySetValues.next());
  console.log(myMapValues.next());

  let myMapKeys = myMap.keys();
  console.log(myMapKeys.next());
}());

// for of loop
(function() {
  'use strict';

  for (let val of ['a','b','c']) {
    console.log(val);
  }

  let mySet = new Set(['a','b','c']);
  for (let val of mySet) {
    console.log(val);
  }

  let myMap = new Map([['a', 1], ['b', 2]]);
  for (let val of myMap) {
    console.log(val);
  }
}());

// arrow functions
(function() {
  'use strict';

  var fn = (param) => {
    return param * param;
  };

  var fn2 = param => {
    return param * param;
  };

  var fn3 = param => param * param;

  console.log(
    fn(3),
    fn2(3),
    fn3(3)
  );

  var objLiteralFn = param => ({value: param});
  console.log(objLiteralFn('alpha'));
}());

// generators
(function() {
  'use strict';

  function* square(x) {
    let y = (yield x * x) * x;
    console.log('x was', x);
    console.log('y was', y);
  }

  let squareGenerator = square(5);
  console.log(squareGenerator.next());
  console.log(squareGenerator.next(10));
}());

// promises
(function() {
  'use strict';

  var myPromise = new Promise(function(resolve, reject) {
    (Math.random() < .5) ? resolve('success') : reject('failure');
  });

  myPromise
    .then(function(success) {
      console.log(success);

      return true;
    })
    .catch(function(error) {
      console.error(error);

      return false;
    })
    .then(function(something) {
      console.log('Something:', something);
    });
}());

// classes
(function() {
  'use strict';

  // Not hoisted
  // as statement
  class Employee {
    constructor(name) {
      this.name = name;
    }

    shoutName() {
      return this.name.toUpperCase();
    }

    work() {
      console.log(this.name, 'grumbles "work work work..."');
    }

    static reverseName(employee) {
      return employee.name.split('').reverse().join('');
    }
  }

  // as expression
  var classExpress = class {
  }

  var jim = new Employee('Jim Halpert');
  console.log(jim.shoutName());
  console.log(Employee.reverseName(jim));

  let Boss = class Boss extends Employee {
    work() {
      console.log(super.shoutName(), 'is working LIKE A BOSS');
    }
  }

  let micheal = new Boss('Micheal Scott');
  jim.work();
  micheal.work();
}());

// destructuring
(function() {
  'use strict';

    let [x, y] = ['1', '2'];
    console.log(x, y);

    let {a, b} = {a: 'one', b: 'two'};
    console.log(a, b);

    let [, notIgnored] = ['ignored', 'not ignored'];
    console.log(notIgnored);

    let {firstName, lastName, employment: {status}} = {
      firstName: 'Pam',
      lastName: 'Beasly',
      employment: {
        status: 'is secretarial'
      }
    }

    console.log(firstName, lastName, status);
}());
