import {toUpperCase} from '../src/component';

describe('component', () => {
  it('should convert text to all uppercase', () => {
    // Arrange
    const input = 'cat',
          expected = 'CAT';

    // Act
    const result = toUpperCase(input);

    // Assert
    expect(result).toEqual(expected);
  });
});
