// object literals
(function() {
  'use strict';

  // Property value shorthands
  {
    const x = 'test',
      y = 42;

    const myObjLonghand = {
      x: x,
      y: y,
    };
    const myObjShorthand = {
      x,
      y,
    };

    console.log(myObjShorthand); // Object {x: "test", y: 42}
    console.log(myObjLonghand); // Object {x: "test", y: 42}
  }

  // Property value shorthands only work on variable identifiers
  {
    // try {
    //   const primitiveLiteralShorthand = {
    //     21,
    //     'fails'
    //   };
    // } catch (error) {
    //   console.error(`Caught this syntax error: ${error}`);
    // }
  }

  // Function shorthands
  {
    const funcLonghand = {
      log: function(message) {
        console.log(message);
      }
    };
    const funcShorthand = {
      log(message) {
        console.log(message);
      }
    };

    funcShorthand.log('funcShorthand says hi...');
  }

  // Dynamic property names
  {
    const x = 'a',
      y = 10,
      propValue = 'foo-bar';

    const es5DynPropertyName = {};
    es5DynPropertyName[x + y] = propValue;

    const dynamicPropertyName = {
      [x + y]: propValue
    };

    console.log(es5DynPropertyName);
    console.log(dynamicPropertyName);
  }

  {
    const personPrototype = {
      getName() {
        return this.name;
      }
    };

    const person = {
      __proto__: personPrototype,
      name: 'Jim Halpert',
    };

    console.log(person.getName());
  }
}());
