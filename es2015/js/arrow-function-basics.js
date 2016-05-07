
'use strict';

// arrow functions
(function() {
  'use strict';

  // Simple shorthand

  var square = (param) => {
    return param * param;
  };
  var squareLonghand = function(param) {
    return param * param;
  };
  console.log(square(2));   // 4

  var fn2 = param => {
    return param * param;
  };

  var fn3 = param => param * param;

  console.log(
    square(3),
    fn2(3),
    fn3(3)
  );

  // What is this supposed to be? I forgot...
  // var objLiteralFn = param => ({value: param});
  // console.log(objLiteralFn('alpha'));

  var add = (a, b) => { return a + b; };
  console.log(add(1,2));
}());
