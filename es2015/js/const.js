// let and const
(function() {
  'use strict';

  try {
    const name = 'Robin';

    console.log(name);  // "Robin"

    name = 'Bob';   // raises TypeError
  } catch (error) { console.error(error); }

  const employeeOfTheYear = {
    name: 'Micheal Scott'
  };

  employeeOfTheYear.name = 'Jim Halpert';
  console.log(employeeOfTheYear); // "{name: 'Jim Halper'}"

  try {
    console.log(foo);   // undefined
    console.log(bar);   // raises ReferenceError
  } catch (error) { console.error(error); }

  var foo = 'foo';
  const bar = 'bar';
}());
