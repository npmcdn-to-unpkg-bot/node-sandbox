// let and const
(function() {
  'use strict';

  // Simple extends usage, super usage
  {
    class Employee {
      constructor(name) {
        this.name = name;
      }

      reportWork(task) {
        return `My name is ${this.name} and I'm working on ${task}`
      }
    }

    class Manager extends Employee {
      reportWork(task) {
        return `${super.reportWork(task)}--like a boss!`;
      }
    }

    const jim = new Employee('Jim'),
          michael = new Manager('Michael');

    console.log(jim.reportWork('spreadsheets'));
    // => My name is Jim and I'm working on spreadsheets
    console.log(michael.reportWork('monthly reports'));
    // => My name is Michael and I'm working on monthly reports--like a boss!
  }

  // Simple extends usage, super usage
  {
    class Employee {
      constructor(name) {
        this.name = name;
      }

      reportWork(task) {
        return `My name is ${this.name} and I'm working on ${task}`
      }
    }

    class Manager extends Employee {
      constructor(name) {
        super(name);
      }
      
      reportWork(task) {
        return `${super.reportWork(task)}--like a boss!`;
      }
    }

    const jim = new Employee('Jim'),
          michael = new Manager('Michael');

    console.log(jim.reportWork('spreadsheets'));
    // => My name is Jim and I'm working on spreadsheets
    console.log(michael.reportWork('monthly reports'));
    // => My name is Michael and I'm working on monthly reports--like a boss!
  }

  // Classes can use super in constructor, but must do so before referencing this.
  {
    class Original { }

    class DerivedBroken extends Original {
      constructor(name) {
        // This causes a ReferenceError ("this is not defined")
        this.name = name;

        super();
      }
    }

    class DerivedWorking extends Original {
      constructor(name) {
        // This constructor works fine.
        super();
        this.name = name;
      }
    }

    try {
      new DerivedBroken();
    } catch (error) {
      console.error(error);   // ReferenceError: this is not defined
    }
  }

  // If you override a constructor in extends, you must explicitly call super().
  {
    class Original {}

    class DerivedBroken extends Original {
      constructor() {
        // Doesn't call super(); throws ReferenceError
      }
    }

    try {
      new DerivedBroken();
    } catch (error) {
      console.error(error);   // ReferenceError: this is not defined
    }
  }

  // Default derived constructor
  {
    class Original {}

    class Derived extends Original {
      constructor(...args) {
        super(...args);
      }
    }
  }

  // Extend any built-in class
  {
    class RequiredFieldError extends Error {
      constructor(fieldName) {
        super(`'${fieldName}' requires a value but none was provided`);
      }
    }

    try {
      throw new RequiredFieldError('lastName');
    } catch (error) {
      console.error(error); // RequiredFieldError: 'lastName' requires a value but none was provided
    }
  }
}());
