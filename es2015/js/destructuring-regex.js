
'use strict';

// destructuring
(function() {
  'use strict';

  {
    // Phone number regex
    const phoneRegex = /^(\d{3})-(\d{3})-(\d{4})$/;

    let [fullMatch, areaCode, exchange, subscriberNumber] = phoneRegex.exec('844-555-1234');
    console.log(areaCode, exchange, subscriberNumber);    // 844 555 1234

    let [, areaCode, exchange, subscriberNumber] = phoneRegex.exec('844-555-1234');
    console.log(areaCode, exchange, subscriberNumber);    // 844 555 1234
  }
}());
