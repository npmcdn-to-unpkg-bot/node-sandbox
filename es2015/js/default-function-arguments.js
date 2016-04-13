// default values
(function() {
  'use strict';

  function log(message, logLevel = 'debug') {
    console[logLevel](message);
  }

  log('Defaults to debug');
  log('But can also warn', 'warn');

  // This doesn't really work, unless it's called with fn(undefined, 'log message')
  function logDefFirst(logLevel = 'debug', message) {
    console[logLevel](message);
  }

  logDefFirst(undefined, 'debug message');
  logDefFirst('warn', 'warn message');

  function sayHi(myName = this.firstName) {
    return `${myName} says hello!`;
  }

  let person = {
    firstName: 'Linus',
    lastName: 'Torvalds'
  };

  console.log(sayHi.call(person));
  console.log(sayHi.call(person, person.lastName));
}());
