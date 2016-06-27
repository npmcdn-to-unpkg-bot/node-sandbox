import {Calculator} from '../src/calculator';

describe('Calculate', () => {
  describe('.add', () => {

    /*
      beforeEach shares a `this` context with the it tests--but only if ES5-style
      functions are declared. If ES6 arrow functions are used, lexical this
      gets in the way and prevents the functions from accessing the desired
      `this`.
    */
    beforeEach(function() {
      this.calculator = new Calculator();
    });

    it('adds two integers', function() {
      // Arrange
      const int1 = 1,
            int2 = 2,
            expected = 3;

      // Act
      const result = this.calculator.add(int1, int2);

      // Assert
      expect(result).toEqual(expected);
    });

    it('adds one integer, one string', function() {
      // Arrange
      const int1 = 1,
            string1 = '2',
            expected = 3;

      // Act
      const result = this.calculator.add(int1, string1);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
