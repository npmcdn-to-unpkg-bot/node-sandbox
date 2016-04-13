
'use strict';

// let, const

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {
  'use strict';

  if (true) {
    var block = "block";

    for (var x = 0; x < 10; x += 1) {
      console.log("let x be", x);
    }

    // x is undefined here.
    // console.log("Final x:", x);

    var PI = 3.14159;

    var TEST = {
      inner: 'a'
    };
    TEST.inner = 'b';
    console.log(TEST);
  }
})();

// default values
(function () {
  'use strict';

  function log(message) {
    var logLevel = arguments.length <= 1 || arguments[1] === undefined ? 'debug' : arguments[1];

    console[logLevel](message);
  }

  log('Defaults to debug');
  log('But can also warn', 'warn');
})();

// spread operator
(function () {
  'use strict';

  function sum(a, b, c) {
    return a + b + c;
  }

  var nums = [1, 2, 3];
  console.log(sum.apply(undefined, nums)); // 6

  console.log([].concat(nums, [4, 5])); // [1,2,3,4,5]
})();

// rest arguments
(function () {
  'use strict';

  function capitalize() {
    for (var _len = arguments.length, words = Array(_len), _key = 0; _key < _len; _key++) {
      words[_key] = arguments[_key];
    }

    return words.map(function (word) {
      return word.toUpperCase();
    });
  }
  console.log(capitalize('obvious', 'bicycle'));
})();

// template strings
(function () {
  'use strict';

  var multilineString = 'I begin here\n  indented\n...and end on this line.';

  console.log(multilineString);

  var a = 5,
      b = 'something';

  console.log('a is ' + a + ', b is ' + b);

  function tag(literals) {
    console.log(literals);

    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    console.log(values);
  }

  var target = 'world';
  console.log(tag(_templateObject, target));
})();

// string methods
(function () {
  'use strict';

  var testString = 'test string';

  console.log(testString.startsWith('test'));
  console.log(testString.endsWith('string'));

  console.log(testString.includes('ring'));
})();

// number methods
(function () {
  'use strict';

  console.log(Number.isFinite(1));
  console.log(Number.isFinite(Infinity));

  console.log(Number.isInteger(1));
  console.log(Number.isInteger(1.1));

  console.log(isNaN('NaN')); // true
  console.log(Number.isNaN('NaN')); // false

  console.log(Number.parseInt('1'));
  console.log(Number.parseFloat('1.0'));
})();

// array methods
(function () {
  'use strict';

  console.log(Array.of('test', [1, 2], { name: 'Fred' }));
  console.log(Array.of(3)); // [3]
  console.log(new Array(3)); // [undefined, undefined, undefined]

  function arrayFromArgs() {
    return Array.from(arguments);
  }

  console.log(arrayFromArgs('alpha', 'beta')); // ['alpha', 'beta']

  var superheroes = [{
    name: 'Peter Parker',
    superheroName: 'Spiderman'
  }, {
    name: 'Bruce Wayne',
    superheroName: 'Batman'
  }];

  function findByHeroName(name) {
    return superheroes.find(function (item) {
      return item.superheroName === name;
    });
  }

  console.log(findByHeroName('Batman'));

  function findHeroIndex(name) {
    return superheroes.findIndex(function (item) {
      return item.superheroName === name;
    });
  }

  console.log(findHeroIndex('Spiderman'));

  console.log(superheroes.copyWithin(1, 0));
})();

// object literals
(function () {
  'use strict';

  var x = 'test',
      y = 42;

  var myObj = {
    x: x, y: y
  };

  console.log(myObj);

  var objectWithMethod = {
    log: function log(message) {
      console.log(message);
    }
  };

  objectWithMethod.log('objectWithMethod says hi...');

  var dynamicPropertyName = _defineProperty({}, x + y, 'some value');

  console.log(dynamicPropertyName);

  var composedObj = Object.assign({}, myObj, objectWithMethod, dynamicPropertyName);
  console.log(composedObj);
})();

// sets
(function () {
  'use strict';

  var mySet = new Set();

  var anArray = [1, 2, 3, 4, 4, 1, 3, 2, 5];
  var setFromArray = new Set(anArray);
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

  setFromArray.forEach(function (value, dupe, set) {
    console.log(value);
  });
})();

// maps
(function () {
  'use strict';

  var myMap = new Map();
  var betterMap = new Map([['a', 'b'], [1, 2]]);
  console.log(betterMap);

  betterMap.set('deep', { e: 'f' });
  console.log(betterMap.get('deep'));
  console.log(betterMap.has('deep'));
})();

