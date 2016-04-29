// let and const
(function() {
  'use strict';

  class ConcreteDate {
    constructor(date) {
      this.date = date;
    }

    get date() {
      // Return shadow property.
      return this._date;
    }

    set date(newDate) {
      this._date = moment(newDate);
    }
  }

  const nowMoment = moment(),
        concreteDateMoment = new ConcreteDate(nowMoment);

  console.log(nowMoment.format('DD MMM YYYY'));   // "23 Apr 2016"
  console.log(concreteDateMoment.date.format('DD MMM YYYY'));   // "23 Apr 2016"
  nowMoment.add(7, 'days');
  console.log(nowMoment.format('DD MMM YYYY'));   // "30 Apr 2016"
  console.log(concreteDateMoment.date.format('DD MMM YYYY'));   // "23 Apr 2016"

  const concreteDateJsDate = new ConcreteDate(new Date());
  console.log(concreteDateJsDate.date.format('DD MMM YYYY'));   // "23 Apr 2016"
}());
