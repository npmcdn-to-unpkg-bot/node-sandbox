
'use strict';

// destructuring
(function() {
  'use strict';

  // Just default values
  {
    function logger({message, level = 'info', source = 'Logger'} = {}) {
      console[level](`[${source}] ${message}`);
    }

    logger({message: 'All defaults'});    // [Logger] All defaults
    logger({message: 'Login succeeded', source: 'Auth'});   // [Auth] Login succeeded
    logger({message: 'Initializing', level: 'debug', source: 'FooWidget'});    // [FooWidget] Initializing
  }

  // Default values, and working with positional arguments
  {
    function printArray(array, {start = 0, end = array.length, step = 1} = {}) {
      for (let i = start; i < end; i = i + step) {
        console.log(array[i]);
      }
    }

    printArray(
      [1,2,3,4]
    );    // 1, 2, 3, 4

    printArray(
      [1,2,3,4],
      {start: 1, step: 2}
    );    // 2, 4
  }
}());
