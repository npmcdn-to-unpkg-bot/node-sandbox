// destructuring
(function() {
  'use strict';

  {
    function getFreezingPoint() {
      return {
        celsius: 0,
        farenheit: 32
      };
    }

    let {celsius, farenheit} = getFreezingPoint();
    console.log(`Celsius: ${celsius} -- Farenheit: ${farenheit}`);

    // let {celsius} = getFreezingPoint();
    // console.log(`Celsius: ${celsius}`);
    //
    // let {farentheit} = getFreezingPoint();
    // console.log(`Farenheit: ${farenheit}`);
  }
}());
