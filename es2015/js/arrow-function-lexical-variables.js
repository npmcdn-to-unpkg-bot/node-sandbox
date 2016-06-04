// destructuring
(function() {
  'use strict';

  {
    class Greeter {
      constructor(name) {
        this.name = name;
      }

      greet(...people) {
        return people.map(person => {
          return `${this.name} says hello to ${person}`;
        });
      }
    }

    const greeter = new Greeter('George');
    console.log(
      greeter.greet('Ozzie', 'Harriet', 'Thorny')
    );
    // => ["George says hello to Ozzie", "George says hello to Harriet", "George says hello to Thorny"]

    const greeterLiteral = {name: 'George'};
    console.log(
      Greeter.prototype.greet.call(greeterLiteral, 'Ozzie', 'Harriet', 'Thorny')
    );
    // => ["George says hello to Ozzie", "George says hello to Harriet", "George says hello to Thorny"]
  }
}());
