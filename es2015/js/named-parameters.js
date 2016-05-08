
'use strict';

// destructuring
(function() {
  'use strict';

  // Simple assignment
  {
    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      sayName() {
        return `My name is ${this.firstName} ${this.lastName}`;
      }
    }

    function createPerson({firstName, lastName} = {}) {
      return new Person(firstName, lastName);
    }

    const jim = createPerson({firstName: 'Jim', lastName: 'Halpert'});
    console.log(jim.sayName());   // "My name is Jim Halpert"

    const dwight = createPerson({lastName: 'Schrute', firstName: 'Dwight'});
    console.log(dwight.sayName());    // "My name is Dwight Schrute"
  }
}());
