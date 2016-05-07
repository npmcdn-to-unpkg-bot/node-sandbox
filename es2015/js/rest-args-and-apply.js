
'use strict';

// function wrapper with rest args
(function() {
  'use strict';

  {
    function add(a, b) {
      return a + b;
    }

    function logWrapper(wrappedFunc) {
      return function(...args) {
        console.log(`[${wrappedFunc.name}] start`);
        const result = wrappedFunc.apply(undefined, args);
        console.log(`[${wrappedFunc.name}] end`);

        return result;
      }
    }

    const addWrapped = logWrapper(add);

    console.log(addWrapped(2, 3));
  }
}());
