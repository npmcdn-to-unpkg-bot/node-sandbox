// maps
(function() {
  'use strict';

  {
    function pairValues(a, b) {
      if (a === undefined) {
        throw new Error('Missing required argument a');
      }
      if (b === undefined) {
        throw new Error('Missing required argument b');
      }

      return [a, b];
    }

    try {
      pairValues()
    } catch (error) { console.error(error) }
  }

  {
    function reqdArg(name) {
      throw new Error(`Missing required argument ${name}`)
    }
    function pairValues(a = reqdArg('a'), b = reqdArg('b')) {
      return [a, b];
    }

    try {
      pairValues()
    } catch (error) { console.error(error) }
  }
}());
