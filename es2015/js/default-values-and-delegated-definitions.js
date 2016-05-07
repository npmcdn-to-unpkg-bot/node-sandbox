
'use strict';

// function wrapper with rest args
(function() {
  'use strict';

  {
    function add(a = 1, b = 1) {
      return a + b;
    }
    function double(a) {
      return add(a, a);
    }

    console.log(double());   // 2
    console.log(double(2));   // 4
  }

  {
    class Logger {
      get level() {
        return this._level;
      }

      set level(level = 'info') {
        this._level = level;
      }

      get name() {
        return this._name;
      }

      set name(name = 'Logger') {
        this._name = name;
      }

      config(options) {
        this.level = options.level;
        this.name = options.name;
      }

      log(message) {
        console[this.level](`[${this.name}] ${message}`);
      }
    }

    const logger = new Logger();
    logger.config({name: 'Example'});
    logger.log('Hello world!');       // "[Example] Hello world!"
  }
}());
