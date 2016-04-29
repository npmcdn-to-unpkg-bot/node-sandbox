// let and const
(function() {
  'use strict';

  class Person {
    constructor(name) {
      this.name = name;
    }

    static fromJson(jsonTxt) {
      const rawObj = JSON.parse(jsonTxt),
            person = new Person(rawObj.name);

      return person;
    }
  }

  const jim = Person.fromJson('{"name":"Jim"}');
  console.log(jim.name);
  console.log(jim.fromJson);
}());
