'use strict';

// default values
(function () {
  'use strict';

  function logDefSecond(message) {
    var logLevel = arguments.length <= 1 || arguments[1] === undefined ? 'debug' : arguments[1];

    console[logLevel](message);
  }
  function logDefFirst() {
    var logLevel = arguments.length <= 0 || arguments[0] === undefined ? 'debug' : arguments[0];
    var message = arguments[1];

    console[logLevel](message);
  }

  log('Defaults to debug');
  log('warn', 'But can also warn');
})();
//# sourceMappingURL=test-5.js.map
