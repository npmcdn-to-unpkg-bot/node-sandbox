
describe('Simple Custom Matcher Example', () => {
  const customMatcher = {
    toBeOdd: function() {
      return {
        compare(actual) {
          const result = {};

          // Simple test for an odd number
          result.pass = actual % 2 === 1;

          // Pass along a custom message if the matcher fails
          if (!result.pass) {
            result.message = `${actual} is not an odd number`;
          }

          return result;
        }
      };
    }
  };

  beforeEach(function() {
    // Must add the matcher before each test.
    jasmine.addMatchers(customMatcher);
  });

  it('tests custom matcher', () => {
    // Standard style
    expect(3).toBeOdd();

    // With negation
    expect(4).not.toBeOdd();
  });
});

describe('Class Custom Matcher Example', () => {
  class ToBeOddMatcher {
    compare(actual) {
      const result = {};

      // Simple test for an odd number
      result.pass = actual % 2 === 1;

      // Pass along a custom message if the matcher fails
      if (!result.pass) {
        // Normal failure message
        result.message = `Expected ${actual} to be an odd number`;
      } else {
        result.message = `Expected ${actual} not to be an odd number, but it was`
      }

      return result;
    }
  }

  beforeAll(function() {
    // Must add the matcher before each test.
    jasmine.addMatchers({
      toBeOdd: () => new ToBeOddMatcher()
    });
  });

  it('tests custom matcher', () => {
    // Standard style
    expect(3).toBeOdd();

    // With negation
    expect(4).not.toBeOdd();

    // Would print out normal error message
    // expect(4).toBeOdd();

    // Would print out negated error message
    // expect(3).not.toBeOdd();
  });
});
