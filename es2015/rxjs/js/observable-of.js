(function() {
  'use strict';

  {
    console.log(`Array.of - Rest args`);
    var source$ = Rx.Observable.of('1', '1', 'foo', '2', '3', '5', 'bar', '8', '13');
    source$.subscribe(
      value => console.log(value)
    );
  }

  {
    console.log(`Array.of - Array with spread operator`);
    var sourceArr = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
    var source$ = Rx.Observable.of(...sourceArr);
    source$.subscribe(
      value => console.log(value)
    );
  }
}());
