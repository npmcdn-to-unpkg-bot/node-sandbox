// let and const
(function() {
  'use strict';

  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    sayName() {
      return `Hello, my name is ${this.name}`;
    }
  }

  const jimHalpert = new PersonClass('Jim Halpert', 30);
  console.log(jimHalpert.sayName());    // "Jim Halpert"

  function PersonFunc(name, age) {
    this.name = name;
    this.age = age;
  }
  PersonFunc.prototype.sayName = function() {
    return `Hello, my name is ${this.name}`;
  }

  const michaelScott = new PersonFunc('Michael Scott', 45);
  console.log(michaelScott.sayName());      // "Michael Scott"
}());
