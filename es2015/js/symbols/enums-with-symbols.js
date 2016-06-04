// let and const
(function() {
  'use strict';

  {
    const OPTIONS = {
      A: Symbol('A'),
      B: Symbol('B'),
    };

    function parser(option) {
      switch (option) {
        case OPTIONS.A:
          console.log('Option A selected');
          break;
        case OPTIONS.B:
          console.log('Option B selected');
          break;
        default:
          throw new Error('Unknown option');
      }
    }

    parser(OPTIONS.A);
    parser(OPTIONS.B);
    try {
      parser(Symbol('A'));
    } catch (error) {
      console.error(error);   // Error: Unknown option
    }
  }

  {
    const INPUT_OPTIONS = {
      KEYBOARD: Symbol('KEYBOARD'),
      FILE: Symbol('FILE'),
    };

    const OUTPUT_OPTIONS = {
      SCREEN: Symbol('SCREEN'),
      FILE: Symbol('FILE'),
    };

    function readInput(inputSource) {
      switch (inputSource) {
        case INPUT_OPTIONS.KEYBOARD:
          console.log('Keyboard input selected');
          break;
        case INPUT_OPTIONS.FILE:
          console.log('File input selected');
          break;
        default:
          throw new Error('Unknown option');
      }
    }

    readInput(INPUT_OPTIONS.KEYBOARD);
    readInput(INPUT_OPTIONS.FILE);
    try {
      readInput(OUTPUT_OPTIONS.FILE);
    } catch (error) {
      console.error(error);   // Error: Unknown option
    }
  }
}());
