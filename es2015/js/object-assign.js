// array from method
(function() {
  'use strict';

  {
    // Basic usage
    const base = {},
          extensionA = {'new':'feature', 'foo':'bar'},
          extensionB = {'new':'value'};

    Object.assign(base, extensionA, extensionB);
    console.log(base);    // Object {new: "value", foo: "bar"}
  }

  {
    // Uses assignment operator.
    const integerConverter = {
      _int: 0,
      get value() {
        return this._int;
      },
      set value(newValue) {
        this._int = parseInt(newValue);
      }
    };

    Object.assign(integerConverter, {value: '33'});
    console.log(integerConverter.value);  // 33 (as number, not string)
  }

  {
    class Person {
      constructor(firstName, lastName) {
        Object.assign(this, {firstName, lastName});
      }
    }

    const michaelScott = new Person('Michael', 'Scott');
    console.log(michaelScott);    // Person {firstName: "Michael", lastName: "Scott"}
  }
}());
