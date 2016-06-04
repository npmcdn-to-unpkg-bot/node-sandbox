// destructuring
(function() {
  'use strict';

  // Default string
  {
    const string = "Letters";

    for (const char of string) {
      console.log(char);
    }
    // => L, e, t, t, e, r, s
  }

  // WorkTokenString impl
  {
    class WordTokenString extends String {
      [Symbol.iterator]() {
        const words = this.toString().match(/(\w+)+/g);

        return {
          next() {
            const value = words.shift();

            return {
              value,
              done: (value === undefined)
            };
          }
        }
      }
    }

    const testWordTokenString = new WordTokenString("All your base are belong to us");
    console.log(testWordTokenString.toString());
    // => All your base are belong to us

    // Iterates over words in a for-of loop
    for (const word of testWordTokenString) {
      console.log(word);
    }
    // => All, your, base, are, belong, to, us

    // Creates an array of the string's words using the spread operator
    const asArray = [...testWordTokenString];
    console.log(asArray);
    // => ["All", "your", "base", "are", "belong", "to", "us"]
  }

}());