// iterators
(function () {
  'use strict';

  var mySet = new Set(['a', 'b', 'c']),
      mySetItems = mySet.entries();

  console.log(mySetItems.next());

  var myMap = new Map([['a', 1], ['b', 2]]);
  var myMapItems = myMap.entries();
  console.log(myMapItems.next());

  var mySetValues = mySet.values(),
      myMapValues = myMap.values();
  console.log(mySetValues.next());
  console.log(myMapValues.next());

  var myMapKeys = myMap.keys();
  console.log(myMapKeys.next());
})();

// for of loop
(function () {
  'use strict';

  var _arr = ['a', 'b', 'c'];
  for (var _i = 0; _i < _arr.length; _i++) {
    var val = _arr[_i];
    console.log(val);
  }

  var mySet = new Set(['a', 'b', 'c']);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mySet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _val = _step.value;

      console.log(_val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var myMap = new Map([['a', 1], ['b', 2]]);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = myMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _val2 = _step2.value;

      console.log(_val2);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
})();

// arrow functions
(function () {
  'use strict';

  var fn = function fn(param) {
    return param * param;
  };

  var fn2 = function fn2(param) {
    return param * param;
  };

  var fn3 = function fn3(param) {
    return param * param;
  };

  console.log(fn(3), fn2(3), fn3(3));

  var objLiteralFn = function objLiteralFn(param) {
    return { value: param };
  };
  console.log(objLiteralFn('alpha'));
})();

// generators
(function () {
  'use strict';

  var _marked = [square].map(regeneratorRuntime.mark);

  function square(x) {
    var y;
    return regeneratorRuntime.wrap(function square$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return x * x;

          case 2:
            _context.t0 = _context.sent;
            _context.t1 = x;
            y = _context.t0 * _context.t1;

            console.log('x was', x);
            console.log('y was', y);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked[0], this);
  }

  var squareGenerator = square(5);
  console.log(squareGenerator.next());
  console.log(squareGenerator.next(10));
})();

// promises
(function () {
  'use strict';

  var myPromise = new Promise(function (resolve, reject) {
    Math.random() < .5 ? resolve('success') : reject('failure');
  });

  myPromise.then(function (success) {
    console.log(success);

    return true;
  }).catch(function (error) {
    console.error(error);

    return false;
  }).then(function (something) {
    console.log('Something:', something);
  });
})();

// classes
(function () {
  'use strict';

  // Not hoisted
  // as statement

  var Employee = function () {
    function Employee(name) {
      _classCallCheck(this, Employee);

      this.name = name;
    }

    _createClass(Employee, [{
      key: 'shoutName',
      value: function shoutName() {
        return this.name.toUpperCase();
      }
    }, {
      key: 'work',
      value: function work() {
        console.log(this.name, 'grumbles "work work work..."');
      }
    }], [{
      key: 'reverseName',
      value: function reverseName(employee) {
        return employee.name.split('').reverse().join('');
      }
    }]);

    return Employee;
  }();

  // as expression


  var classExpress = function classExpress() {
    _classCallCheck(this, classExpress);
  };

  var jim = new Employee('Jim Halpert');
  console.log(jim.shoutName());
  console.log(Employee.reverseName(jim));

  var Boss = function (_Employee) {
    _inherits(Boss, _Employee);

    function Boss() {
      _classCallCheck(this, Boss);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Boss).apply(this, arguments));
    }

    _createClass(Boss, [{
      key: 'work',
      value: function work() {
        console.log(_get(Object.getPrototypeOf(Boss.prototype), 'shoutName', this).call(this), 'is working LIKE A BOSS');
      }
    }]);

    return Boss;
  }(Employee);

  var micheal = new Boss('Micheal Scott');
  jim.work();
  micheal.work();
})();

// destructuring
(function () {
  'use strict';

  var x = '1';
  var y = '2';

  console.log(x, y);

  var _a$b = { a: 'one', b: 'two' };
  var a = _a$b.a;
  var b = _a$b.b;

  console.log(a, b);

  var _ref = ['ignored', 'not ignored'];
  var notIgnored = _ref[1];

  console.log(notIgnored);

  var _firstName$lastName$e = {
    firstName: 'Pam',
    lastName: 'Beasly',
    employment: {
      status: 'is secretarial'
    }
  };
  var firstName = _firstName$lastName$e.firstName;
  var lastName = _firstName$lastName$e.lastName;
  var status = _firstName$lastName$e.employment.status;


  console.log(firstName, lastName, status);
})();
//# sourceMappingURL=es5.js.map
