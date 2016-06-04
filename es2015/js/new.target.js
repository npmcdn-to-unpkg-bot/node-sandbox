// let and const
(function() {
  'use strict';

  // Guarding against non-constructor usage
  {
    function Person(name) {
      if (new.target === undefined) {
        throw `Person() must be called as a constructor`;
      }

      this.name = name;
    }

    try {
      console.log(Person('Jimmy'));
    } catch (error) {
      console.error(error);
    }
    // => Person() must be called as a constructor

    console.log(new Person('Jimmy'));
    // => Person {name: "Jimmy"}
  }

  // Guarding constructor usage for non-constructor function
  {
    function greet(name) {
      if (new.target !== undefined) {
        throw `greet cannot be called as a constructor`;
      }

      return `Hello ${name}!`
    }

    try {
      console.log(new greet('Jimmy'));
    } catch (error) {
      console.error(error);
    }
    // => greet cannot be called as a constructor

    console.log(greet('Jimmy'));
    // => Hello Jimmy!
  }

  {
    class Person {
      constructor() {
        console.log(new.target.name);
      }
    }

    class Employee extends Person { }

    new Person();     // => Person
    new Employee();   // => Employee
  }
}());
