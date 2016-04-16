// array from method
(function() {
  'use strict';

  {
    // Uses assignment operator.
    var integerConverter = {
      _int: 0,
      get value() {
        return this._int;
      },
      set value(newValue) {
        this._int = parseInt(newValue);
      }
    };

    console.log(integerConverter.value);  // 0
    integerConverter.value = '33';
    console.log(integerConverter.value);  // 33 (as number, not string)
  }
}());
